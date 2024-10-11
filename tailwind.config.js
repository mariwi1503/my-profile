/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Sans MS"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#2C3E50",
        orange: "#ffa500",
        secondary: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
