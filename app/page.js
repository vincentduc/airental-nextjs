import Link from 'next/link';
import { categories } from '../data/equipment';

export default function Page() {
  const chips = ['Bikes', 'Skis', 'Paddle', 'Golf clubs', 'Cameras', 'SUP'];

  return (
    <>
      {/* top chips like the landing */}
      <div style={{display:'flex',gap:12, padding:'12px 24px', borderBottom:'1px solid #eee', flexWrap:'wrap'}}>
        {chips.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      {/* HERO = left text + right “What’s included” box */}
      <section className="hero" style={{padding:'24px'}}>
        <span className="badge">Sports &amp; gear rentals in Zurich</span>
        <h1>Rent bikes, skis, clubs &amp; more in Zurich.<br/>Book in 30 seconds.</h1>
        <p>
          Pick your gear, start time, and pickup point. Simple payment, 7/7 support,
          and the right accessories included where relevant.
        </p>

        <div style={{display:'grid', gap:24, gridTemplateColumns:'minmax(240px,1fr) 420px', alignItems:'start', marginTop:16}}>
          <div style={{display:'flex', gap:12}}>
            <a className="btn" href="https://wa.me/41772619708" target="_blank" rel="noopener noreferrer">Book now</a>
            <Link className="btn secondary" href="/how-it-works">See how it works</Link>
          </div>

          {/* What's included box */}
          <aside style={{
            border:'1px solid #e5e7eb',
            borderRadius:12,
            padding:'16px 18px',
            background:'#fff',
            boxShadow:'0 1px 0 rgba(0,0,0,.02)'
          }}>
            <h4 style={{margin:'0 0 8px'}}>What’s included</h4>
            <ul style={{margin:0, paddingLeft:18, lineHeight:1.75}}>
              <li>Accessories when relevant (e.g., helmet, lock, lights)</li>
              <li>Maintained, safety‑checked gear</li>
              <li>QR code to pick up your gear</li>
              <li>On‑city assistance if needed</li>
            </ul>
          </aside>
        </div>

        {/* KPI tiles under hero */}
        <div style={{
          marginTop:24,
          display:'grid',
          gap:16,
          gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))'
        }}>
          <div className="tile">
            <div className="kpi">10+</div>
            <div>central pickup points</div>
          </div>
          <div className="tile">
            <div className="kpi">24/7</div>
            <div>help &amp; assistance</div>
          </div>
          <div className="tile">
            <div className="kpi">Insurance</div>
            <div>available (damage &amp; theft*)</div>
          </div>
        </div>
      </section>

      {/* category cards (keep your existing functional section) */}
      <section style={{padding:'0 24px', marginTop:24}}>
        <div className="grid"
             style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:24}}>
          {categories.map((c) => (
            <div key={c.slug} className="card"
                 style={{padding:16,border:'1px solid #e5e7eb',borderRadius:12,display:'flex',flexDirection:'column',justifyContent:'space-between',background:'#fff'}}>
              <div>
                <h3 style={{margin:'0 0 6px'}}>{c.name}</h3>
                <p style={{margin:0, color:'#475569'}}>{c.description}</p>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
                <span className="price-pill">{c.price}</span>
                <Link href={`/category/${c.slug}`}>See gear</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* footer (as you had) */}
      <footer style={{marginTop:48,padding:'24px',borderTop:'1px solid #eee',display:'flex',justifyContent:'center',gap:24,fontSize:14}}>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <a href="mailto:support@airental.ch">support@airental.ch</a>
      </footer>
    </>
  );
}