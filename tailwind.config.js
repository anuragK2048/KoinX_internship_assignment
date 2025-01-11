/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgb(239, 242, 245)",
      },
    },
  },
  plugins: [],
};
