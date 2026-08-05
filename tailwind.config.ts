import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Theme-aware dynamic CSS variable mappings
        theme: {
          main: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--card-bg)",
        },
        "text-theme": {
          main: "var(--text-primary)",
          muted: "var(--text-muted)",
        },
        "accent-theme": "var(--accent-primary)",
        "border-theme": "var(--border-color)",
      },
    },
  },
  plugins: [],
};

export default config;
