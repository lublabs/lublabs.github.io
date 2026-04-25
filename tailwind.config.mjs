/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Big Shoulders Display", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        lub: {
          bg: "#070C16",
          bg2: "#0C1220",
          bg3: "#111A2E",
          accent: "#3EFFC8",
          text: "#EEE9E0",
          muted: "#7A8499",
        },
      },
    },
  },
  plugins: [],
};
