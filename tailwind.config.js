/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "very-dark-gray": "#2b2b2b",
      "dark-gray": "#969696",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
