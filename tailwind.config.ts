import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        secondary: "var(--secondary)",
        textColor: "var(--textColor)",
        terciary: "var(--terciary)",
      },
      fontFamily: {
        rouge: ['"Rouge Script"', 'cursive'], 
        narnoor: ['"Narnoor"', "sans-serif"],
        // Nome personalizado
      },
    },
  },
  plugins: [],
} satisfies Config;
