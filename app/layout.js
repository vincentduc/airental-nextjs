
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Airental — Rent gear in Zurich',
  description: 'Rent e-bikes, skis, golf clubs and more in Zurich.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="nav container">
            <div className="brand">
              <Link href="/"><strong>airental</strong></Link>
              <span className="badge">Materials from locals</span>
            </div>
            <div style={{display:'flex', gap:12}}>
              <Link href="/how-it-works">How it works</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/pick-up-points">Pick-up points</Link>
              <Link href="/faq">FAQ</Link>
              <a className="btn" href="https://wa.me/41772619708" target="_blank">Book on WhatsApp</a>
            </div>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container" style={{display:'flex',justifyContent:'space-between',padding:'16px 24px'}}>
            <div>&copy; {new Date().getFullYear()} Airental, Zürich</div>
            <div style={{display:'flex',gap:12}}>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="mailto:hello@airental.ch">hello@airental.ch</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
