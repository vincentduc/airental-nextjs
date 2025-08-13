
import { categories } from '../../data/equipment';
import BookingForm from '../../components/BookingForm';

export default function CategoryPage({ params }){
  const cat = categories.find(c => c.slug === params.category);
  if(!cat){ return <div>Not found</div> }
  return (
    <div style={{display:'grid', gridTemplateColumns:'1.2fr .8fr', gap:16}}>
      <div className="card">
        <h1 style={{marginTop:0}}>{cat.name}</h1>
        <p>{cat.description}</p>
        <ul>{cat.includes.map((i,idx)=><li key={idx}>• {i}</li>)}</ul>
        <div className="grid">
          {cat.items.map(i => (
            <div className="card" key={i.id}>
              <div style={{height:160,background:'#e2e8f0', borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}>Add photo: {i.img}</div>
              <div style={{marginTop:8,fontWeight:600}}>{i.name}</div>
            </div>
          ))}
        </div>
      </div>
      <BookingForm category={cat.name} priceDay={cat.priceDay} priceHour={cat.priceHour}/>
    </div>
  );
}

export async function generateStaticParams(){
  return categories.map(c => ({ category: c.slug }));
}
