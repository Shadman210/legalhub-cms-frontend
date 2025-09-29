// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-glow": "pulse-glow 3s infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-in-up": "slide-in-up 0.6s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.7s ease-out forwards",
        "bounce-in": "bounce-in 0.6s ease-out forwards",
        "rotate-in": "rotate-in 1s ease-out forwards",
        circuit: "circuit 12s linear infinite",
        "data-flow": "data-flow 6s ease-in-out infinite",
        "legal-pulse": "legal-pulse 4s ease-in-out infinite",
        "tech-glow": "tech-glow 3s infinite",
        matrix: "matrix 15s linear infinite",
        "gavel-swing": "gavel-swing 4s ease-in-out infinite",
        "lawyer-hat": "lawyer-hat 5s ease-in-out infinite",
        "scales-balance": "scales-balance 6s ease-in-out infinite",
        "legal-document": "legal-document 10s linear infinite",
        courthouse: "courthouse 5s ease-in-out infinite",
        "legal-book": "legal-book 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
