"use client";

import ScrollReveal from "./ScrollReveal";

export default function Partnership() {
  return (
    <section id="partnership" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920&q=80"
          alt="Ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
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

          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Partner With
            <br />
            <span className="gold-shimmer">Al Nile Fish</span>
          </h2>

          <div className="decorative-line mx-auto mb-8" />

          <p className="text-lg text-white/50 max-w-2xl mx-auto font-body leading-relaxed mb-12">
            We are actively seeking distributors, importers, and strategic partners
            across the GCC, Europe, and emerging markets. Join a legacy of excellence
            that spans over four decades.
          </p>

          {/* Partnership benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Distribution Partners",
                desc: "Exclusive distribution rights in select territories with full marketing and logistics support.",
              },
              {
                title: "White Label",
                desc: "Custom branding and packaging solutions for your market, backed by our certified production.",
              },
              {
                title: "Joint Ventures",
                desc: "Strategic partnerships for market development, cold chain infrastructure, and co-investment opportunities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6 text-left bg-white/[0.05] border border-white/[0.08] hover:border-gold-500/20 transition-all duration-300"
              >
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
