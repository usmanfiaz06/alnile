"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  {
    id: 1,
    title: "Fresh Nile Perch Catch",
    category: "Sourcing",
    gradient: "linear-gradient(135deg, #1B6B93 0%, #0A1628 100%)",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 2,
    title: "Processing Facility",
    category: "Operations",
    gradient: "linear-gradient(135deg, #12233D 0%, #1B6B93 100%)",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Premium Tiger Prawns",
    category: "Products",
    gradient: "linear-gradient(135deg, #C5A572 0%, #685536 100%)",
    aspectRatio: "aspect-square",
  },
  {
    id: 4,
    title: "Quality Inspection",
    category: "Quality",
    gradient: "linear-gradient(135deg, #0D3950 0%, #1B6B93 100%)",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "Flash Freezing Line",
    category: "Operations",
    gradient: "linear-gradient(135deg, #1E365E 0%, #08283A 100%)",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 6,
    title: "Tilapia Fillets Display",
    category: "Products",
    gradient: "linear-gradient(135deg, #876F47 0%, #4A3C26 100%)",
    aspectRatio: "aspect-[4/5]",
  },
];

export default function GalleryPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-600 mb-4 block">
            Visual Journey
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6">
            Our <span className="text-gold-600 italic">Gallery</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto text-balance font-body leading-relaxed">
            A glimpse into our world — from pristine waters to world-class processing facilities.
          </p>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="masonry-grid mb-12">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80}>
              <div
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative ${item.aspectRatio} rounded-2xl overflow-hidden cursor-pointer group`}
                style={{ background: item.gradient }}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <pattern id={`pattern-${item.id}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="1" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#pattern-${item.id})`} />
                  </svg>
                </div>

                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <svg viewBox="0 0 64 64" className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="8" y="12" width="48" height="40" rx="4" />
                    <circle cx="24" cy="28" r="6" />
                    <path d="M8 44L24 32L36 40L48 28L56 36" />
                  </svg>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-navy-950/70 flex flex-col justify-end p-6 transition-opacity duration-400 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400 mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-xl text-white">
                    {item.title}
                  </h4>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 group"
          >
            <span className="text-lg font-display font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
              View Full Gallery
            </span>
            <div className="w-12 h-12 rounded-full border-2 border-gold-500/30 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-gold-600 group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M4 10h12M12 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
