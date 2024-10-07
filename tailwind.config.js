/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,html,js,jsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { colors: {
      primary: {
        softBlue: "#8bacda",
        cyan: "#00FFF6"
      }, 
      neutral: {
        darkBlueBg: "#0D192B",
        darkBlueCard: "#14253D",
        darkBlueLine: "#2F415B"
      }
    },
    fontFamily: {
      bodyCopy: 
      "Outfit, sans-serif"
    }, 
    screens: {
      'xxs': '375px'
    }},
  },
  plugins: [],
  safelist: [
    'bg-neutral-darkBlueCard',
    'bg-primary-cyan/50',
    'text-primary-cyan',
    'text-primary-softBlue',
  ]
}

