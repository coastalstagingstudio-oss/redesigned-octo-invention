
"use client";
import React, { useMemo, useState } from "react";

const coastal = { teal:"#0E9BA4", deep:"#0A6D74", sea:"#E6F3F3", sand:"#F6EFE7", navy:"#173A5E" };

// Stripe Payment Links (live)
const STRIPE = {
  BASIC:   "https://buy.stripe.com/fZu6oG73CbvxgE41SzgIo01",
  PREMIUM: "https://buy.stripe.com/aFaeVc5ZyartgE468PgIo02",
  STR:     "https://buy.stripe.com/6oU6oG2Nm5794VmgNtgIo03",
};

export default function Page() {
  // Order state
  const [pkg, setPkg] = useState("basic"); // basic | premium | str
  const [count, setCount] = useState(6);
  const [styles, setStyles] = useState(["Coastal"]);
  const [email, setEmail] = useState("");

  const PRICES = { basic:35, premium:60, str:299 };
  const total = useMemo(() => pkg === "str" ? PRICES.str : Math.max(1, parseInt(count||1)) * (pkg==="basic"?PRICES.basic:PRICES.premium), [pkg,count]);

  const sendOrderEmail = () => {
    const subject = `New Order — ${pkg.toUpperCase()}`;
    const details = [
      `Package: ${pkg}`,
      pkg==='str'?`Images: up to 8 (flat)`: `Images: ${count}`,
      `Styles: ${styles.join(', ') || 'n/a'}`,
      `Customer Email: ${email || 'n/a'}`,
      `Total: $${total.toFixed(2)}`
    ].join('\n');
    const body = encodeURIComponent(`Order details\n\n${details}\n\n(Attach photos to your reply.)`);
    window.location.href = `mailto:usseryken@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const payHref = pkg==="basic" ? STRIPE.BASIC : pkg==="premium" ? STRIPE.PREMIUM : STRIPE.STR;

  return (
    <main>
      <style>{`
.container{max-width:1100px;margin:0 auto;padding:0 20px}
.btn{background:#0E9BA4;color:#fff;border:0;padding:12px 18px;border-radius:12px;font-weight:700;cursor:pointer}
.btn-outline{background:transparent;color:#0E9BA4;border:2px solid #0E9BA4}
.card{border:1px solid #e5e7eb;border-radius:16px;background:#fff}
.grid{display:grid;gap:16px}
@media(min-width:768px){.grid-3{grid-template-columns:repeat(3,1fr)} .grid-4{grid-template-columns:repeat(4,1fr)} .grid-2{grid-template-columns:repeat(2,1fr)}}
.section{padding:64px 0}
.eyebrow{color:#0E9BA4;text-transform:uppercase;font-weight:800;letter-spacing:1px;font-size:12px}
h1{color:#173A5E;font-size:44px;margin:16px 0 8px}
h2{color:#173A5E;font-size:32px;margin:0 0 8px}
p.muted{color:#475569}
.pill{background:#E6F3F3;color:#0A6D74;border-radius:999px;padding:4px 10px;font-size:12px;margin:2px}
`}</style>

      {/* Hero */}
      <section style={{ background: `linear-gradient(180deg, ${coastal.sea}, #ffffff)` }} className="section">
        <div className="container" style={{ textAlign:"center" }}>
          <div className="eyebrow">Coastal Aesthetic • Worldwide</div>
          <h1>Coastal Staging Studio</h1>
          <p className="muted" style={{ fontSize:18 }}>High‑quality virtual staging. 24–48 hr turnaround. Realistic, buyer‑ready images.</p>
          <div style={{ marginTop:24, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#order"><button className="btn">Start a Project</button></a>
            <a href="#portfolio"><button className="btn btn-outline">View Portfolio</button></a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:20 }}>
            <div className="eyebrow">Services</div>
            <h2>Virtual Staging Across Styles & Spaces</h2>
            <p className="muted">Residential, STRs, multifamily, new construction & commercial.</p>
          </div>
          <div className="grid grid-4">
            {[
              {t:"Virtual Staging",d:"Add realistic furniture & décor to empty rooms."},
              {t:"Custom Style Matching",d:"Coastal, Modern, Farmhouse, Boho, Industrial, Luxury, Scandinavian, Desert, Mountain."},
              {t:"Exterior & Curb Appeal",d:"Landscaping, lighting, and day‑to‑dusk."},
              {t:"Commercial & Multifamily",d:"Model units, lobbies, retail shells."}
            ].map((x,i)=> (
              <div key={i} className="card" style={{ padding:20 }}>
                <div style={{ color:coastal.navy, fontWeight:700, marginBottom:6 }}>{x.t}</div>
                <div className="muted">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio (placeholders) */}
      <section id="portfolio" className="section" style={{ background:coastal.sand }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:20 }}>
            <div className="eyebrow">Portfolio</div>
            <h2>Before & After Showcase</h2>
            <p className="muted">Coastal to Modern and beyond.</p>
          </div>
          <div className="grid grid-3">
            {["Coastal","Modern","Farmhouse","Boho","Industrial","Luxury"].map((s,idx)=>(
              <div key={idx} className="card" style={{ overflow:"hidden" }}>
                <div style={{ padding:16, background:"#f1f5f9" }}>
                  <div className="muted" style={{ fontSize:12, marginBottom:8 }}>Before</div>
                  <div style={{ aspectRatio:"16/9", background:"#e2e8f0", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", color:"#64748b" }}>Empty Room</div>
                </div>
                <div style={{ padding:16, background:coastal.sand }}>
                  <div className="muted" style={{ fontSize:12, marginBottom:8 }}>After</div>
                  <div style={{ aspectRatio:"16/9", background:coastal.sea, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", color:"#0f172a" }}>Styled — {s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container" style={{ textAlign:"center" }}>
          <div className="eyebrow">Pricing</div>
          <h2>Simple, Transparent Packages</h2>
          <p className="muted">Agents, STR hosts, builders & commercial.</p>
          <div className="grid grid-3" style={{ marginTop:16 }}>
            {[
              {n:"Agent Essentials", p:"$35", note:"per image", f:["MLS‑ready JPGs","2 revisions","48‑hr delivery"]},
              {n:"Premium Custom", p:"$60", note:"per image", f:["Exact style match","3 revisions","Priority turn"]},
              {n:"STR/Airbnb Pack", p:"$299", note:"up to 8 images", f:["Cohesive theme","Cover photo focus","Amenity highlights"]}
            ].map((plan,i)=>(
              <div key={i} className="card" style={{ padding:20, textAlign:"left" }}>
                <div style={{ color:coastal.navy, fontWeight:800, fontSize:20 }}>{plan.n}</div>
                <div style={{ display:"flex", alignItems:"baseline", gap:8, marginTop:8 }}>
                  <div style={{ color:coastal.teal, fontWeight:800, fontSize:28 }}>{plan.p}</div>
                  <div className="muted">{plan.note}</div>
                </div>
                <ul style={{ marginTop:10, paddingLeft:18 }}>
                  {plan.f.map((x,ii)=>(<li key={ii} className="muted">• {x}</li>))}
                </ul>
                <div style={{ marginTop:14, display:"flex", gap:10, flexWrap:"wrap" }}>
                  <a href={i===0?STRIPE.BASIC:i===1?STRIPE.PREMIUM:STRIPE.STR} target="_blank" rel="noopener">
                    <button className="btn">Pay Now</button>
                  </a>
                  <a href="#order"><button className="btn btn-outline">Order Details</button></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background:coastal.sea }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:20 }}>
            <div className="eyebrow">Testimonials</div>
            <h2>Agents & Owners Love the Results</h2>
          </div>
          <div className="grid grid-3">
            {[
              {q:"Under contract in 3 days. Photos popped on MLS.", n:"Marissa R.", r:"Broker"},
              {q:"Matched our Modern + Coastal brief perfectly.", n:"Devon K.", r:"STR Host"},
              {q:"Great for model units—consistent, scalable.", n:"Lee P.", r:"Multifamily PM"}
            ].map((t,i)=>(
              <div key={i} className="card" style={{ padding:20 }}>
                <div style={{ fontStyle:"italic", color:"#0f172a" }}>“{t.q}”</div>
                <div className="muted" style={{ marginTop:8 }}>— {t.n}, {t.r} </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:20 }}>
            <div className="eyebrow">FAQ</div>
            <h2>Common Questions</h2>
            <p className="muted">Realism, MLS rules, turnaround, revisions.</p>
          </div>
          <div className="grid grid-2">
            {[
              {q:"How realistic are the images?", a:"We focus on scale, lighting, and shadows for natural results. Final files are MLS‑ready JPGs."},
              {q:"Are virtually staged images allowed on MLS?", a:"Yes, most boards allow them with disclosure. We can include a 'virtually staged' label if needed."},
              {q:"What’s the turnaround?", a:"Standard 24–48 hours for up to 10 images. Rush options available."},
              {q:"How many revisions are included?", a:"Basic: 2; Premium: 3. Revisions target décor, layout, and color to maintain realism."}
            ].map((f,i)=>(
              <div key={i} className="card" style={{ padding:20 }}>
                <div style={{ color:coastal.navy, fontWeight:700 }}>{f.q}</div>
                <div className="muted" style={{ marginTop:6 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="section" style={{ background:coastal.sand }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:20 }}>
            <div className="eyebrow">Areas</div>
            <h2>Where We Stage</h2>
            <p className="muted">Residential listings, STRs/Airbnb, multifamily, new construction, and commercial.</p>
          </div>
          <div className="grid grid-3">
            {[
              {t:"Residential Sales", p:["MLS‑optimized photos","Room‑by‑room packages","Day‑to‑dusk"]},
              {t:"STR / Airbnb", p:["Theme development","Amenity callouts","Cover image polish"]},
              {t:"Multifamily & Builders", p:["Model units","Leasing galleries","Finish options"]},
              {t:"Commercial", p:["Lobby & retail shells","Office test‑fits","Tenant marketing"]},
              {t:"Virtual Renovations", p:["Kitchens & baths","Material swaps","Layout studies"]},
              {t:"Add‑Ons", p:["Floor plans","Listing copy","Photo enhancement"]}
            ].map((b,i)=>(
              <div key={i} className="card" style={{ padding:20 }}>
                <div style={{ color:coastal.navy, fontWeight:700 }}>{b.t}</div>
                <ul style={{ marginTop:10, paddingLeft:18 }}>
                  {b.p.map((x,ii)=>(<li key={ii} className="muted">• {x}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Worldwide */}
<section id="markets" className="section">
  <div className="container">
    <div style={{ textAlign: "center", marginBottom: 20 }}>
      <div className="eyebrow">Worldwide</div>
      <h2>We Serve Clients Globally</h2>
      <p className="muted">
        Remote virtual staging delivered anywhere — tailored to local buyer preferences.
      </p>
    </div>

    <div className="grid grid-2">
      <div className="card" style={{ padding: 20 }}>
        <div style={{ color: coastal.navy, fontWeight: 700, fontSize: 18 }}>
          How it works, anywhere:
        </div>
        <ul className="muted" style={{ marginTop: 10, paddingLeft: 18 }}>
          <li>• Upload your room photos</li>
          <li>• Choose style(s) and package</li>
          <li>• We stage and deliver within 24–48 hours</li>
        </ul>
        <p className="muted" style={{ marginTop: 10 }}>
          We adapt styles to your region — coastal, modern city lofts, mountain, desert, and more.
        </p>
      </div>

      <div className="card" style={{ padding: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: 18,
            background: "linear-gradient(135deg,#dbeafe,#cffafe,#99f6e4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: coastal.deep,
            fontWeight: 700,
          }}
        >
          🌍 Worldwide Virtual Staging
           </div> 
        </div>
      </div>
    </div>  {/* closes .grid */}
  </div>    {/* closes .container */}
</section>

{/* Order & Pay */}
<section id="order" className="section" style={{ background: coastal.sand }}>
  <div className="container">

          <div style={{ textAlign:"center", marginBottom:20 }}>
            <div className="eyebrow">Order</div>
            <h2>Place an Order & Pay Securely</h2>
            <p className="muted">Choose a package, set the number of images, and pay via Stripe (or email your order).</p>
          </div>

          <div className="card" style={{ padding:20 }}>
            <div className="grid grid-2">
              <div>
                <label className="muted">Select Package</label>
                <select value={pkg} onChange={(e)=>setPkg(e.target.value)} style={{ width:"100%", padding:12, borderRadius:12, border:"1px solid #e2e8f0", marginTop:6 }}>
                  <option value="basic">Basic — $35 / image</option>
                  <option value="premium">Premium — $60 / image</option>
                  <option value="str">STR / Airbnb Pack — $299 flat (up to 8)</option>
                </select>
              </div>

              <div>
                { pkg!=="str" ? (
                  <div>
                    <label className="muted">Number of Images</label>
                    <input type="number" min="1" value={count} onChange={(e)=>setCount(e.target.value)} style={{ width:"100%", padding:12, borderRadius:12, border:"1px solid #e2e8f0", marginTop:6 }} />
                  </div>
                ) : (
                  <div className="muted">STR pack includes up to 8 images.</div>
                ) }
              </div>

              <div>
                <label className="muted">Preferred Style(s)</label>
                <select multiple value={styles} onChange={(e)=>setStyles(Array.from(e.target.selectedOptions).map(o=>o.value))} style={{ width:"100%", padding:12, borderRadius:12, border:"1px solid #e2e8f0", marginTop:6 }}>
                  {["Coastal","Modern","Farmhouse","Boho","Industrial","Luxury","Scandinavian","Desert","Mountain"].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="muted">Your Email for Delivery</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" style={{ width:"100%", padding:12, borderRadius:12, border:"1px solid #e2e8f0", marginTop:6 }} />
              </div>
            </div>

            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:16, gap:12, flexWrap:"wrap" }}>
              <div style={{ color:coastal.navy, fontWeight:800, fontSize:18 }}>Total: ${total.toFixed(2)}</div>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                <button className="btn" onClick={sendOrderEmail}>Submit Order (Email)</button>
                <a href={payHref} target="_blank" rel="noopener"><button className="btn">Pay with Stripe</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding:"24px 20px", background:coastal.navy, color:"#fff", textAlign:"center" }}>
        © {new Date().getFullYear()} Coastal Staging Studio — Virtual Home Staging
      </footer>
    </main>
  );
}
