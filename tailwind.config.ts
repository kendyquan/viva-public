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
        primary: {
          DEFAULT: "#00AEEF",
          dark: "#0090C5",
          light: "#E8F7FD",
        },
        brand: {
          DEFAULT: "#00A3C4",
          dark: "#007A96",
        },
        star: "#FFB800",
        text: {
          DEFAULT: "#1A1A2E",
          muted: "#666666",
          light: "#999999",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
        "card-hover": "0 6px 24px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
