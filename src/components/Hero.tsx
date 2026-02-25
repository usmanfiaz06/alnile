"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Bubbles() {
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 4 + Math.random() * 16,
    duration: `${8 + Math.random() * 14}s`,
    delay: `${Math.random() * 10}s`,
    drift: `${(Math.random() - 0.5) * 80}px`,
    travel: "-60vh",
    scale: 0.5 + Math.random() * 0.8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: b.left,
            bottom: "-20px",
            width: b.size,
            height: b.size,
            ["--duration" as string]: b.duration,
            ["--delay" as string]: b.delay,
            ["--drift" as string]: b.drift,
            ["--travel" as string]: b.travel,
            ["--scale" as string]: b.scale,
          }}
        />
      ))}
    </div>
  );
}

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[80px] lg:h-[120px]"
      >
        <path
          d="M0,40 C120,80 240,10 360,40 C480,70 600,20 720,45 C840,70 960,15 1080,40 C1200,65 1320,25 1440,40 L1440,120 L0,120 Z"
          fill="#F8F6F0"
          className="animate-wave-slow"
        />
        <path
          d="M0,60 C160,90 320,30 480,55 C640,80 800,25 960,55 C1120,85 1280,30 1440,55 L1440,120 L0,120 Z"
          fill="#F8F6F0"
          opacity="0.5"
          className="animate-wave"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const overlay = heroRef.current.querySelector(".hero-parallax") as HTMLElement;
      if (overlay) {
        overlay.style.transform = `translateY(${scrollY * 0.3}px)`;
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
      {/* Background Layers */}
      <div className="absolute inset-0 bg-hero-gradient animated-gradient" />

      {/* Animated Mesh Gradient Overlay */}
      <div className="hero-parallax absolute inset-0">
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #1B6B93 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #C5A572 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Light Rays */}
      <div className="light-rays" />

      {/* Bubbles */}
      <Bubbles />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Since Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="h-px w-8 bg-gold-500/50" />
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-400">
            Established 1981
          </span>
          <div className="h-px w-8 bg-gold-500/50" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6"
        >
          <span className="block">Premium</span>
          <span className="block gold-shimmer">Frozen Seafood</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-white/60 font-body max-w-2xl mx-auto mb-4 text-balance"
        >
          The Middle East&apos;s finest since 1981 — now expanding to Russia.
          From the waters of the Nile to tables across the world.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="decorative-line mx-auto mb-10"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo("#products")} className="btn-gold">
            Explore Our Products
          </button>
          <button onClick={() => scrollTo("#partnership")} className="btn-outline-gold">
            Partner With Us
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-32 md:bottom-36 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-gold-400 transition-colors group"
          >
            <span className="text-[10px] font-body tracking-[0.2em] uppercase">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              >
                <path
                  d="M10 4V16M10 16L4 10M10 16L16 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <WaveDivider />
    </section>
  );
}
