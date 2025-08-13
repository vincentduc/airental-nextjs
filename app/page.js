import Link from 'next/link';
import { categories } from '../data/equipment';

export default function Page() {
  const chips = ['Bikes', 'Skis', 'Paddle', 'Golf clubs', 'Cameras', 'SUP'];

  return (
    <>
      {/* Top chips row */}
      <div className="container" aria-label="Categories">
        {/* scroller makes the row horizontally scrollable on mobile */}
        <div
          className="chips scroller"
          style={{
            display: 'flex',
            gap: 12,
            padding: '12px 0',
            borderBottom: '1px solid #eee',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {chips.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="badge">Sports &amp; gear rentals in Zurich</span>

          <h1>
            Rent bikes, skis, clubs &amp; more in Zurich.<br />
            Book in 30 seconds.
          </h1>

          <p>
            Pick your gear, start time, and pickup point. Simple payment, 7/7 support,
            and the right accessories included where relevant.
          </p>

          {/* On mobile this stacks naturally; on wide screens CSS can make it 2-cols */}
          <div className="hero-grid" style={{ display: 'grid', gap: 20 }}>
            {/* CTAs */}
            <div className="actions" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn" href="https://wa.me/41772619708" target="_blank" rel="noopener noreferrer">
                Book now
              </a>
              <Link className="btn secondary" href="/how-it-works">
                See how it works
              </Link>
            </div>

            {/* What's included box */}
            <aside
              className="included"
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '16px 18px',
                background: '#fff',
                boxShadow: '0 1px 0 rgba(0,0,0,.02)'
              }}
            >
              <h4 style={{ margin: '0 0 8px' }}>What’s included</h4>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75 }}>
                <li>Accessories when relevant (e.g., helmet, lock, lights)</li>
                <li>Maintained, safety-checked gear</li>
                <li>QR code to pick up your gear</li>
                <li>On-city assistance if needed</li>
              </ul>
            </aside>
          </div>

          {/* KPI tiles under hero */}
          <div className="grid" style={{ marginTop: 24 }}>
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
        </div>
      </section>

      {/* Category cards */}
      <section>
        <div className="container">
          <div className="grid">
            {categories.map((c) => (
              <div
                key={c.slug}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <h3 style={{ margin: '0 0 6px' }}>{c.name}</h3>
                  <p style={{ margin: 0, color: '#475569' }}>{c.description}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 12
                  }}
                >
                  <span className="price-pill">{c.price}</span>
                  <Link href={`/category/${c.slug}`}>See gear</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 24, fontSize: 14, padding: '24px' }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:support@airental.ch">support@airental.ch</a>
        </div>
      </footer>
    </>
  );
}