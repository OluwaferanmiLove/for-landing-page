module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'for-max-width': '1780px',
      },
      width: {
        'for-width': '1780px',
        'hero-img-width': '54vw',
      },
      height: {
        'hero-img-height': '70vh',
      },
      colors: {
        'main-bg': '#E5D7BD',
        'hero-bg-text': '#E0CDB0',
        'for-secondary': '#BE6C42',
        'for-primary': '#713c25',
        'for-primary-lighter': '#F7E7CE',
      },
      fontFamily: {
        'Apparel-Display-Black': ['Apparel-Display-Black'],
        'Apparel-Display-Bold': ['Apparel-Display-Bold'],
        'Apparel-Display-Regular': ['Apparel-Display-Regular'],
        'Gilroy-Regular': ['Gilroy-Regular'],
      },
      fontSize: {
        'hero-large': '20vw',
        'hero-medium': '9.5vw',
        'hero-small': '5vw',
      },
      spacing: {
        '11vw': '11vw',
        '23vw': '21.3vw',
        '25vw': '24.5vw',
        'hero-max-height': '1080px',
      }
    },
  },
  plugins: [],
}
