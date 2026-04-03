"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="counter-value">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 40, suffix: "+", label: "Years of Excellence" },
  { value: 25, suffix: "+", label: "Countries Served" },
  { value: 10000, suffix: "+", label: "Tons Exported Annually" },
  { value: 100, suffix: "%", label: "Quality Certified" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-600 mb-4 block">
            Our Story
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy-900 mb-6">
            A Heritage of{" "}
            <span className="text-gold-600 italic">Excellence</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg md:text-xl text-navy-600 max-w-3xl mx-auto font-body leading-relaxed">
            Since 1981, Al Nile Fish has been a cornerstone of the premium fresh
            seafood import &amp; export industry — connecting the finest catch with
            discerning markets across the Gulf and beyond.
          </p>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image */}
          <ScrollReveal variant="left">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1606850246029-483e189a5a64?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh fish at market"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-xl shadow-gold-500/10 border border-gold-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy-900">HACCP & ISO</p>
                    <p className="text-xs text-navy-500 font-body">Certified Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Text Content */}
          <ScrollReveal variant="right">
            <div className="space-y-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-900">
                From the Heart of the UAE
                <br />
                <span className="text-teal-600">to the World</span>
              </h3>

              <p className="text-navy-600 font-body leading-relaxed text-lg">
                Headquartered in Umm Al Quwain, United Arab Emirates, Al Nile Fish has
                spent over four decades perfecting the art of sourcing, processing, and
                delivering the finest fresh seafood. We combine deep industry expertise
                with cutting-edge technology to ensure every product meets the highest
                international standards.
              </p>

              <p className="text-navy-600 font-body leading-relaxed text-lg">
                Today, Al Nile Fish proudly serves partners across the Gulf region —
                including Qatar, Oman, Kuwait, and Saudi Arabia — while continuing
                to expand our global footprint. Our commitment to freshness, sustainability,
                and excellence has made us a trusted name in the seafood industry.
              </p>

              {/* Values pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["Sustainability", "Quality First", "Gulf Leaders", "Innovation"].map(
                  (value) => (
                    <span
                      key={value}
                      className="px-4 py-2 rounded-full text-sm font-body font-medium bg-gold-50 text-gold-700 border border-gold-200/50"
                    >
                      {value}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="text-center p-8 rounded-2xl bg-pearl border border-gold-100/50">
                <div className="font-display font-bold text-4xl md:text-5xl text-navy-900 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-body text-navy-500 tracking-wide">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
