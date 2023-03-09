/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'epilogue': ["Epilogue", "sans-serif"],
      },
      colors: {
        'almostWhite': "hsl(0, 0%, 98%)",
        'mediumGray': "hsl(0, 0%, 41%)",
        'lightGray': "hsl(0, 0%, 60%)",
        'almostBlack': "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
