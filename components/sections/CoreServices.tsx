"use client";
import Link from "next/link";

const cores = [
  {
    title: "WINDOW TINT",
    sub: "Privacy. UV Block. Style.",
    desc: "Premium ceramic and carbon film installations. Up to 99% UV block, 65% heat rejection, and a clean blacked-out look that lasts. Every cut plotted from templates for a factory-fit finish.",
    features: ["Ceramic & Carbon Films", "99% UV Protection", "Lifetime Warranty"],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round" style={{ width: "100%", height: "100%" }}>
        <rect x="8" y="12" width="48" height="38" rx="4" />
        <line x1="32" y1="12" x2="32" y2="50" />
        <rect x="8" y="12" width="24" height="38" rx="4" fill="rgba(232,0,29,0.08)" stroke="none" />
        <path d="M14 26 L14 18 Q14 14 18 14 L28 14" strokeDasharray="3 3" opacity="0.5" />
      </svg>
    ),
    color: "rgba(232,0,29,0.12)",
  },
  {
    title: "DASHCAM",
    sub: "Protection. Parking Mode. Peace of Mind.",
    desc: "Professional hardwired front and rear dashcam installs. Clean hidden wiring routed through your headliner and trim panels. Parking mode enabled so your camera never sleeps.",
    features: ["Front & Rear Install", "Hardwired + Parking Mode", "BlackVue · Thinkware · Viofo"],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round" style={{ width: "100%", height: "100%" }}>
        <rect x="12" y="16" width="40" height="26" rx="4" />
        <circle cx="32" cy="29" r="7" />
        <circle cx="32" cy="29" r="3" fill="#e8001d" stroke="none" />
        <line x1="18" y1="42" x2="18" y2="50" />
        <line x1="46" y1="42" x2="46" y2="50" />
        <line x1="12" y1="50" x2="52" y2="50" />
        <circle cx="45" cy="22" r="2" fill="#e8001d" stroke="none" opacity="0.6" />
      </svg>
    ),
    color: "rgba(232,0,29,0.12)",
  },
  {
    title: "TIRES & WHEELS",
    sub: "Install. Align. Perform.",
    desc: "Full tire and wheel service — mounting, balancing, alignment, seasonal swaps, and custom wheel fitment. Precision torque to OEM specs on every vehicle that rolls in.",
    features: ["Mounting & Balancing", "4-Wheel Alignment", "Seasonal Changeover"],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round" style={{ width: "100%", height: "100%" }}>
        <circle cx="32" cy="32" r="24" />
        <circle cx="32" cy="32" r="12" />
        <circle cx="32" cy="32" r="3" fill="#e8001d" stroke="none" />
        <line x1="32" y1="8" x2="32" y2="20" />
        <line x1="32" y1="44" x2="32" y2="56" />
        <line x1="8" y1="32" x2="20" y2="32" />
        <line x1="44" y1="32" x2="56" y2="32" />
      </svg>
    ),
    color: "rgba(232,0,29,0.12)",
  },
];

export default function CoreServices() {
  return (
    <section
      style={{
        background: "#080808",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse,rgba(232,0,29,0.06),transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-tag reveal" style={{ justifyContent: "center" }}>
            What We Specialize In
          </span>
          <h2
            className="section-title reveal"
            style={{ marginBottom: "16px" }}
          >
            THREE SERVICES.<br />ONE SHOP.
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: "17px",
              color: "rgba(240,240,240,0.82)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.85,
            }}
          >
            Haven is built around three core specialties. Every install is
            done right, clean, and backed by warranty.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
          }}
          className="core-grid"
        >
          {cores.map((c, i) => (
            <div
              key={c.title}
              data-hover
              className="reveal glass-card"
              style={{
                padding: "44px 32px",
                position: "relative",
                overflow: "hidden",
                transition: "all .4s",
                transitionDelay: `${i * 0.08}s`,
                cursor: "default",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(232,0,29,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "#e8001d",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform .4s",
                }}
                className="core-line"
              />

              <div
                style={{
                  width: "56px",
                  height: "56px",
                  marginBottom: "24px",
                }}
              >
                {c.icon}
              </div>

              <div
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "36px",
                  letterSpacing: "2px",
                  color: "#f0f0f0",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {c.title}
              </div>

              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  color: "#e8001d",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {c.sub}
              </div>

              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(240,240,240,0.82)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                  flex: 1,
                }}
              >
                {c.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {c.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#e8001d"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M2 6 L4.5 9 L10 3" />
                    </svg>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(240,240,240,0.72)",
                        letterSpacing: "1px",
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "56px",
          }}
        >
          <Link
            href="/contact"
            className="clip-btn"
            data-hover
            style={{
              display: "inline-block",
              background: "#e8001d",
              color: "white",
              padding: "16px 44px",
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all .3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff0025";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(232,0,29,0.7)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#e8001d";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book Any Service
          </Link>
        </div>
      </div>
      <style>{`
        .core-grid>div:hover .core-line{transform:scaleX(1)!important}
        @media(max-width:900px){.core-grid{grid-template-columns:1fr!important;gap:16px!important}section{padding:80px 0!important}section>div{padding:0 24px!important}}
      `}</style>
    </section>
  );
}
