/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Big Shoulders Display", "sans-serif"],
        serif: ["Libre Baskerville", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        lub: {
          bg: "#F6F1E8",
          bg2: "#FFFCF7",
          bg3: "#F1E7D8",
          accent: "#0F766E",
          text: "#1F1A14",
          muted: "#6F6557",
        },
      },
    },
  },
  plugins: [],
};
