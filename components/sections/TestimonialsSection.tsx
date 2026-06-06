"use client";

import { useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   TRUSTINDEX WIDGET ID — Yahan apni widget ID daalo
   (Script src se jo ID hai woh yahan paste karo)
   ══════════════════════════════════════════════════════ */
const TRUSTINDEX_WIDGET_ID = "d9f3a0e73ef363416236d7fa18d";

/* ── Google "G" Icon ── */
function GoogleIcon({ size = 20, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" style={{ opacity, flexShrink: 0 }}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/* ── Stars SVG ── */
function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "inline-flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i <= rating ? "#FBBC04" : "rgba(255,255,255,0.12)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const widgetRef = useRef<HTMLDivElement>(null);

  /* ── Load Trustindex script dynamically ── */
  useEffect(() => {
    // Check if script already loaded
    const existingScript = document.querySelector(
      `script[src*="trustindex.io/loader.js?${TRUSTINDEX_WIDGET_ID}"]`
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = `https://cdn.trustindex.io/loader.js?${TRUSTINDEX_WIDGET_ID}`;
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount if needed
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  return (
    <section className="reviews-section" style={{ padding: "100px 0", background: "#080808", overflow: "hidden" }}>

      {/* ── Custom Header (Haven Customs design) ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "60px", paddingRight: "60px" }}>
        <div className="reviews-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px", flexWrap: "wrap", gap: "30px" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "'Orbitron',sans-serif", fontSize: "10px", letterSpacing: "6px", color: "#e8001d", textTransform: "uppercase", marginBottom: "14px" }}>
              <span style={{ width: "28px", height: "1px", background: "#e8001d", display: "block" }} />
              Client Reviews
            </span>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(38px,4vw,60px)", lineHeight: 0.95, color: "#f0f0f0", margin: 0 }}>
              TRUSTED BY <span style={{ color: "#e8001d" }}>REAL OWNERS</span> WHO DEMAND PERFECTION
            </h2>
          </div>

          {/* Google Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px 28px", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", flexShrink: 0 }}>
            <GoogleIcon size={32} />
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "36px", color: "#f0f0f0", lineHeight: 1 }}>5.0</span>
                <Stars rating={5} size={14} />
              </div>
              <div style={{ fontSize: "11px", color: "rgba(240,240,240,0.4)", marginTop: "2px" }}>Google Reviews · Live</div>
            </div>
          </div>
        </div>
        <div style={{ width: "60px", height: "2px", background: "#e8001d", marginBottom: "40px" }} />
      </div>

      {/* ── Trustindex Live Widget ── */}
      <div ref={widgetRef} className="ti-widget-wrapper" style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "60px", paddingRight: "60px" }}>
        {/* Trustindex will inject the widget here automatically */}
        <div data-src={`https://cdn.trustindex.io/loader.js?${TRUSTINDEX_WIDGET_ID}`} />
      </div>

      {/* ── Bottom CTA ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "60px", paddingRight: "60px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginTop: "36px" }}>
          <a
            href="https://www.google.com/maps/place/Haven+Customs+Tint+%26+Tire+Inc./@43.7801512,-79.2389815,17z/data=!3m2!4b1!5s0x89d4d0f8fd0c2c83:0xb6b0a72af06de85f!4m6!3m5!1s0x89d4d1005fd49279:0x1ec775d0fabcaf47!8m2!3d43.7801512!4d-79.2364066!16s%2Fg%2F11xvhl_fp1?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-cta"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "'Orbitron',sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#e8001d", textDecoration: "none", padding: "12px 0" }}
          >
            Leave Us A Review
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8001d" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          CSS OVERRIDES — Trustindex ko dark theme mein force karo
          ══════════════════════════════════════════════════ */}
      <style>{`
        /* ── Force dark theme on entire Trustindex widget ── */
        .ti-widget-wrapper [class*="ti-widget"],
        .ti-widget-wrapper [class*="ti-review"],
        .ti-widget-wrapper div[style] {
          background: transparent !important;
          color: rgba(240,240,240,0.55) !important;
          font-family: inherit !important;
        }

        /* Widget main container */
        .ti-widget {
          background: transparent !important;
        }

        /* Review cards */
        .ti-review-item,
        .ti-widget .ti-review-item {
          background: rgba(255,255,255,0.025) !important;
          border: 1px solid rgba(255,255,255,0.07) !important;
          border-radius: 0 !important;
          transition: border-color 0.3s, background 0.3s, transform 0.3s !important;
        }
        .ti-review-item:hover,
        .ti-widget .ti-review-item:hover {
          border-color: rgba(232,0,29,0.25) !important;
          background: rgba(232,0,29,0.03) !important;
          transform: translateY(-4px) !important;
        }

        /* Reviewer names */
        .ti-widget .ti-name,
        .ti-widget .ti-reviewer-name,
        .ti-widget [class*="name"] a,
        .ti-widget [class*="name"] span,
        .ti-widget .ti-review-header .ti-name {
          color: #f0f0f0 !important;
          font-family: 'Bebas Neue', sans-serif !important;
          letter-spacing: 1.5px !important;
          text-decoration: none !important;
        }

        /* Review text */
        .ti-widget .ti-review-text,
        .ti-widget .ti-review-content,
        .ti-widget p,
        .ti-widget .ti-text {
          color: rgba(240,240,240,0.55) !important;
          font-size: 13.5px !important;
          line-height: 1.85 !important;
        }

        /* Date / time */
        .ti-widget .ti-date,
        .ti-widget .ti-review-date,
        .ti-widget [class*="date"] {
          color: rgba(240,240,240,0.35) !important;
          font-size: 11px !important;
        }

        /* Stars — keep Google yellow */
        .ti-widget .ti-stars .ti-star,
        .ti-widget [class*="star"] svg,
        .ti-widget .ti-stars svg {
          fill: #FBBC04 !important;
          color: #FBBC04 !important;
        }

        /* Widget header / summary bar */
        .ti-widget .ti-header,
        .ti-widget .ti-widget-header,
        .ti-widget [class*="header"] {
          background: transparent !important;
          border-bottom: 1px solid rgba(255,255,255,0.05) !important;
        }
        .ti-widget .ti-header *,
        .ti-widget .ti-widget-header * {
          color: #f0f0f0 !important;
        }

        /* Navigation arrows */
        .ti-widget .ti-prev,
        .ti-widget .ti-next,
        .ti-widget [class*="arrow"],
        .ti-widget [class*="nav"] button {
          background: rgba(232,0,29,0.1) !important;
          border: 1px solid rgba(232,0,29,0.3) !important;
          color: #e8001d !important;
          border-radius: 0 !important;
        }
        .ti-widget .ti-prev:hover,
        .ti-widget .ti-next:hover,
        .ti-widget [class*="arrow"]:hover {
          background: rgba(232,0,29,0.2) !important;
          border-color: rgba(232,0,29,0.5) !important;
        }

        /* Links inside widget */
        .ti-widget a {
          color: #e8001d !important;
          text-decoration: none !important;
        }
        .ti-widget a:hover {
          text-decoration: underline !important;
        }

        /* Profile images */
        .ti-widget .ti-profile-img,
        .ti-widget [class*="avatar"],
        .ti-widget [class*="photo"] img {
          border-radius: 0 !important;
        }

        /* Hide Trustindex branding / powered by */
        .ti-widget .ti-footer,
        .ti-widget [class*="powered"],
        .ti-widget [class*="branding"],
        .ti-widget [class*="logo-text"],
        .ti-widget a[href*="trustindex"] {
          opacity: 0.3 !important;
          filter: grayscale(1) brightness(0.5) !important;
        }

        /* Scrollbar hide */
        .ti-widget-wrapper ::-webkit-scrollbar { display: none; }
        .ti-widget-wrapper * { -ms-overflow-style: none; scrollbar-width: none; }

        /* General CTA styling */
        .reviews-cta:hover { text-decoration: underline !important; }

        /* ── Responsive ── */
        @media(max-width:900px) {
          .reviews-section { padding: 60px 0 !important; }
          .reviews-header { flex-direction: column !important; align-items: flex-start !important; }
          .ti-widget-wrapper,
          .reviews-section > div { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </section>
  );
}