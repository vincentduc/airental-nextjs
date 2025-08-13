
'use client';
import { useState } from 'react';

export default function BookingForm({ category, priceDay, priceHour }){
  const [form, setForm] = useState({ name:'', email:'', phone:'', pickup:'Zurich HB', date:'', duration:'day', quantity:1 });
  const [loading, setLoading] = useState(false);

  const total = form.duration === 'hour' && priceHour ? priceHour * form.quantity : priceDay * form.quantity;

  function update(k,v){ setForm(prev => ({...prev, [k]:v})) }

  async function pay(){
    setLoading(true);
    try{
      const res = await fetch('/api/checkout', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ ...form, category, total })
      });
      const data = await res.json();
      if(data.url){ window.location.href = data.url; }
      else { alert('Checkout error'); setLoading(false); }
    }catch(e){ console.error(e); alert('Something went wrong'); setLoading(false); }
  }

  return (
    <div className="card">
      <h3>Book now</h3>
      <div className="form-row">
        <div>
          <div className="label">Name</div>
          <input value={form.name} onChange={e=>update('name', e.target.value)} placeholder="Your full name"/>
        </div>
        <div>
          <div className="label">Email</div>
          <input value={form.email} onChange={e=>update('email', e.target.value)} placeholder="you@email.com"/>
        </div>
      </div>
      <div className="form-row">
        <div>
          <div className="label">Phone</div>
          <input value={form.phone} onChange={e=>update('phone', e.target.value)} placeholder="+41 .."/>
        </div>
        <div>
          <div className="label">Pickup point</div>
          <select value={form.pickup} onChange={e=>update('pickup', e.target.value)}>
            <option>Zurich HB</option>
            <option>Bellevue</option>
            <option>Enge</option>
            <option>Oerlikon</option>
            <option>Wollishofen</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div>
          <div className="label">Date</div>
          <input type="date" value={form.date} onChange={e=>update('date', e.target.value)}/>
        </div>
        <div>
          <div className="label">Duration</div>
          <select value={form.duration} onChange={e=>update('duration', e.target.value)}>
            {priceHour ? <option value="hour">Hour</option> : null}
            <option value="day">Day</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div>
          <div className="label">Quantity</div>
          <input type="number" min="1" value={form.quantity} onChange={e=>update('quantity', Number(e.target.value))}/>
        </div>
        <div style={{display:'flex',alignItems:'flex-end',gap:12}}>
          <button className="btn" onClick={pay} disabled={loading}>{loading? 'Redirecting…' : `Pay CHF ${total}`}</button>
          <a className="btn secondary" href={`https://wa.me/41772619708?text=Hi%20Airental!%20I'd%20like%20to%20book%20${category}%20on%20${form.date}%20from%20${form.pickup}.`} target="_blank">WhatsApp instead</a>
        </div>
      </div>
    </div>
  );
}
