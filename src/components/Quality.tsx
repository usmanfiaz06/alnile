"use client";

import ScrollReveal from "./ScrollReveal";

const certifications = [
  {
    name: "HACCP",
    fullName: "Hazard Analysis Critical Control Points",
    description: "International food safety management ensuring products meet the strictest standards at every stage.",
  },
  {
    name: "ISO 22000",
    fullName: "Food Safety Management",
    description: "Certified to international standards for food safety management systems and consistent quality control.",
  },
  {
    name: "EU Approved",
    fullName: "European Union Export License",
    description: "Fully licensed for export to EU member states, meeting all European food safety regulations.",
  },
  {
    name: "GMP",
    fullName: "Good Manufacturing Practice",
    description: "Products consistently produced and controlled according to the highest quality standards.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Sustainable Sourcing",
    description: "Fresh catch from pristine waters — partnering with responsible fisheries across the region.",
  },
  {
    step: "02",
    title: "Expert Processing",
    description: "State-of-the-art HACCP certified facilities with skilled artisans who handle each product with care.",
  },
  {
    step: "03",
    title: "Flash Freezing",
    description: "IQF technology locks in peak freshness, nutrition, and texture — from ocean to freezer in hours.",
  },
  {
    step: "04",
    title: "Global Delivery",
    description: "Reliable cold chain logistics ensuring products arrive in perfect condition, anywhere in the world.",
  },
];

export default function Quality() {
  return (
    <section id="quality" className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-teal-600 mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy-900 mb-6">
            Uncompromising{" "}
            <span className="text-teal-600 italic">Quality</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg md:text-xl text-navy-600 max-w-3xl mx-auto font-body leading-relaxed">
            Every product that bears the Al Nile Fish name has been sourced, processed,
            and delivered according to the highest international standards.
          </p>
        </ScrollReveal>

        {/* Full-width quality image */}
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
                Our Process
              </h3>
              <p className="text-white/60 font-body text-sm md:text-base">
                From ocean to plate, every step is carefully monitored.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Process Timeline */}
        <div className="mb-24">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
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
          <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
            Certifications & Standards
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 100}>
              <div className="rounded-2xl p-8 text-center h-full bg-pearl border border-gold-100/50 hover:border-gold-300/50 hover:shadow-lg hover:shadow-gold-500/5 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <span className="font-display font-bold text-xl text-gold-600">{cert.name.slice(0, 2)}</span>
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
