// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#1d1d1d",
        secondary: "#232526",
        "primary-text": "#f4f4f4",
        "secondary-text": "#b8b8b8",
      },
      backgroundImage: {
        "main-banner": "url(./src/assets/img/main-banner-bg.png)",
        "main-banner-sm": "url(./src/assets/img/main-banner-bg-sm.png)",
        "border-gradient": "url(./src/assets/border-gradient.svg)",
        "left-sep": "url(./src/assets/img/left-sep.png)",
      },
      fontFamily: {
        'primary': ['Ginora Sans', 'sans-serif'],
        'secondary': ['Gilroy-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
