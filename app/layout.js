import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Airental — Rent gear in Zurich',
  description: 'Rent e-bikes, skis, golf clubs and more in Zurich.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Ensure proper mobile scaling and a simple favicon to avoid 404s */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:," />
      </head>
      <body>
        {/* Accessible skip link for keyboard users */}
        <a href="#main" className="skip-link" style={{position:'absolute',left:'-10000px',top:'auto',width:'1px',height:'1px',overflow:'hidden'}}>
          Skip to content
        </a>

        <header className="header">
          <nav className="nav container" aria-label="Primary">
            <div className="brand">
              <Link href="/" className="brand-link" aria-label="Airental home">
                <img src="/images/logo.png" alt="Airental" className="logo" />
              </Link>
              <span className="badge">Materials from locals</span>
            </div>
            <div className="nav-links">
              <Link href="/how-it-works">How it works</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/pick-up-points">Pick-up points</Link>
              <Link href="/faq">FAQ</Link>
              <a className="btn" href="https://wa.me/41772619708" target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
            </div>
          </nav>
        </header>

        <main id="main" className="container">{children}</main>

        <footer>
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'16px 0'}}>
            <div>© {new Date().getFullYear()} Airental, Zürich</div>
            <nav aria-label="Footer" style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="mailto:support@airental.ch">support@airental.ch</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
