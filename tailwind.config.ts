import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{scss,css}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: "#0F172A",
          800: "#1E293B",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
        },
        violet: {
          600: "#7C3AED",
          100: "#EDE9FE",
        },
        rose: {
          500: "#F43F5E",
        },
        lime: {
          300: "#BEF264",
        },
        amber: {
          800: "#92400E",
        },
      },
      fontFamily: {
        snas: ["NanumSquare", "Arial", "sans-serif"],
      },
      fontSize: {
        16: "16px",
        18: "18px",
        20: "20px",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
        extra: "800",
      },
    },
  },
  plugins: [],
} satisfies Config;
