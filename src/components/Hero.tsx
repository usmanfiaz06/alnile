"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const img = heroRef.current.querySelector(".hero-bg") as HTMLElement;
      if (img) {
        img.style.transform = `scale(1.1) translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-bg absolute inset-0 scale-110 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=1920&q=80"
          alt="Fresh seafood market display"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gold-400/60" />
          <span className="text-sm font-body font-semibold tracking-[0.25em] uppercase text-gold-400">
            {t("hero.badge")}
          </span>
          <div className="h-px w-12 bg-gold-400/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 tracking-tight"
        >
          {t("hero.title1")}
          <br />
          <span className="gold-shimmer">{t("hero.title2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-white/60 font-body font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button onClick={() => scrollTo("#products")} className="btn-gold text-base">
            {t("hero.explore")}
          </button>
          <button onClick={() => scrollTo("#contact")} className="btn-outline-white text-base">
            {t("hero.touch")}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="flex flex-col items-center gap-3 text-white/30 hover:text-gold-400 transition-colors group"
          >
            <span className="text-[11px] font-body tracking-[0.25em] uppercase">
              {t("hero.discover")}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
