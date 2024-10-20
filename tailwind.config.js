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
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
