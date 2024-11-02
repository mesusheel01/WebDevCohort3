/** @type {import('tailwindcss').Config} */
export default {
    //app tailwind kha likhoge?
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors:{
            "bgColor": "#063970",
            "buttonHover": "#39cac3",
            "buttonColor": "#748ea7",
            "inputBg": "#2e537a",
            "para": "#748ea7",
            "inputText": "#446386"
        }
    },
  },
  plugins: [],
}
