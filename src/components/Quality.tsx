"use client";

import ScrollReveal from "./ScrollReveal";

const certifications = [
  {
    name: "HACCP",
    fullName: "Hazard Analysis Critical Control Points",
    description: "International food safety management system ensuring our products meet the strictest safety standards at every stage.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
        <path d="M24 4L6 14V24C6 35.1 13.8 45.2 24 48C34.2 45.2 42 35.1 42 24V14L24 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 24L22 30L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "ISO 22000",
    fullName: "Food Safety Management",
    description: "Certified to international standards for food safety management systems, ensuring consistent quality control throughout our operations.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M24 10V24L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "EU Approved",
    fullName: "European Union Export License",
    description: "Fully licensed for export to EU member states, meeting all European food safety regulations and quality standards.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 24 24)`}>
            <path d="M24 6L25 9L23 9Z" fill="currentColor" opacity="0.7" />
          </g>
        ))}
        <text x="24" y="27" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="serif">
          EU
        </text>
      </svg>
    ),
  },
  {
    name: "GMP",
    fullName: "Good Manufacturing Practice",
    description: "Adherence to Good Manufacturing Practice guidelines ensuring products are consistently produced and controlled according to quality standards.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
        <rect x="8" y="12" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20H40" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28L20 32L32 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Sustainable Sourcing",
    description: "Fresh catch from the Nile, Mediterranean, and Red Sea — partnering with responsible fisheries.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4C16 4 4 12 4 20C4 24 8 28 16 28C24 28 28 24 28 20C28 12 16 4 16 4Z" strokeLinecap="round" />
        <path d="M16 12V20M12 16H20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Expert Processing",
    description: "State-of-the-art HACCP certified facilities with skilled artisans who handle each product with care.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="24" height="18" rx="2" strokeLinecap="round" />
        <path d="M4 14H28" strokeLinecap="round" />
        <circle cx="16" cy="21" r="3" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Flash Freezing",
    description: "IQF technology locks in peak freshness, nutrition, and texture — from ocean to freezer in hours.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4V28M4 16H28" strokeLinecap="round" />
        <path d="M8 8L24 24M24 8L8 24" strokeLinecap="round" opacity="0.5" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Global Delivery",
    description: "Reliable cold chain logistics ensuring products arrive in perfect condition, anywhere in the world.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <ellipse cx="16" cy="16" rx="6" ry="12" />
        <path d="M4 16H28" strokeLinecap="round" />
        <path d="M6 10H26" strokeLinecap="round" opacity="0.5" />
        <path d="M6 22H26" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
];

export default function Quality() {
  return (
    <section id="quality" className="section-padding bg-pearl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.03]">
        <svg viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="#1B6B93" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="100" stroke="#1B6B93" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="60" stroke="#1B6B93" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-teal-600 mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6">
            Uncompromising{" "}
            <span className="text-teal-600 italic">Quality</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto text-balance font-body leading-relaxed">
            Every product that bears the Al Nile Fish name has been sourced, processed,
            and delivered according to the highest international standards.
          </p>
        </ScrollReveal>

        {/* Process Timeline */}
        <div className="mb-24">
          <ScrollReveal>
            <h3 className="font-display text-2xl font-bold text-navy-900 text-center mb-12">
              Our Process
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 opacity-30" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 150}>
                <div className="text-center group">
                  {/* Step circle */}
                  <div className="relative mx-auto mb-6 w-24 h-24">
                    <div className="absolute inset-0 rounded-full bg-white shadow-lg shadow-gold-500/10 border border-gold-200/30 group-hover:border-gold-400/50 group-hover:shadow-gold-500/20 transition-all duration-500" />
                    <div className="absolute inset-3 text-gold-600 group-hover:text-gold-500 transition-colors">
                      {step.icon}
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-navy-950 text-xs font-body font-bold flex items-center justify-center shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-lg text-navy-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-navy-500 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <ScrollReveal>
          <h3 className="font-display text-2xl font-bold text-navy-900 text-center mb-12">
            Certifications & Standards
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 100}>
              <div className="glass-card-light rounded-2xl p-6 text-center h-full group">
                <div className="w-16 h-16 mx-auto mb-4 text-gold-600 group-hover:text-gold-500 transition-colors duration-300 group-hover:scale-110 transform">
                  {cert.icon}
                </div>
                <h4 className="font-display font-bold text-xl text-navy-900 mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs font-body text-gold-600 mb-3 tracking-wide">
                  {cert.fullName}
                </p>
                <p className="text-sm font-body text-navy-500 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
