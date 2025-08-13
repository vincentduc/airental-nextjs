
import Stripe from 'stripe';

export async function POST(req){
  const body = await req.json();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const amount = Math.round(Number(body.total) * 100);

  try{
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'chf',
          product_data: {
            name: `${body.category} rental`,
            description: `Pickup: ${body.pickup} — Date: ${body.date} — Duration: ${body.duration} — Qty: ${body.quantity}`
          },
          unit_amount: amount
        },
        quantity: 1
      }],
      metadata: { 
        name: body.name, email: body.email, phone: body.phone, 
        pickup: body.pickup, date: body.date, duration: body.duration, qty: String(body.quantity) 
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/?paid=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/?canceled=1`
    });
    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  }catch(e){
    console.error(e);
    return new Response(JSON.stringify({ error: 'Stripe error' }), { status: 500 });
  }
}
