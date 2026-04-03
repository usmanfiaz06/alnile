"use client";

import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Partnership() {
  const { t } = useLanguage();

  const partnershipItems = [
    { title: t("partnership.dist"), desc: t("partnership.distDesc") },
    { title: t("partnership.white"), desc: t("partnership.whiteDesc") },
    { title: t("partnership.joint"), desc: t("partnership.jointDesc") },
  ];

  return (
    <section id="partnership" className="relative py-24 md:py-32 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-400">
              {t("partnership.tag")}
            </span>
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          </div>

          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            {t("partnership.title1")}
            <br />
            <span className="gold-shimmer">{t("partnership.title2")}</span>
          </h2>

          <div className="decorative-line mx-auto mb-8" />

          <p className="text-lg text-white/50 max-w-2xl mx-auto font-body leading-relaxed mb-12">
            {t("partnership.desc")}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {partnershipItems.map((item) => (
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold"
            >
              {t("partnership.become")}
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-white"
            >
              {t("partnership.brochure")}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
