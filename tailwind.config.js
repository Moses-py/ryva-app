/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "/bg_gradient.png",
      },
      fontFamily: {
        primary: "'Raleway', sans-serif",
        secondary: "'Source Sans Pro', sans-serif",
      },
    },
  },
  plugins: [],
};
