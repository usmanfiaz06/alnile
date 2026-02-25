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
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
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
      {count}
      {suffix}
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
    <section id="about" className="section-padding bg-pearl relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]">
        <svg viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="#C5A572" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" stroke="#C5A572" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" stroke="#C5A572" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-600 mb-4 block">
            Our Legacy
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6">
            A Heritage of{" "}
            <span className="text-gold-600 italic">Excellence</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto text-balance font-body leading-relaxed">
            Since 1981, Al Nile Fish has been a cornerstone of the premium frozen
            seafood industry — bridging the bountiful waters of the Nile and
            Mediterranean with discerning markets worldwide.
          </p>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image/Visual */}
          <ScrollReveal variant="left">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden gold-shimmer-border">
                <div
                  className="absolute inset-[1px] rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #0A1628 0%, #1B6B93 40%, #12233D 100%)",
                  }}
                >
                  {/* Decorative fish pattern */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg viewBox="0 0 200 150" className="w-48 h-36">
                      <path
                        d="M30 75C30 75 60 30 110 30C140 30 160 55 160 75C160 95 140 120 110 120C60 120 30 75 30 75Z"
                        stroke="#C5A572"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M15 55C15 55 30 75 15 95C25 85 35 75 30 75C35 75 25 65 15 55Z"
                        stroke="#C5A572"
                        strokeWidth="1"
                        fill="none"
                      />
                      <circle cx="140" cy="70" r="5" stroke="#C5A572" strokeWidth="1" fill="none" />
                      {/* Scales pattern */}
                      {Array.from({ length: 5 }).map((_, row) =>
                        Array.from({ length: 6 }).map((_, col) => (
                          <circle
                            key={`${row}-${col}`}
                            cx={70 + col * 15 + (row % 2) * 7}
                            cy={50 + row * 15}
                            r="6"
                            stroke="#C5A572"
                            strokeWidth="0.3"
                            fill="none"
                            opacity="0.5"
                          />
                        ))
                      )}
                    </svg>
                  </div>

                  {/* Text overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-gold-400 font-display italic text-lg">
                      &ldquo;Quality is not an act, it is a habit.&rdquo;
                    </p>
                    <p className="text-white/40 text-sm font-body mt-1">
                      — The Al Nile Fish Philosophy
                    </p>
                  </div>
                </div>
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
              <h3 className="font-display text-3xl font-bold text-navy-900">
                From the Heart of Egypt
                <br />
                <span className="text-teal-600">to the World</span>
              </h3>

              <p className="text-navy-600 font-body leading-relaxed">
                Born on the banks of the ancient Nile, our company has spent over four decades
                perfecting the art of sourcing, processing, and delivering the finest frozen
                seafood. We combine time-honored traditions of Egyptian fishery with
                cutting-edge technology to ensure every product meets the highest
                international standards.
              </p>

              <p className="text-navy-600 font-body leading-relaxed">
                Today, Al Nile Fish is embarking on an exciting new chapter — expanding
                into the Russian market while continuing to serve partners across Europe,
                Asia, and the broader Middle East. Our commitment to freshness, sustainability,
                and excellence remains as unwavering as the Nile itself.
              </p>

              {/* Values pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["Sustainability", "Quality First", "Global Reach", "Innovation"].map(
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
              <div className="text-center p-6 rounded-2xl glass-card-light">
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
