"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function AnimatedMap() {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 900 450"
      className="w-full h-auto"
      fill="none"
    >
      {/* Simplified World Map Outline */}
      <g opacity="0.15" stroke="#C5A572" strokeWidth="0.5">
        {/* North America */}
        <path d="M120,100 C130,80 160,60 200,70 C220,75 240,90 250,110 C260,130 240,150 230,170 C220,190 200,200 180,210 C160,220 140,215 130,200 C120,180 110,150 100,140 C90,130 95,120 120,100Z" />
        {/* South America */}
        <path d="M200,230 C210,220 230,225 240,240 C250,260 260,290 255,320 C250,350 240,370 225,380 C210,390 200,380 195,360 C190,340 185,310 185,290 C185,270 190,240 200,230Z" />
        {/* Europe */}
        <path d="M400,80 C420,70 440,75 460,80 C470,85 475,95 470,105 C465,115 455,120 445,125 C435,130 425,128 415,120 C405,115 395,100 400,80Z" />
        {/* Africa */}
        <path d="M420,140 C440,130 460,135 475,150 C490,170 495,200 490,230 C485,260 475,290 460,310 C445,330 425,335 415,320 C405,305 400,280 395,250 C390,220 400,160 420,140Z" />
        {/* Asia / Russia */}
        <path d="M480,60 C520,50 580,45 640,50 C700,55 740,65 760,75 C780,85 770,100 750,110 C730,120 700,125 660,120 C620,115 580,110 540,105 C500,100 480,90 480,60Z" />
        {/* Middle East */}
        <path d="M500,120 C520,115 540,120 545,135 C550,150 540,165 525,170 C510,175 495,165 490,150 C485,135 490,125 500,120Z" />
        {/* Australia */}
        <path d="M700,280 C720,270 750,275 770,290 C790,305 785,325 770,335 C755,345 730,340 715,330 C700,320 690,295 700,280Z" />
      </g>

      {/* Egypt Marker */}
      <g className={`transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
        <circle cx="455" cy="175" r="6" fill="#C5A572" className="map-pulse" />
        <circle cx="455" cy="175" r="3" fill="#E0C78F" />
        <text x="455" y="198" textAnchor="middle" fill="#C5A572" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">
          EGYPT
        </text>
      </g>

      {/* Russia Marker */}
      <g
        className={`transition-all duration-1000 delay-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <circle cx="580" cy="65" r="6" fill="#1B6B93" className="map-pulse" />
        <circle cx="580" cy="65" r="3" fill="#4DAECE" />
        <text x="580" y="55" textAnchor="middle" fill="#1B6B93" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">
          RUSSIA
        </text>
      </g>

      {/* Animated Route Line */}
      {visible && (
        <path
          d="M455,175 C460,140 500,100 540,80 C560,70 575,67 580,65"
          stroke="url(#routeGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 6"
          className="route-line"
          fill="none"
        />
      )}

      {/* Other market markers */}
      {[
        { cx: 430, cy: 95, label: "EU", delay: 700 },
        { cx: 530, cy: 140, label: "UAE", delay: 900 },
        { cx: 670, cy: 130, label: "ASIA", delay: 1100 },
      ].map((market) => (
        <g
          key={market.label}
          className={`transition-all duration-700 ${
            visible ? "opacity-60" : "opacity-0"
          }`}
          style={{ transitionDelay: `${market.delay}ms` }}
        >
          <circle cx={market.cx} cy={market.cy} r="3" fill="#C5A572" opacity="0.6" />
          <text
            x={market.cx}
            y={market.cy - 8}
            textAnchor="middle"
            fill="#C5A572"
            fontSize="8"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            opacity="0.6"
          >
            {market.label}
          </text>
        </g>
      ))}

      <defs>
        <linearGradient id="routeGradient" x1="455" y1="175" x2="580" y2="65">
          <stop offset="0%" stopColor="#C5A572" />
          <stop offset="100%" stopColor="#1B6B93" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const expansionStats = [
  { label: "Active Markets", value: "25+" },
  { label: "Distribution Partners", value: "150+" },
  { label: "Annual Shipments", value: "2,000+" },
  { label: "Cold Storage Capacity", value: "50K MT" },
];

export default function GlobalReach() {
  return (
    <section id="global" className="section-padding bg-dark-section relative overflow-hidden">
      {/* Top wave from light section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]"
        >
          <path
            d="M0,25 C240,50 480,10 720,35 C960,60 1200,15 1440,35 L1440,80 L0,80 Z"
            fill="#F8F6F0"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative pt-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-teal-400 mb-4 block">
            Worldwide Presence
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Our Global{" "}
            <span className="gold-shimmer">Reach</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-white/50 max-w-3xl mx-auto text-balance font-body leading-relaxed">
            From the fertile banks of the Nile to markets spanning five continents —
            Al Nile Fish connects the world&apos;s finest seafood with discerning buyers everywhere.
          </p>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal className="mb-16">
          <div className="glass-card rounded-2xl p-6 md:p-10">
            <AnimatedMap />
          </div>
        </ScrollReveal>

        {/* Russia Expansion Highlight */}
        <ScrollReveal className="mb-16">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-10"
              style={{
                background: "radial-gradient(circle, #1B6B93 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="grid lg:grid-cols-2 gap-10 items-center relative">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-teal-400">
                    Now Expanding
                  </span>
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                  Strengthening Our
                  <br />
                  <span className="text-teal-400">Presence in Russia</span>
                </h3>
                <p className="text-white/50 font-body leading-relaxed mb-6">
                  Russia has been a cornerstone of our operations, and we&apos;re
                  deepening our commitment with expanded distribution networks,
                  new partnerships, and increased cold-chain infrastructure across
                  the Russian Federation. We are actively seeking strategic
                  partners to join us in this exciting growth chapter.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full text-xs font-body font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    Moscow & St. Petersburg
                  </span>
                  <span className="px-4 py-2 rounded-full text-xs font-body font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    Expanded Cold Chain
                  </span>
                  <span className="px-4 py-2 rounded-full text-xs font-body font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    New Distribution Hubs
                  </span>
                </div>
              </div>

              {/* Visual side */}
              <div className="grid grid-cols-2 gap-4">
                {expansionStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-5 rounded-xl border transition-all duration-300 hover:border-teal-500/30 ${
                      i === 0
                        ? "border-gold-500/20 bg-gold-500/5"
                        : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    <div className="font-display font-bold text-2xl text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-body text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Wave to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]"
        >
          <path
            d="M0,35 C180,60 360,10 540,30 C720,50 900,15 1080,35 C1260,55 1380,25 1440,35 L1440,80 L0,80 Z"
            fill="#F8F6F0"
          />
        </svg>
      </div>
    </section>
  );
}
