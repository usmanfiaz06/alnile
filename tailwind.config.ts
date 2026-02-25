import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E8EDF5",
          100: "#C5D0E6",
          200: "#9EAFD4",
          300: "#768EC2",
          400: "#5876B5",
          500: "#3A5EA8",
          600: "#2D4A82",
          700: "#1E365E",
          800: "#12233D",
          900: "#0A1628",
          950: "#050B14",
        },
        gold: {
          50: "#FBF7EF",
          100: "#F5ECDA",
          200: "#EBDAB5",
          300: "#E0C78F",
          400: "#D4B36A",
          500: "#C5A572",
          600: "#A68A5B",
          700: "#876F47",
          800: "#685536",
          900: "#4A3C26",
        },
        teal: {
          50: "#E6F3F8",
          100: "#C0E2EE",
          200: "#96CFE3",
          300: "#6CBCD8",
          400: "#4DAECE",
          500: "#1B6B93",
          600: "#175B7D",
          700: "#124A66",
          800: "#0D3950",
          900: "#08283A",
        },
        pearl: "#F8F6F0",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "shimmer": "shimmer 3s linear infinite",
        "wave": "wave 8s ease-in-out infinite",
        "wave-slow": "wave 12s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
        "slide-left": "slideLeft 0.8s ease-out forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "bubble": "bubble 10s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "progress": "progress 1.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(-5px) translateY(-3px)" },
          "50%": { transform: "translateX(0) translateY(-5px)" },
          "75%": { transform: "translateX(5px) translateY(-3px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(197, 165, 114, 0.4)" },
          "50%": { boxShadow: "0 0 20px 10px rgba(197, 165, 114, 0)" },
        },
        bubble: {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(-10vh) scale(1)", opacity: "0" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #050B14 0%, #0A1628 40%, #12233D 70%, #1B6B93 100%)",
        "dark-section": "linear-gradient(180deg, #0A1628 0%, #12233D 100%)",
        "partnership-gradient": "linear-gradient(135deg, #1B6B93 0%, #0A1628 50%, #12233D 100%)",
        "gold-gradient": "linear-gradient(135deg, #C5A572 0%, #E0C78F 50%, #C5A572 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
