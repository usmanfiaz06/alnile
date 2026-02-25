"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  { id: 1, title: "Fresh Nile Perch Catch", category: "Products", image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[4/5]" },
  { id: 2, title: "Seafood Processing", category: "Operations", image: "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[4/3]" },
  { id: 3, title: "Premium Tiger Prawns", category: "Products", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-square" },
  { id: 4, title: "Quality Inspection", category: "Quality", image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[3/4]" },
  { id: 5, title: "Flash Freezing Line", category: "Operations", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[4/3]" },
  { id: 6, title: "Tilapia Fillets Display", category: "Products", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[4/5]" },
  { id: 7, title: "Cold Storage Facility", category: "Facility", image: "https://images.unsplash.com/photo-1553659971-f01207815844?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[4/3]" },
  { id: 8, title: "Lobster & Shellfish", category: "Products", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-square" },
  { id: 9, title: "Sustainable Sourcing", category: "Sourcing", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[3/4]" },
  { id: 10, title: "Fresh Fish Market", category: "Sourcing", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[4/3]" },
  { id: 11, title: "Premium Salmon", category: "Products", image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[4/5]" },
  { id: 12, title: "Seafood Preparation", category: "Operations", image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=800&q=80", aspectRatio: "aspect-[4/3]" },
];

const categories = ["All", "Products", "Sourcing", "Operations", "Quality", "Facility"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigateLightbox = useCallback(
    (dir: 1 | -1) => {
      if (lightbox === null) return;
      const idx = filtered.findIndex((i) => i.id === lightbox);
      const next = (idx + dir + filtered.length) % filtered.length;
      setLightbox(filtered[next].id);
    },
    [lightbox, filtered]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, navigateLightbox]);

  const currentItem = lightbox !== null ? galleryItems.find((i) => i.id === lightbox) : null;

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors font-body text-sm mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 12L6 8L10 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>

          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            Our <span className="gold-shimmer">Gallery</span>
          </h1>
          <p className="text-white/50 font-body text-lg max-w-xl">
            Explore our world of premium seafood — from sourcing to delivery.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? "filter-btn-active" : "filter-btn-inactive"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="masonry-grid">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item.id)}
                className={`relative ${item.aspectRatio} rounded-2xl overflow-hidden cursor-pointer group`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/60 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400 mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-xl text-white">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-10">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 8L24 24M24 8L8 24" strokeLinecap="round" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M24 8L12 20L24 32" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8L28 20L16 32" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.div
              key={currentItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400">
                  {currentItem.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  {currentItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
