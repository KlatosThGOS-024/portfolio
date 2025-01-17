/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#FFB809"],
        inputPrimary: ["#453B55"],
      },
    },
  },
  plugins: [],
};
