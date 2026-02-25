"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  {
    id: 1,
    title: "Fresh Catch Display",
    category: "Products",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=600&q=80",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 2,
    title: "Lobster & Shellfish",
    category: "Products",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=600&q=80",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Premium Tiger Prawns",
    category: "Products",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
    aspectRatio: "aspect-square",
  },
  {
    id: 4,
    title: "Fresh Fish Market",
    category: "Sourcing",
    image: "https://images.unsplash.com/photo-1553659971-f01207815844?auto=format&fit=crop&w=600&q=80",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "Ocean Fresh Fillets",
    category: "Products",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 6,
    title: "Seafood on Ice",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=600&q=80",
    aspectRatio: "aspect-[4/5]",
  },
];

export default function GalleryPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-600 mb-4 block">
            Visual Journey
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy-900 mb-6">
            Our <span className="text-gold-600 italic">Gallery</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto font-body leading-relaxed">
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
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

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

                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal className="text-center">
          <Link href="/gallery" className="inline-flex items-center gap-3 group">
            <span className="text-lg font-display font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
              View Full Gallery
            </span>
            <div className="w-12 h-12 rounded-full border-2 border-gold-500/30 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-600 group-hover:translate-x-0.5 transition-transform">
                <path d="M4 10h12M12 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
