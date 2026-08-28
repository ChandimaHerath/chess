import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0f",
          900: "#0f1117",
          800: "#161a23",
          700: "#1f2530",
        },
        gold: {
          50: "#fbf6e7",
          100: "#f6ecca",
          300: "#f3d99b",
          400: "#e7c46c",
          500: "#d4af37",
          600: "#a9842a",
          700: "#896a22",
          800: "#6f561c",
        },
        board: {
          light: "#ebecd0",
          dark: "#739552",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "marquee-slow": "marquee-right 50s linear infinite",
        "marquee-fast": "marquee-right 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
