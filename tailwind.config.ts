import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050912",
        panel: "#0a1220",
        "panel-2": "#0d1829",
        line: "#1b2a40",
        muted: "#8c9aaf",
        text: "#f3f7fc",
        blue: { DEFAULT: "#1d75ff", light: "#3384ff" },
        cyan: "#15c7e7",
        green: "#8ee36f",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        shell: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
