/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "blizzard-blue": {
          50: "#ecfdff",
          100: "#cff9fe",
          200: "#a5f3fc",
          300: "#67eaf9",
          400: "#22d9ee",
          500: "#06bfd4",
          600: "#08a0b2",
          700: "#0e8390",
          800: "#156b75",
          900: "#165b63",
          950: "#083e44",
        },
      },
    },
  },
  plugins: [],
};
