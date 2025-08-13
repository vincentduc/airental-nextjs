
# Airental (Next.js MVP)

A minimal Next.js site with category pages, a booking form, and Stripe Checkout.

## Quick start

1. Install: `npm install`
2. Copy `.env.example` to `.env` and set:
   - `STRIPE_SECRET_KEY` (test key)
   - `NEXT_PUBLIC_SITE_URL` (e.g., http://localhost:3000)
3. Run: `npm run dev`
4. Open http://localhost:3000

## Add your equipment photos
Place images into `/public/images` and update `data/equipment.js`.

## Notes
- Checkout uses Stripe cards by default. TWINT can be added later via your chosen PSP (Stripe Payment Element if available for your account, or Payrexx/Datatrans). 
- Metadata on the Checkout session includes pickup/date/duration to see details in the Stripe Dashboard.
