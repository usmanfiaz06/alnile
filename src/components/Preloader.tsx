"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-navy-950"
        >
          {/* Animated wave background */}
          <div className="absolute bottom-0 left-0 w-[200%] h-[30%] opacity-10">
            <svg viewBox="0 0 2880 120" preserveAspectRatio="none" className="w-full h-full">
              <motion.path
                d="M0,60 C480,120 960,0 1440,60 C1920,120 2400,0 2880,60 L2880,120 L0,120 Z"
                fill="#1B6B93"
                animate={{ x: [0, -720] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          {/* Logo animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Fish icon */}
            <motion.svg
              viewBox="0 0 80 80"
              className="w-20 h-20 mx-auto mb-6"
              fill="none"
            >
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                stroke="#C5A572"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M22 40C22 40 30 28 46 28C54 28 58 34 58 40C58 46 54 52 46 52C30 52 22 40 22 40Z"
                fill="#C5A572"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
              <motion.path
                d="M18 32C18 32 22 40 18 48C22 44 26 40 22 40C26 40 22 36 18 32Z"
                fill="#C5A572"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <motion.circle
                cx="50"
                cy="39"
                r="2.5"
                fill="#050B14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              />
            </motion.svg>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display font-bold text-2xl text-white mb-1">
              Al Nile Fish
            </h2>
            <p className="text-xs font-body tracking-[0.3em] uppercase text-gold-400/70">
              Premium Frozen Seafood
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="mt-8 w-32 h-0.5 bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold-500 to-teal-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
