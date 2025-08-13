
import Link from 'next/link';

export default function CategoryCard({ c }){
  return (
    <div className="card">
      <h3 style={{marginTop:0}}>{c.name}</h3>
      <p style={{minHeight:48}}>{c.description}</p>
      <div className="badge">From CHF {c.priceHour ? c.priceHour + '/h' : c.priceDay + '/day'}</div>
      <div style={{marginTop:12}}>
        <Link className="btn secondary" href={`/${c.slug}`}>See gear</Link>
      </div>
    </div>
  );
}
