"use client";

import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

function HACCPIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="38" stroke="#C5A572" strokeWidth="1.5" opacity="0.3" />
      <circle cx="40" cy="40" r="30" stroke="#C5A572" strokeWidth="1" opacity="0.15" />
      {/* Shield */}
      <path d="M40 16C40 16 54 20 54 32V44C54 52 48 58 40 62C32 58 26 52 26 44V32C26 20 40 16 40 16Z" stroke="#1B6B93" strokeWidth="2" fill="#1B6B93" fillOpacity="0.08" />
      {/* Checkmark */}
      <path d="M32 40L37 45L48 34" stroke="#1B6B93" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Small dots for "critical control" feel */}
      <circle cx="40" cy="24" r="1.5" fill="#C5A572" />
      <circle cx="34" cy="26" r="1" fill="#C5A572" opacity="0.6" />
      <circle cx="46" cy="26" r="1" fill="#C5A572" opacity="0.6" />
    </svg>
  );
}

function ISOIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="38" stroke="#C5A572" strokeWidth="1.5" opacity="0.3" />
      {/* Globe/circular arrows */}
      <circle cx="40" cy="40" r="18" stroke="#1B6B93" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="40" cy="40" r="12" stroke="#1B6B93" strokeWidth="1" opacity="0.4" />
      {/* Gear teeth around circle */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 40 + 20 * Math.cos(rad);
        const y1 = 40 + 20 * Math.sin(rad);
        const x2 = 40 + 24 * Math.cos(rad);
        const y2 = 40 + 24 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C5A572" strokeWidth="2.5" strokeLinecap="round" />;
      })}
      {/* Center text */}
      <text x="40" y="38" textAnchor="middle" fill="#1B6B93" fontSize="9" fontWeight="800" fontFamily="Inter, sans-serif">ISO</text>
      <text x="40" y="47" textAnchor="middle" fill="#C5A572" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">22000</text>
    </svg>
  );
}

function EUIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="38" stroke="#C5A572" strokeWidth="1.5" opacity="0.3" />
      {/* EU blue circle */}
      <circle cx="40" cy="40" r="22" fill="#1B6B93" fillOpacity="0.1" stroke="#1B6B93" strokeWidth="1.5" />
      {/* 12 stars in a circle like EU flag */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const cx = 40 + 16 * Math.cos(angle);
        const cy = 40 + 16 * Math.sin(angle);
        return (
          <g key={i} transform={`translate(${cx},${cy})`}>
            <polygon
              points="0,-3.5 0.8,-1.1 3.3,-1.1 1.3,0.4 2,2.8 0,1.3 -2,2.8 -1.3,0.4 -3.3,-1.1 -0.8,-1.1"
              fill="#C5A572"
            />
          </g>
        );
      })}
    </svg>
  );
}

function GMPIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <circle cx="40" cy="40" r="38" stroke="#C5A572" strokeWidth="1.5" opacity="0.3" />
      {/* Factory/building shape */}
      <rect x="26" y="34" width="28" height="22" rx="2" stroke="#1B6B93" strokeWidth="1.5" fill="#1B6B93" fillOpacity="0.08" />
      {/* Roof/top */}
      <path d="M24 34L40 22L56 34" stroke="#1B6B93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Windows */}
      <rect x="31" y="39" width="6" height="6" rx="1" fill="#C5A572" fillOpacity="0.3" stroke="#C5A572" strokeWidth="0.8" />
      <rect x="43" y="39" width="6" height="6" rx="1" fill="#C5A572" fillOpacity="0.3" stroke="#C5A572" strokeWidth="0.8" />
      {/* Door */}
      <rect x="37" y="48" width="6" height="8" rx="1" fill="#1B6B93" fillOpacity="0.2" stroke="#1B6B93" strokeWidth="0.8" />
      {/* Checkmark badge */}
      <circle cx="55" cy="28" r="8" fill="white" stroke="#C5A572" strokeWidth="1.5" />
      <path d="M51 28L54 31L59 25" stroke="#1B6B93" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const certifications = [
  {
    name: "HACCP",
    icon: <HACCPIcon />,
    fullName: { en: "Hazard Analysis Critical Control Points", ar: "تحليل المخاطر ونقاط التحكم الحرجة" },
    description: { en: "International food safety management ensuring products meet the strictest standards at every stage.", ar: "إدارة سلامة الغذاء الدولية تضمن أن المنتجات تلبي أشد المعايير صرامة في كل مرحلة." },
  },
  {
    name: "ISO 22000",
    icon: <ISOIcon />,
    fullName: { en: "Food Safety Management", ar: "إدارة سلامة الغذاء" },
    description: { en: "Certified to international standards for food safety management systems and consistent quality control.", ar: "معتمدة وفق المعايير الدولية لأنظمة إدارة سلامة الغذاء ومراقبة الجودة المستمرة." },
  },
  {
    name: "EU Approved",
    icon: <EUIcon />,
    fullName: { en: "European Union Export License", ar: "رخصة تصدير الاتحاد الأوروبي" },
    description: { en: "Fully licensed for export to EU member states, meeting all European food safety regulations.", ar: "مرخصة بالكامل للتصدير إلى دول الاتحاد الأوروبي، تستوفي جميع لوائح سلامة الغذاء الأوروبية." },
  },
  {
    name: "GMP",
    icon: <GMPIcon />,
    fullName: { en: "Good Manufacturing Practice", ar: "ممارسات التصنيع الجيدة" },
    description: { en: "Products consistently produced and controlled according to the highest quality standards.", ar: "يتم إنتاج المنتجات والتحكم فيها باستمرار وفقًا لأعلى معايير الجودة." },
  },
];

const processSteps = [
  {
    step: "01",
    title: { en: "Sustainable Sourcing", ar: "التوريد المستدام" },
    description: { en: "Fresh catch from pristine waters — partnering with responsible fisheries across the region.", ar: "صيد طازج من مياه نقية — بالشراكة مع مصائد مسؤولة في جميع أنحاء المنطقة." },
  },
  {
    step: "02",
    title: { en: "Expert Processing", ar: "المعالجة المتخصصة" },
    description: { en: "State-of-the-art HACCP certified facilities with skilled artisans who handle each product with care.", ar: "مرافق معتمدة بنظام HACCP بأحدث التقنيات مع حرفيين مهرة يتعاملون مع كل منتج بعناية." },
  },
  {
    step: "03",
    title: { en: "Quality Assurance", ar: "ضمان الجودة" },
    description: { en: "Rigorous testing and inspection at every stage ensures peak freshness, nutrition, and texture — from ocean to market.", ar: "اختبار وفحص صارم في كل مرحلة يضمن أقصى نضارة وقيمة غذائية وقوام — من المحيط إلى السوق." },
  },
  {
    step: "04",
    title: { en: "Global Delivery", ar: "التوصيل العالمي" },
    description: { en: "Reliable cold chain logistics ensuring products arrive in perfect condition, anywhere in the world.", ar: "لوجستيات سلسلة التبريد الموثوقة تضمن وصول المنتجات في حالة مثالية، في أي مكان في العالم." },
  },
];

export default function Quality() {
  const { t, lang } = useLanguage();

  return (
    <section id="quality" className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-teal-600 mb-4 block">
            {t("quality.tag")}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy-900 mb-6">
            {t("quality.title1")}
            <span className="text-teal-600 italic">{t("quality.title2")}</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg md:text-xl text-navy-600 max-w-3xl mx-auto font-body leading-relaxed">
            {t("quality.desc")}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-24">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1535140728325-a4d3707eee61?auto=format&fit=crop&w=1400&q=80"
              alt="Quality seafood processing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-navy-950/20 to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-md">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                {t("quality.process")}
              </h3>
              <p className="text-white/60 font-body text-sm md:text-base">
                {t("quality.processDesc")}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-24">
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 opacity-30" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 150}>
                <div className="text-center group">
                  <div className="relative mx-auto mb-6 w-28 h-28">
                    <div className="absolute inset-0 rounded-full bg-pearl border border-gold-200/30 group-hover:border-gold-400/50 group-hover:shadow-lg group-hover:shadow-gold-500/10 transition-all duration-500 flex items-center justify-center">
                      <span className="font-display font-bold text-3xl text-gold-500">{step.step}</span>
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-lg text-navy-900 mb-2">
                    {step.title[lang]}
                  </h4>
                  <p className="text-sm text-navy-500 font-body leading-relaxed">
                    {step.description[lang]}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
            {t("quality.certTitle")}
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 100}>
              <div className="rounded-2xl p-8 text-center h-full bg-pearl border border-gold-100/50 hover:border-gold-300/50 hover:shadow-lg hover:shadow-gold-500/5 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto mb-5">
                  {cert.icon}
                </div>
                <h4 className="font-display font-bold text-xl text-navy-900 mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs font-body text-gold-600 mb-3 tracking-wide">
                  {cert.fullName[lang]}
                </p>
                <p className="text-sm font-body text-navy-500 leading-relaxed">
                  {cert.description[lang]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
