/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto",
          "Inter","Helvetica Neue","Arial","Noto Sans","Apple Color Emoji","Segoe UI Emoji"
        ]
      }
    },
  },
  plugins: [],
}
