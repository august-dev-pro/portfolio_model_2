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
        foreground: "var(--foreground)",
        "orange-color": "#FB923C",
        "orange-b-color": "#FF7500",
      },
      fontFamily: {
        sans: ["MaPolice", "sans-serif"], // Remplace 'sans' si tu souhaites appliquer à une autre famille
        sansbold: ["MaPoliceBold", "sans-serif"], // Remplace 'sans' si tu souhaites appliquer à une autre famille
      },
    },
  },
  plugins: [],
} satisfies Config;
