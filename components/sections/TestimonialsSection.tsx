"use client";

const reviews = [
  {
    initial: "V",
    name: "Vithu S.",
    time: "2 months ago",
    text: "Brought my BMW M3 in for a full PPF wrap and ceramic coating combo. The results are nothing short of spectacular — the paint looks deeper and richer than the day I bought it. These guys are true professionals.",
  },
  {
    initial: "A",
    name: "Allan C.",
    time: "2 months ago",
    text: "Had ceramic tint done on all windows plus the starlight headliner installed. The tint quality is incredible — massive heat reduction and the car feels completely private. The starlight effect is breathtaking at night. 10/10.",
  },
  {
    initial: "R",
    name: "Rafael M.",
    time: "3 months ago",
    text: "Genuine people, reasonable rates, and they never push unnecessary services. The CarPlay install was clean and factory-perfect. The owner was incredibly helpful throughout. Highly recommend Haven Customs.",
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{background:"#0d0d0d",padding:"100px 60px",borderTop:"1px solid rgba(255,255,255,0.07)"}} className="testi-section">
      <div style={{maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"56px"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:"10px",justifyContent:"center",fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"14px"}}>
            <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>Client Reviews<span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>
          </span>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(36px,4vw,58px)",color:"#f0f0f0"}}>
            WHAT IT FEELS LIKE TO LEAVE YOUR CAR IN <span style={{color:"#e8001d"}}>THE RIGHT HANDS</span>
          </h2>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}} className="testi-grid">
          {reviews.map((r) => (
            <div key={r.name} style={{background:"#111",border:"1px solid rgba(255,255,255,0.07)",padding:"36px",transition:"all .3s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(232,0,29,0.25)";(e.currentTarget as HTMLElement).style.transform="translateY(-4px)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.07)";(e.currentTarget as HTMLElement).style.transform="translateY(0)"}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"64px",color:"#e8001d",lineHeight:.7,marginBottom:"16px",opacity:.4}}>"</div>
              <p style={{fontSize:"14px",color:"rgba(240,240,240,0.65)",lineHeight:1.9,marginBottom:"24px"}}>{r.text}</p>
              <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
                <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"#e8001d",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,color:"#fff",flexShrink:0}}>
                  {r.initial}
                </div>
                <div>
                  <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"10px",fontWeight:700,color:"#f0f0f0",letterSpacing:"2px"}}>{r.name}</div>
                  <div style={{color:"#e8001d",fontSize:"11px",letterSpacing:"2px",marginTop:"2px"}}>★★★★★</div>
                  <div style={{fontSize:"11px",color:"rgba(240,240,240,0.3)",marginTop:"2px"}}>{r.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.testi-grid{grid-template-columns:1fr!important}.testi-section{padding:60px 24px!important}}`}</style>
    </section>
  );
}
