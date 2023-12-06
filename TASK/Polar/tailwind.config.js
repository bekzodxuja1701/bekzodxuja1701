/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bc: "#D23166",
        bcHover: "#b3184b",
        tc: "#150101;",
        tcBlack: "#0F0101;",
      },
      fontFamily: {
        Fred: ["Fredoka", "sans-serif"],
        Hind: ["Hind Madurai", "sans-serif"],
        Rob: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
