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
    <svg ref={ref} viewBox="0 0 1000 500" className="w-full h-auto" fill="none">
      {/* Grid lines for geography feel */}
      <g opacity="0.04" stroke="#C5A572">
        {[100,150,200,250,300,350,400].map(y => <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} strokeWidth="0.5" />)}
        {[100,200,300,400,500,600,700,800,900].map(x => <line key={`v${x}`} x1={x} y1="50" x2={x} y2="450" strokeWidth="0.5" />)}
      </g>

      {/* Equator */}
      <line x1="0" y1="250" x2="1000" y2="250" stroke="#C5A572" strokeWidth="0.3" opacity="0.08" strokeDasharray="8 4" />

      {/* === WORLD MAP - Simplified continent outlines === */}
      <g opacity="0.2" fill="#C5A572" fillOpacity="0.06" stroke="#C5A572" strokeWidth="0.8">
        {/* North America */}
        <path d="M45,80 L80,65 L120,60 L145,70 L170,58 L195,65 L210,75 L215,90 L230,85 L240,95 L235,110 L225,120 L230,135 L220,145 L210,155 L215,165 L205,175 L195,180 L180,190 L165,195 L155,200 L148,210 L135,215 L125,210 L120,195 L115,185 L105,180 L95,170 L80,165 L70,155 L60,140 L50,125 L42,110 L38,95 Z" />
        {/* Greenland */}
        <path d="M215,40 L240,35 L260,40 L270,50 L265,65 L250,70 L235,68 L220,60 L215,50 Z" />
        {/* Central America & Caribbean */}
        <path d="M148,210 L155,215 L165,220 L175,218 L180,225 L178,232 L170,235 L160,230 L150,228 L140,225 L135,218 Z" />
        {/* South America */}
        <path d="M195,240 L210,235 L225,240 L240,250 L250,265 L255,280 L260,300 L258,320 L250,340 L240,355 L230,370 L220,380 L210,385 L200,380 L195,370 L190,355 L185,340 L180,320 L178,300 L175,280 L178,265 L185,250 Z" />

        {/* Europe */}
        <path d="M400,70 L420,62 L435,65 L445,58 L460,60 L470,55 L480,60 L490,65 L485,75 L480,85 L470,90 L465,100 L458,108 L450,115 L440,118 L430,115 L420,110 L415,100 L408,95 L400,90 L395,80 Z" />
        {/* UK */}
        <path d="M385,72 L392,68 L396,72 L394,80 L388,82 L384,78 Z" />
        {/* Scandinavia */}
        <path d="M435,38 L442,32 L450,35 L455,42 L458,52 L455,58 L448,55 L440,50 L435,45 Z" />
        {/* Iceland */}
        <path d="M350,42 L360,38 L368,42 L365,48 L355,48 Z" />

        {/* Africa */}
        <path d="M420,160 L435,155 L450,158 L465,160 L480,165 L490,172 L498,180 L505,195 L508,210 L510,230 L508,250 L505,270 L498,290 L490,305 L480,318 L470,328 L460,335 L450,338 L440,335 L430,325 L422,312 L418,298 L415,280 L412,260 L410,240 L408,220 L410,200 L412,185 L415,170 Z" />
        {/* Madagascar */}
        <path d="M520,300 L525,295 L530,300 L530,315 L525,320 L520,315 Z" />

        {/* Russia / Northern Asia */}
        <path d="M490,65 L520,55 L550,48 L580,42 L620,38 L660,35 L700,38 L740,42 L770,48 L800,55 L830,52 L850,58 L840,68 L820,72 L800,75 L770,78 L740,82 L710,80 L680,78 L650,82 L620,85 L590,82 L560,78 L540,75 L520,72 L505,70 L495,68 Z" />

        {/* Middle East */}
        <path d="M498,120 L510,115 L522,118 L530,125 L535,135 L540,145 L538,155 L530,160 L520,162 L510,158 L505,150 L500,140 L498,130 Z" />
        {/* Arabian Peninsula */}
        <path d="M490,145 L500,140 L510,142 L525,148 L535,155 L540,165 L538,175 L530,180 L518,178 L508,175 L498,170 L492,162 L488,155 Z" />

        {/* India & South Asia */}
        <path d="M580,120 L595,115 L610,118 L618,125 L622,135 L620,148 L615,162 L610,178 L605,192 L598,205 L590,215 L585,210 L580,198 L575,185 L572,170 L570,155 L572,140 L575,130 Z" />
        {/* Sri Lanka */}
        <path d="M605,218 L610,215 L614,220 L612,228 L607,228 L604,224 Z" />

        {/* China / East Asia */}
        <path d="M660,82 L680,78 L700,80 L720,85 L740,90 L755,100 L760,115 L755,130 L748,142 L740,150 L728,155 L715,152 L700,148 L688,142 L678,135 L670,125 L665,112 L660,100 L658,90 Z" />

        {/* Southeast Asia */}
        <path d="M700,165 L715,160 L730,165 L738,175 L735,188 L728,195 L718,198 L708,192 L702,180 L698,172 Z" />
        {/* Indonesia */}
        <path d="M695,215 L712,210 L728,212 L742,215 L755,218 L762,225 L758,232 L745,230 L730,228 L715,226 L702,224 L695,220 Z" />
        <path d="M768,222 L780,220 L790,225 L788,232 L778,232 L770,228 Z" />

        {/* Japan */}
        <path d="M775,95 L780,88 L785,92 L788,102 L785,112 L780,118 L775,112 L772,102 Z" />

        {/* Australia */}
        <path d="M740,290 L760,280 L785,278 L810,282 L830,290 L840,305 L838,320 L830,335 L818,345 L800,348 L780,345 L762,338 L750,325 L742,310 L738,298 Z" />
        {/* New Zealand */}
        <path d="M858,340 L862,335 L868,338 L870,348 L866,355 L860,352 Z" />
      </g>

      {/* === Connection lines from UAE to markets === */}
      <g className={`transition-all duration-1500 ${visible ? "opacity-30" : "opacity-0"}`} style={{ transitionDelay: "800ms" }}>
        {/* UAE to Russia */}
        <path d="M530,155 Q540,100 580,60" stroke="#C5A572" strokeWidth="1" strokeDasharray="4 3" fill="none" />
        {/* UAE to Pakistan */}
        <line x1="530" y1="155" x2="582" y2="165" stroke="#C5A572" strokeWidth="1" strokeDasharray="4 3" />
        {/* UAE to Sri Lanka */}
        <path d="M530,155 Q560,185 608,222" stroke="#C5A572" strokeWidth="1" strokeDasharray="4 3" fill="none" />
        {/* UAE to Qatar */}
        <line x1="530" y1="155" x2="525" y2="162" stroke="#4DAECE" strokeWidth="0.8" strokeDasharray="3 2" />
        {/* UAE to KSA */}
        <line x1="530" y1="155" x2="505" y2="158" stroke="#4DAECE" strokeWidth="0.8" strokeDasharray="3 2" />
        {/* UAE to Kuwait */}
        <line x1="530" y1="155" x2="515" y2="140" stroke="#4DAECE" strokeWidth="0.8" strokeDasharray="3 2" />
        {/* UAE to Oman */}
        <line x1="530" y1="155" x2="540" y2="168" stroke="#4DAECE" strokeWidth="0.8" strokeDasharray="3 2" />
        {/* UAE to EU */}
        <path d="M530,155 Q480,110 445,85" stroke="#C5A572" strokeWidth="0.8" strokeDasharray="4 3" fill="none" />
      </g>

      {/* === UAE HQ Marker === */}
      <g className={`transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
        <circle cx="530" cy="155" r="12" fill="#C5A572" fillOpacity="0.15" />
        <circle cx="530" cy="155" r="8" fill="#C5A572" className="map-pulse" />
        <circle cx="530" cy="155" r="4" fill="#E0C78F" />
        <text x="530" y="180" textAnchor="middle" fill="#C5A572" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.5">
          UAE (HQ)
        </text>
      </g>

      {/* === GCC Market Markers === */}
      {[
        { cx: 525, cy: 162, label: "QATAR", lx: 525, ly: 175 },
        { cx: 540, cy: 168, label: "OMAN", lx: 552, ly: 178 },
        { cx: 515, cy: 140, label: "KUWAIT", lx: 500, ly: 133 },
        { cx: 505, cy: 158, label: "KSA", lx: 490, ly: 165 },
      ].map((market, i) => (
        <g
          key={market.label}
          className={`transition-all duration-700 ${visible ? "opacity-90" : "opacity-0"}`}
          style={{ transitionDelay: `${500 + i * 200}ms` }}
        >
          <circle cx={market.cx} cy={market.cy} r="5" fill="#1B6B93" fillOpacity="0.3" />
          <circle cx={market.cx} cy={market.cy} r="3" fill="#4DAECE" />
          <text x={market.lx} y={market.ly} textAnchor="middle" fill="#4DAECE" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.5">
            {market.label}
          </text>
        </g>
      ))}

      {/* === Import Source Markers === */}
      {[
        { cx: 580, cy: 60, label: "RUSSIA", lx: 580, ly: 52 },
        { cx: 582, cy: 165, label: "PAKISTAN", lx: 600, ly: 162 },
        { cx: 608, cy: 222, label: "SRI LANKA", lx: 630, ly: 225 },
      ].map((market, i) => (
        <g
          key={market.label}
          className={`transition-all duration-700 ${visible ? "opacity-90" : "opacity-0"}`}
          style={{ transitionDelay: `${1300 + i * 200}ms` }}
        >
          <circle cx={market.cx} cy={market.cy} r="6" fill="#C5A572" fillOpacity="0.2" />
          <circle cx={market.cx} cy={market.cy} r="3.5" fill="#C5A572" />
          <circle cx={market.cx} cy={market.cy} r="1.5" fill="#E0C78F" />
          <text x={market.lx} y={market.ly} textAnchor="middle" fill="#C5A572" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.5">
            {market.label}
          </text>
        </g>
      ))}

      {/* === Other region labels === */}
      {[
        { cx: 445, cy: 85, label: "EUROPE" },
        { cx: 460, cy: 260, label: "AFRICA" },
        { cx: 720, cy: 135, label: "EAST ASIA" },
        { cx: 155, cy: 140, label: "AMERICAS" },
      ].map((region, i) => (
        <g
          key={region.label}
          className={`transition-all duration-700 ${visible ? "opacity-40" : "opacity-0"}`}
          style={{ transitionDelay: `${1900 + i * 200}ms` }}
        >
          <text x={region.cx} y={region.cy} textAnchor="middle" fill="#C5A572" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="1">
            {region.label}
          </text>
        </g>
      ))}

      {/* Legend */}
      <g className={`transition-all duration-700 ${visible ? "opacity-60" : "opacity-0"}`} style={{ transitionDelay: "2500ms" }}>
        <circle cx="40" cy="430" r="4" fill="#C5A572" />
        <text x="50" y="433" fill="#C5A572" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="500">Import Sources</text>
        <circle cx="140" cy="430" r="4" fill="#4DAECE" />
        <text x="150" y="433" fill="#4DAECE" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="500">Export Markets</text>
        <circle cx="250" cy="430" r="4" fill="#E0C78F" />
        <text x="260" y="433" fill="#E0C78F" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="500">Headquarters</text>
      </g>
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
