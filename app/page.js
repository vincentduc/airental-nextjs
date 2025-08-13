import Link from 'next/link';
import { categories } from '../data/equipment';

export default function Page() {
  const chips = ['Bikes', 'Skis', 'Paddle', 'Golf clubs', 'Cameras', 'SUP'];

  return (
    <>
      {/* Top chips row */}
      <div className="container" aria-label="Categories">
        <div className="chips">
          {chips.map((t) => {
            const slug = t.toLowerCase().replace(/\s+/g, '-');
            return (
              <span key={t} className="chip">
                <Link href={`/category/${slug}`}>{t}</Link>
              </span>
            );
          })}
        </div>
      </div>

      {/* HERO */}
      <section className="hero section">
        <span className="section-eyebrow">Sports & gear rentals in Zurich</span>
        <h1>
          Rent bikes, skis, clubs & more in Zurich.
          <br />
          Book in 30 seconds.
        </h1>
        <p>
          Pick your gear, start time, and pickup point. Simple payment, 7/7 support, and the right accessories included where relevant.
        </p>
        <div className="actions">
          <a className="btn" href="https://wa.me/41772619708" rel="noopener noreferrer" target="_blank">
            Book now
          </a>
          <a className="btn secondary" href="/how-it-works">
            See how it works
          </a>
        </div>
        <aside className="included">
          <h4>What’s included</h4>
          <ul>
            <li>Accessories when relevant (e.g., helmet, lock, lights)</li>
            <li>Maintained, safety-checked gear</li>
            <li>QR code to pick up your gear</li>
            <li>On-city assistance if needed</li>
          </ul>
        </aside>
        <div className="kpis">
          <div>
            <div className="kpi">10+</div>
            <div>central pickup points</div>
          </div>
          <div>
            <div className="kpi">24/7</div>
            <div>help & assistance</div>
          </div>
          <div>
            <div className="kpi">Insurance</div>
            <div>available (damage & theft*)</div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section>
        <div className="container">
          <div className="grid cols-3">
            {categories.map((c) => (
              <div key={c.slug} className="card">
                <div>
                  <h3 style={{ margin: '0 0 6px' }}>{c.name}</h3>
                  <p style={{ margin: 0, color: '#475569' }}>{c.description}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 12,
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
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'center', gap: 24, fontSize: 14, padding: '24px' }}
        >
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:support@airental.ch">support@airental.ch</a>
        </div>
      </footer>
    </>
  );
}