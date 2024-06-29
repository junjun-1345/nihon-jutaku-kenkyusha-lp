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
      },
    },
  },
  plugins: [],
};
export default config;
