"use client";

import ScrollReveal from "./ScrollReveal";

export default function Partnership() {
  return (
    <section
      id="partnership"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-partnership-gradient animated-gradient" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #C5A572 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #1B6B93 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(197,165,114,0.5) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <ScrollReveal className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-400">
              Business Opportunities
            </span>
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Partner With
            <br />
            <span className="gold-shimmer">Al Nile Fish</span>
          </h2>

          <div className="decorative-line mx-auto mb-8" />

          <p className="text-lg text-white/50 max-w-2xl mx-auto text-balance font-body leading-relaxed mb-10">
            We are actively seeking distributors, importers, and strategic partners
            across Russia, Europe, and emerging markets. Join a legacy of excellence
            that spans over four decades and across continents.
          </p>

          {/* Partnership benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Distribution Partners",
                desc: "Exclusive distribution rights in select territories with full marketing and logistics support.",
                icon: (
                  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M16 4V16L24 20" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "White Label",
                desc: "Custom branding and packaging solutions for your market, backed by our certified production.",
                icon: (
                  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="6" width="24" height="20" rx="2" />
                    <path d="M4 14H28" />
                    <path d="M10 20H22" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Joint Ventures",
                desc: "Strategic partnerships for market development, cold chain infrastructure, and co-investment opportunities.",
                icon: (
                  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 16L14 8L20 14L26 8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 8H26V12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 24H26" strokeLinecap="round" strokeDasharray="2 3" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 text-left"
              >
                <div className="text-gold-400 mb-4">{item.icon}</div>
                <h4 className="font-display font-bold text-lg text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-white/40 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold"
            >
              Become a Partner
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-white"
            >
              Download Brochure
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
