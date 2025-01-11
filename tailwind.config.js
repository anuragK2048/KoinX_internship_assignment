/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgb(239, 242, 245)",
        customBlue: "#0F1629",
        deepMidnightBlue: "#0B1426",
        customDarkBlue: "#44475B",
        slateGray: "#768396",
        eerieBlack: "#111827",
        skyBlueMist: "#E8F4FD",
        shadowyNavy: "#191C1F",
        slateBlueGray: "#757779",
        greenishGray: "#3E424A",
        charcoalGray: "#1D1D1D",
        darkCharcoal: "#171717",
        darkGraphite: "#202020",
      },
    },
  },
  plugins: [],
};
