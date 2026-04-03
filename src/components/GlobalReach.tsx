"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

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
    <svg ref={ref} viewBox="0 0 900 450" className="w-full h-auto" fill="none">
      <g opacity="0.15" stroke="#C5A572" strokeWidth="0.5">
        <path d="M120,100 C130,80 160,60 200,70 C220,75 240,90 250,110 C260,130 240,150 230,170 C220,190 200,200 180,210 C160,220 140,215 130,200 C120,180 110,150 100,140 C90,130 95,120 120,100Z" />
        <path d="M200,230 C210,220 230,225 240,240 C250,260 260,290 255,320 C250,350 240,370 225,380 C210,390 200,380 195,360 C190,340 185,310 185,290 C185,270 190,240 200,230Z" />
        <path d="M400,80 C420,70 440,75 460,80 C470,85 475,95 470,105 C465,115 455,120 445,125 C435,130 425,128 415,120 C405,115 395,100 400,80Z" />
        <path d="M420,140 C440,130 460,135 475,150 C490,170 495,200 490,230 C485,260 475,290 460,310 C445,330 425,335 415,320 C405,305 400,280 395,250 C390,220 400,160 420,140Z" />
        <path d="M480,60 C520,50 580,45 640,50 C700,55 740,65 760,75 C780,85 770,100 750,110 C730,120 700,125 660,120 C620,115 580,110 540,105 C500,100 480,90 480,60Z" />
        <path d="M500,120 C520,115 540,120 545,135 C550,150 540,165 525,170 C510,175 495,165 490,150 C485,135 490,125 500,120Z" />
        <path d="M700,280 C720,270 750,275 770,290 C790,305 785,325 770,335 C755,345 730,340 715,330 C700,320 690,295 700,280Z" />
      </g>

      {/* UAE HQ Marker */}
      <g className={`transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
        <circle cx="530" cy="145" r="8" fill="#C5A572" className="map-pulse" />
        <circle cx="530" cy="145" r="4" fill="#E0C78F" />
        <text x="530" y="170" textAnchor="middle" fill="#C5A572" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="700">
          UAE (HQ)
        </text>
      </g>

      {/* GCC Market Markers */}
      {[
        { cx: 520, cy: 155, label: "QATAR", delay: 500 },
        { cx: 548, cy: 158, label: "OMAN", delay: 700 },
        { cx: 508, cy: 140, label: "KUWAIT", delay: 900 },
        { cx: 498, cy: 150, label: "KSA", delay: 1100 },
      ].map((market) => (
        <g
          key={market.label}
          className={`transition-all duration-700 ${visible ? "opacity-80" : "opacity-0"}`}
          style={{ transitionDelay: `${market.delay}ms` }}
        >
          <circle cx={market.cx} cy={market.cy} r="4" fill="#1B6B93" />
          <circle cx={market.cx} cy={market.cy} r="2" fill="#4DAECE" />
          <text x={market.cx} y={market.cy - 8} textAnchor="middle" fill="#1B6B93" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">
            {market.label}
          </text>
        </g>
      ))}

      {/* Import Source Markers */}
      {[
        { cx: 490, cy: 80, label: "RUSSIA", delay: 1300 },
        { cx: 565, cy: 160, label: "PAKISTAN", delay: 1500 },
        { cx: 580, cy: 175, label: "SRI LANKA", delay: 1700 },
      ].map((market) => (
        <g
          key={market.label}
          className={`transition-all duration-700 ${visible ? "opacity-80" : "opacity-0"}`}
          style={{ transitionDelay: `${market.delay}ms` }}
        >
          <circle cx={market.cx} cy={market.cy} r="4" fill="#C5A572" />
          <circle cx={market.cx} cy={market.cy} r="2" fill="#E0C78F" />
          <text x={market.cx} y={market.cy - 8} textAnchor="middle" fill="#C5A572" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">
            {market.label}
          </text>
        </g>
      ))}

      {/* Other markets */}
      {[
        { cx: 440, cy: 95, label: "EU", delay: 1900 },
        { cx: 670, cy: 130, label: "ASIA", delay: 2100 },
        { cx: 460, cy: 200, label: "AFRICA", delay: 2300 },
      ].map((market) => (
        <g
          key={market.label}
          className={`transition-all duration-700 ${visible ? "opacity-50" : "opacity-0"}`}
          style={{ transitionDelay: `${market.delay}ms` }}
        >
          <circle cx={market.cx} cy={market.cy} r="3" fill="#C5A572" opacity="0.6" />
          <text x={market.cx} y={market.cy - 8} textAnchor="middle" fill="#C5A572" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="500" opacity="0.6">
            {market.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const gccMarkets = [
  { country: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" }, role: { en: "Headquarters", ar: "المقر الرئيسي" }, city: "Umm Al Quwain" },
  { country: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" }, role: { en: "Major Market", ar: "سوق رئيسي" }, city: "Riyadh, Jeddah, Dammam" },
  { country: { en: "Qatar", ar: "قطر" }, role: { en: "Active Market", ar: "سوق نشط" }, city: "Doha" },
  { country: { en: "Kuwait", ar: "الكويت" }, role: { en: "Active Market", ar: "سوق نشط" }, city: "Kuwait City" },
  { country: { en: "Oman", ar: "عمان" }, role: { en: "Active Market", ar: "سوق نشط" }, city: "Muscat" },
  { country: { en: "Pakistan", ar: "باكستان" }, role: { en: "Import Partner", ar: "شريك استيراد" }, city: "Karachi" },
  { country: { en: "Sri Lanka", ar: "سريلانكا" }, role: { en: "Import Partner", ar: "شريك استيراد" }, city: "Colombo" },
];

const importSources = [
  { country: { en: "Russia", ar: "روسيا" }, specialty: { en: "Cold-water fish, Salmon, Cod, Pollock", ar: "أسماك المياه الباردة، السلمون، القد، البولاك" } },
  { country: { en: "Pakistan", ar: "باكستان" }, specialty: { en: "Shrimp, Prawns, Pomfret, Sole", ar: "الجمبري، القريدس، البومفريت، موسى" } },
  { country: { en: "Sri Lanka", ar: "سريلانكا" }, specialty: { en: "Tuna, Swordfish, Crab, Lobster", ar: "التونة، سمك أبو سيف، السلطعون، الكركند" } },
];

const expansionStats = [
  { label: { en: "Active Markets", ar: "أسواق نشطة" }, value: "25+" },
  { label: { en: "Distribution Partners", ar: "شركاء التوزيع" }, value: "150+" },
  { label: { en: "Annual Shipments", ar: "شحنات سنوية" }, value: "2,000+" },
  { label: { en: "Cold Storage Capacity", ar: "سعة التخزين البارد" }, value: "50K MT" },
];

export default function GlobalReach() {
  const { t, lang } = useLanguage();

  return (
    <section id="global" className="py-24 md:py-32 lg:py-40 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-teal-400 mb-4 block">
            {t("global.tag")}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            {t("global.title1")}
            <span className="gold-shimmer">{t("global.title2")}</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-white/50 max-w-3xl mx-auto font-body leading-relaxed">
            {t("global.desc")}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-16">
          <div className="rounded-2xl p-6 md:p-10 bg-white/[0.03] border border-white/[0.06]">
            <AnimatedMap />
          </div>
        </ScrollReveal>

        {/* Russia Import Section */}
        <ScrollReveal className="mb-16">
          <div className="rounded-2xl p-8 md:p-12 bg-white/[0.03] border border-white/[0.06] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 opacity-10"
              style={{ background: "radial-gradient(circle, #C5A572 0%, transparent 70%)", filter: "blur(40px)" }}
            />

            <div className="grid lg:grid-cols-2 gap-10 items-center relative">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-teal-400">
                    {t("global.importTag")}
                  </span>
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                  {t("global.importTitle1")}
                  <br />
                  <span className="gold-shimmer">{t("global.importTitle2")}</span>
                </h3>
                <p className="text-white/50 font-body leading-relaxed mb-6">
                  {t("global.importDesc")}
                </p>

                <div className="space-y-3">
                  {importSources.map((source) => (
                    <div key={source.country.en} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-body text-sm font-semibold">{source.country[lang]}</span>
                        <p className="text-white/40 font-body text-xs mt-0.5">{source.specialty[lang]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh seafood imports"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-gold-400 text-xs font-body font-semibold tracking-wider uppercase">{t("global.globalSourcing")}</p>
                  <p className="text-white font-display font-bold text-lg">{t("global.importNetwork")}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* GCC Highlight */}
        <ScrollReveal className="mb-16">
          <div className="rounded-2xl p-8 md:p-12 bg-white/[0.03] border border-white/[0.06] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10"
              style={{ background: "radial-gradient(circle, #1B6B93 0%, transparent 70%)", filter: "blur(40px)" }}
            />

            <div className="grid lg:grid-cols-2 gap-10 items-center relative">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gold-400 animate-pulse" />
                  <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
                    {t("global.gulfTag")}
                  </span>
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                  {t("global.gulfTitle1")}
                  <br />
                  <span className="text-teal-400">{t("global.gulfTitle2")}</span>
                </h3>
                <p className="text-white/50 font-body leading-relaxed mb-6">
                  {t("global.gulfDesc")}
                </p>

                <div className="space-y-3">
                  {gccMarkets.map((market) => (
                    <div key={market.country.en} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${market.role.en === "Headquarters" ? "bg-gold-400" : market.role.en === "Import Partner" ? "bg-teal-300" : "bg-teal-400"}`} />
                      <span className="text-white font-body text-sm font-medium">{market.country[lang]}</span>
                      <span className="text-white/30 font-body text-xs">&mdash; {market.role[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {expansionStats.map((stat, i) => (
                  <div
                    key={stat.label.en}
                    className={`p-5 rounded-xl border transition-all duration-300 hover:border-teal-500/30 ${
                      i === 0
                        ? "border-gold-500/20 bg-gold-500/5"
                        : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    <div className="font-display font-bold text-2xl text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-body text-white/40">{stat.label[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
