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
      "Premium whole frozen fish sourced from pristine waters. Nile Perch, Tilapia, Mackerel, and Sardines — expertly processed and flash-frozen at peak freshness.",
    products: ["Nile Perch", "Tilapia", "Mackerel", "Sardines", "Red Mullet", "Sea Bass"],
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=600&q=80",
    accent: "teal",
  },
  {
    id: "shellfish",
    name: "Shellfish & Crustaceans",
    subtitle: "Ocean Delicacies",
    description:
      "The finest shrimp, prawns, crab, and lobster — harvested from pristine waters and processed under strict HACCP standards. Available in multiple grades and pack sizes.",
    products: ["Tiger Prawns", "White Shrimp", "Blue Crab", "Lobster Tails", "Crayfish", "Langoustine"],
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
    accent: "gold",
  },
  {
    id: "fillets",
    name: "Premium Fillets",
    subtitle: "Ready to Cook",
    description:
      "Boneless, skin-on or skinless fillets prepared from the freshest catch. IQF technology ensures each piece retains optimal texture, flavour, and nutritional value.",
    products: ["Nile Perch Fillets", "Tilapia Fillets", "Cod Fillets", "Hake Fillets", "Pangasius", "Salmon Portions"],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    accent: "teal",
  },
  {
    id: "specialty",
    name: "Specialty Products",
    subtitle: "Unique Offerings",
    description:
      "Curated specialty items including calamari, octopus, cuttlefish, and fish roe — sourced from select fisheries across the region.",
    products: ["Calamari Rings", "Baby Octopus", "Cuttlefish", "Fish Roe", "Surimi", "Seafood Mix"],
    image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=600&q=80",
    accent: "gold",
  },
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <section id="products" className="py-24 md:py-32 lg:py-40 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Our Premium{" "}
            <span className="gold-shimmer">Collection</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-white/50 max-w-3xl mx-auto font-body leading-relaxed">
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
                className="rounded-2xl overflow-hidden group cursor-pointer bg-white/[0.03] border border-white/[0.06] hover:border-gold-500/30 hover:bg-white/[0.06] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className={`text-xs font-body font-semibold tracking-[0.2em] uppercase ${cat.accent === "gold" ? "text-gold-400" : "text-teal-400"}`}>
                      {cat.subtitle}
                    </p>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>

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

                  <div className="mt-6 flex items-center gap-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-body font-medium">Explore Range</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

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
    </section>
  );
}
