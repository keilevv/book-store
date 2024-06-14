/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        aquamarine: {
          50: "#AAA6A3",
          100: "#949E9F",
          200: "#ADACA7",
          300: "#72868F",
          400: "#2D4343",
          500: "#353F3E",
        },
      },
    },
  },
  plugins: [],
};
