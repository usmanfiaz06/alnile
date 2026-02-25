"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Products", "Sourcing", "Operations", "Quality", "Facility"];

const galleryItems = [
  { id: 1, title: "Fresh Nile Perch Catch", category: "Sourcing", gradient: "linear-gradient(135deg, #1B6B93 0%, #0A1628 100%)", height: "h-72" },
  { id: 2, title: "State-of-the-Art Processing Line", category: "Operations", gradient: "linear-gradient(135deg, #12233D 0%, #1B6B93 100%)", height: "h-96" },
  { id: 3, title: "Premium Tiger Prawns", category: "Products", gradient: "linear-gradient(135deg, #C5A572 0%, #685536 100%)", height: "h-80" },
  { id: 4, title: "Quality Control Laboratory", category: "Quality", gradient: "linear-gradient(135deg, #0D3950 0%, #1B6B93 100%)", height: "h-72" },
  { id: 5, title: "IQF Flash Freezing", category: "Operations", gradient: "linear-gradient(135deg, #1E365E 0%, #08283A 100%)", height: "h-80" },
  { id: 6, title: "Tilapia Fillet Selection", category: "Products", gradient: "linear-gradient(135deg, #876F47 0%, #4A3C26 100%)", height: "h-96" },
  { id: 7, title: "Mediterranean Sourcing", category: "Sourcing", gradient: "linear-gradient(135deg, #1B6B93 0%, #175B7D 100%)", height: "h-80" },
  { id: 8, title: "Cold Storage Warehouse", category: "Facility", gradient: "linear-gradient(135deg, #0A1628 0%, #12233D 100%)", height: "h-72" },
  { id: 9, title: "Mackerel Whole Frozen", category: "Products", gradient: "linear-gradient(135deg, #08283A 0%, #1B6B93 100%)", height: "h-80" },
  { id: 10, title: "HACCP Inspection Process", category: "Quality", gradient: "linear-gradient(135deg, #C5A572 0%, #A68A5B 100%)", height: "h-72" },
  { id: 11, title: "Loading Bay Operations", category: "Facility", gradient: "linear-gradient(135deg, #12233D 0%, #0A1628 100%)", height: "h-96" },
  { id: 12, title: "Red Sea Prawn Harvest", category: "Sourcing", gradient: "linear-gradient(135deg, #1B6B93 0%, #C5A572 100%)", height: "h-80" },
  { id: 13, title: "Calamari Processing", category: "Operations", gradient: "linear-gradient(135deg, #175B7D 0%, #0D3950 100%)", height: "h-72" },
  { id: 14, title: "Lobster Tail Premium Grade", category: "Products", gradient: "linear-gradient(135deg, #685536 0%, #C5A572 100%)", height: "h-96" },
  { id: 15, title: "Packaging & Labelling", category: "Facility", gradient: "linear-gradient(135deg, #0A1628 0%, #1E365E 100%)", height: "h-80" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((item: typeof galleryItems[0]) => {
    setLightboxItem(item);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxItem(null);
  }, []);

  const navigateLightbox = useCallback(
    (dir: -1 | 1) => {
      if (!lightboxItem) return;
      const idx = filtered.findIndex((i) => i.id === lightboxItem.id);
      const next = (idx + dir + filtered.length) % filtered.length;
      setLightboxItem(filtered[next]);
    },
    [lightboxItem, filtered]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxItem) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxItem, closeLightbox, navigateLightbox]);

  useEffect(() => {
    document.body.style.overflow = lightboxItem ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxItem]);

  return (
    <main className="min-h-screen bg-navy-950">
      {/* Header */}
      <div className="relative pt-32 pb-16 px-6 text-center">
        <div className="absolute inset-0 bg-hero-gradient animated-gradient opacity-50" />
        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-body text-gold-400 hover:text-gold-300 transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13 8H3M7 4L3 8L7 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Image <span className="gold-shimmer">Gallery</span>
          </h1>
          <p className="text-white/50 font-body max-w-2xl mx-auto text-balance">
            Explore our world of premium seafood — from the pristine waters where we source to
            the state-of-the-art facilities where we process and package.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-navy-950/90 backdrop-blur-xl border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${
                activeFilter === cat ? "filter-btn-active" : "filter-btn-inactive"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div layout className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item)}
                className={`relative ${item.height} rounded-xl overflow-hidden cursor-pointer group`}
                style={{ background: item.gradient }}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <pattern id={`gp-${item.id}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                      <circle cx="12" cy="12" r="0.8" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#gp-${item.id})`} />
                  </svg>
                </div>

                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-25 transition-opacity duration-500 group-hover:scale-110 transform">
                  <svg viewBox="0 0 64 64" className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="0.75">
                    <rect x="8" y="12" width="48" height="40" rx="4" />
                    <circle cx="24" cy="28" r="6" />
                    <path d="M8 44L24 32L36 40L48 28L56 36" />
                  </svg>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400 mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-white/60 text-xs font-body">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 5L7 1L13 5V13H1V5Z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 13V9H9V13" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Click to enlarge
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/20 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-white/20 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 font-body text-lg">No items in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M4 4L16 16M16 4L4 16" strokeLinecap="round" />
              </svg>
            </button>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M13 4L7 10L13 16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M7 4L13 10L7 16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Image content */}
            <motion.div
              key={lightboxItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[85vw] h-[70vh] max-w-5xl rounded-2xl overflow-hidden"
              style={{ background: lightboxItem.gradient }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 64 64" className="w-32 h-32 text-white" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <rect x="8" y="12" width="48" height="40" rx="4" />
                  <circle cx="24" cy="28" r="6" />
                  <path d="M8 44L24 32L36 40L48 28L56 36" />
                </svg>
              </div>

              {/* Info bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950/90 to-transparent p-8">
                <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold-400 mb-2 block">
                  {lightboxItem.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {lightboxItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
