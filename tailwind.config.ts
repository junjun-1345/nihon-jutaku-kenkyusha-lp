import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        relaxed: "1.75", // デフォルトの行間を設定
      },
      letterSpacing: {
        wide: "0.1em", // デフォルトの文字間隔を設定
      },
      colors: {
        primary: "#4b91b8",
        secondary: "#4B91B8",
        blue: {
          50: "#C0EAD2",
          100: "#D9F3DF",
          200: "#A8E1CB",
          300: "#78CECC",
          400: "#4B91B8",
          500: "#4B91B8",
          600: "#61B2C3",
          700: "#2B2C77",
          800: "#35488D",
          900: "#2F2260",
          DEFAULT: "#4B91B8",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          DEFAULT: "#6A6A6A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
