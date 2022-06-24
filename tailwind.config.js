module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-dark': '#18191A',
        'secondary-dark': '#242526',
        'light-gray': '#3A3B3C',
      },
      color: {
        'main-light': '#7BB5DF',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/abdelmjid.jpg')",
      }
    },
    
  },
  plugins: [],
}
