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
        arabic: ["Noto Sans Arabic", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "shimmer": "shimmer 3s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(197, 165, 114, 0.4)" },
          "50%": { boxShadow: "0 0 20px 10px rgba(197, 165, 114, 0)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #050B14 0%, #0A1628 40%, #12233D 70%, #1B6B93 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
