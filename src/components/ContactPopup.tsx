"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
  const hasShown = useRef(false);

  useEffect(() => {
    if (dismissed || hasShown.current) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Show after scrolling past ~2 sections (2 viewport heights)
      if (scrollY > vh * 1.8 && !hasShown.current) {
        hasShown.current = true;
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  // Auto-close after 4 seconds of no activity
  useEffect(() => {
    if (!show) return;

    const resetTimer = () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setShow(false);
        setDismissed(true);
      }, 4000);
    };

    // Start the timer
    resetTimer();

    // Reset on user interaction within popup
    const handleActivity = () => resetTimer();
    window.addEventListener("mousemove", handleActivity, { passive: true });
    window.addEventListener("touchstart", handleActivity, { passive: true });
    window.addEventListener("keydown", handleActivity, { passive: true });

    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, [show]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  const handleContact = () => {
    setShow(false);
    setDismissed(true);
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-6 right-6 z-[9990] w-[340px] max-w-[calc(100vw-3rem)]"
        >
          <div className="relative bg-navy-950 border border-gold-500/20 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
            {/* Gold accent bar */}
            <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 z-10"
              aria-label="Close popup"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1L13 13M13 1L1 13" strokeLinecap="round" />
              </svg>
            </button>

            <div className="p-6">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h4 className="font-display font-bold text-lg text-white mb-2">
                Interested in Our Products?
              </h4>
              <p className="text-white/50 font-body text-sm leading-relaxed mb-5">
                Get in touch with our team for inquiries, partnerships, or custom orders. We&apos;d love to hear from you.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={handleContact}
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-body font-semibold text-sm hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
                >
                  Contact Us
                </button>
                <button
                  onClick={handleClose}
                  className="px-4 py-3 rounded-xl border border-white/10 text-white/60 font-body text-sm hover:bg-white/5 hover:text-white/80 transition-all duration-300"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
