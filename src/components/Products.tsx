"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    id: "frozen-fish",
    name: "Frozen Fish",
    subtitle: "Whole & Dressed",
    description:
      "Premium whole frozen fish sourced from the Nile and Mediterranean waters. Nile Perch, Tilapia, Mackerel, and Sardines — expertly processed and flash-frozen at peak freshness.",
    products: ["Nile Perch", "Tilapia", "Mackerel", "Sardines", "Red Mullet", "Sea Bass"],
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <path
          d="M10 32C10 32 20 16 38 16C48 16 54 24 54 32C54 40 48 48 38 48C20 48 10 32 10 32Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4 24C4 24 10 32 4 40C8 36 12 32 10 32C12 32 8 28 4 24Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="46" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 24C28 28 28 36 24 40" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
        <path d="M30 22C34 28 34 36 30 42" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
        <path d="M36 20C40 28 40 36 36 44" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      </svg>
    ),
    gradient: "from-teal-800 to-navy-900",
    accent: "teal",
  },
  {
    id: "shellfish",
    name: "Shellfish & Crustaceans",
    subtitle: "Ocean Delicacies",
    description:
      "The finest shrimp, prawns, crab, and lobster — harvested from pristine waters and processed under strict HACCP standards. Available in multiple grades and pack sizes.",
    products: ["Tiger Prawns", "White Shrimp", "Blue Crab", "Lobster Tails", "Crayfish", "Langoustine"],
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <path
          d="M32 52C32 52 16 48 12 36C10 30 14 24 20 22C24 20 28 22 28 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M32 52C32 52 48 48 52 36C54 30 50 24 44 22C40 20 36 22 36 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <ellipse cx="32" cy="28" rx="10" ry="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 18L20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 18L44 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 10L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 10L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M46 10L50 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M44 10L42 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="29" cy="26" r="1.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="35" cy="26" r="1.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    gradient: "from-gold-700 to-navy-900",
    accent: "gold",
  },
  {
    id: "fillets",
    name: "Premium Fillets",
    subtitle: "Ready to Cook",
    description:
      "Boneless, skin-on or skinless fillets prepared from the freshest catch. IQF technology ensures each piece retains optimal texture, flavour, and nutritional value.",
    products: ["Nile Perch Fillets", "Tilapia Fillets", "Cod Fillets", "Hake Fillets", "Pangasius", "Salmon Portions"],
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <path
          d="M8 38C8 38 16 22 32 18C44 15 56 20 56 30C56 36 48 42 38 42C24 42 8 38 8 38Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 34C22 28 34 24 48 28"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.5"
          strokeDasharray="2 3"
        />
        <path
          d="M12 36C20 32 32 28 52 32"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
          strokeDasharray="2 3"
        />
        {/* Knife */}
        <path d="M38 48L52 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M52 12L54 14L40 50L38 48Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M52 12L56 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-teal-700 to-teal-900",
    accent: "teal",
  },
  {
    id: "specialty",
    name: "Specialty Products",
    subtitle: "Unique Offerings",
    description:
      "Curated specialty items including calamari, octopus, cuttlefish, and fish roe — delicacies sourced from select Mediterranean and Red Sea fisheries.",
    products: ["Calamari Rings", "Baby Octopus", "Cuttlefish", "Fish Roe", "Surimi", "Seafood Mix"],
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        {/* Octopus-like shape */}
        <ellipse cx="32" cy="24" rx="14" ry="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="27" cy="22" r="2" stroke="currentColor" strokeWidth="1" />
        <circle cx="37" cy="22" r="2" stroke="currentColor" strokeWidth="1" />
        {/* Tentacles */}
        <path d="M20 34C18 40 14 46 12 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 35C24 42 22 48 24 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 36C32 44 32 50 30 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 35C40 42 42 48 40 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M44 34C46 40 50 46 52 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Suction cups */}
        <circle cx="16" cy="42" r="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="14" cy="48" r="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="25" cy="44" r="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="24" cy="50" r="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
    gradient: "from-navy-700 to-navy-950",
    accent: "gold",
  },
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <section id="products" className="section-padding bg-dark-section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(197,165,114,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Our Premium{" "}
            <span className="gold-shimmer">Collection</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-white/50 max-w-3xl mx-auto text-balance font-body leading-relaxed">
            A curated selection of the world&apos;s finest frozen seafood, sourced responsibly
            and processed to the highest international standards.
          </p>
        </ScrollReveal>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 100}>
              <motion.div
                onHoverStart={() => setActiveProduct(cat.id)}
                onHoverEnd={() => setActiveProduct(null)}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="p-8 lg:p-10">
                  {/* Header Row */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 flex-shrink-0 ${
                        cat.accent === "gold" ? "text-gold-400" : "text-teal-400"
                      } transition-transform duration-500 group-hover:scale-110`}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-gold-300 transition-colors">
                        {cat.name}
                      </h3>
                      <p
                        className={`text-xs font-body font-semibold tracking-[0.2em] uppercase ${
                          cat.accent === "gold"
                            ? "text-gold-500/70"
                            : "text-teal-400/70"
                        }`}
                      >
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Product Tags */}
                  <AnimatePresence>
                    <div className="flex flex-wrap gap-2">
                      {cat.products.map((product, j) => (
                        <motion.span
                          key={product}
                          initial={activeProduct === cat.id ? { opacity: 0, scale: 0.8 } : false}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: j * 0.05 }}
                          className={`px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-300 ${
                            activeProduct === cat.id
                              ? cat.accent === "gold"
                                ? "bg-gold-500/20 text-gold-300 border border-gold-500/30"
                                : "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                              : "bg-white/5 text-white/40 border border-white/5"
                          }`}
                        >
                          {product}
                        </motion.span>
                      ))}
                    </div>
                  </AnimatePresence>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-body font-medium">Explore Range</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`h-0.5 transition-all duration-500 ${
                    activeProduct === cat.id ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      cat.accent === "gold"
                        ? "linear-gradient(90deg, transparent, #C5A572, transparent)"
                        : "linear-gradient(90deg, transparent, #1B6B93, transparent)",
                  }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-16">
          <p className="text-white/40 font-body mb-6">
            Looking for something specific? We source custom orders worldwide.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline-gold"
          >
            Request Custom Order
          </button>
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
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,80 L0,80 Z"
            fill="#F8F6F0"
          />
        </svg>
      </div>
    </section>
  );
}
