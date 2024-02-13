import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
      },
      colors: {
        light: {
          100: "hsl(0, 0%, 100%)",
          98: "hsl(0, 0%, 98%)",
          52: "hsl(0, 0%, 52%)",
        },
        dark: {
          17: "hsl(207, 26%, 17%)",
          8: "hsl(200, 15%, 8%)",
          22: "hsl(209, 23%, 22%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
