import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
