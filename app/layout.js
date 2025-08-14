import './globals.css';
import Link from 'next/link';

export const metadata = {
  metadataBase: new URL('https://airental.ch'),
  title: {
    default: 'Airental — Rent gear in Zurich',
    template: '%s • Airental',
  },
  description: 'Rent e-bikes, skis, golf clubs and more in Zurich.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Airental — Rent gear in Zurich',
    description: 'Rent e-bikes, skis, golf clubs and more in Zurich.',
    url: 'https://airental.ch',
    siteName: 'Airental',
    locale: 'en_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airental — Rent gear in Zurich',
    description: 'Rent e-bikes, skis, golf clubs and more in Zurich.',
  },
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <head>
        {/* Mobile scaling + tiny favicon to avoid 404s */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="preconnect" href="https://wa.me" crossOrigin="" />
        {/* Preload the logo so the header doesn’t flash */}
        <link rel="preload" href="/images/logo.png" as="image" type="image/png" />
      </head>
      <body>
        {/* Accessible skip link for keyboard users */}
        <a
          href="#main"
          className="skip-link"
          style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          Skip to content
        </a>

        <header className="header">
          <nav className="nav container" aria-label="Primary">
            <div className="brand">
              <Link href="/" className="brand-link" aria-label="Airental home">
                {/* width/height prevent layout shift; fetchpriority makes it snappy */}
                <img
                  src="/images/logo.png"
                  alt="Airental"
                  className="logo"
                  width="160"
                  height="36"
                  decoding="async"
                  fetchPriority="high"
                />
              </Link>
              <span className="badge">Materials from locals</span>
            </div>
            <div className="nav-links">
              <Link href="/how-it-works">How it works</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/pick-up-points">Pick-up points</Link>
              <Link href="/faq">FAQ</Link>
              <a
                className="btn whatsapp"
                href="https://wa.me/41772619708"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
            </div>
          </nav>
        </header>

        <main id="main" className="container">{children}</main>

        <footer>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '16px 0' }}>
            <div>© {year} Airental, Zürich</div>
            <nav aria-label="Footer" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
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
