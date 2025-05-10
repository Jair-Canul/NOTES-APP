/** @type {import('tailwindcss').config} */
export default  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      //colors used in the project
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
}
