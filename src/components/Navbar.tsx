"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Markets", href: "#global" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <circle cx="20" cy="20" r="18" stroke="url(#logoGradient)" strokeWidth="1.5" className="transition-all duration-500 group-hover:stroke-[2]" />
                <path d="M12 20C12 20 16 14 24 14C28 14 30 17 30 20C30 23 28 26 24 26C16 26 12 20 12 20Z" fill="url(#logoGradient)" />
                <path d="M10 16C10 16 12 20 10 24C12 22 14 20 12 20C14 20 12 18 10 16Z" fill="url(#logoGradient)" />
                <circle cx="26" cy="19.5" r="1.5" fill="#050B14" />
                <defs>
                  <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#C5A572" />
                    <stop offset="100%" stopColor="#E0C78F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold tracking-wide text-white leading-tight">
                Al Nile
              </span>
              <span className="text-[10px] font-body font-medium tracking-[0.3em] uppercase text-gold-400 leading-tight">
                Fish
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-body font-medium text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </button>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs font-body text-white/50">
              <button className="px-2 py-1 rounded text-white/90 bg-white/10 transition-colors">EN</button>
              <span className="text-white/20">|</span>
              <button className="px-2 py-1 rounded hover:text-white/90 hover:bg-white/5 transition-colors">AR</button>
            </div>
            <button onClick={() => handleNavClick("#contact")} className="btn-gold text-xs !px-6 !py-3">
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-2xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-display font-bold text-white hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-4 flex items-center gap-3"
              >
                <button className="px-3 py-1.5 rounded text-sm text-white/90 bg-white/10">EN</button>
                <button className="px-3 py-1.5 rounded text-sm text-white/50 hover:text-white/90 hover:bg-white/5 transition-colors">AR</button>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.08, duration: 0.4 }}
                onClick={() => handleNavClick("#contact")}
                className="btn-gold mt-2"
              >
                Get in Touch
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
