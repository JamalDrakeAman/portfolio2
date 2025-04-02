/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg': "url('/assets/design/bg-hero.png')",
        'profil-img': "url('/assets/imgs/profil-img.jpg')"
      },
      screens: {
        '3xl': '1920px',  // Custom Breakpoint für 4K/Full HD
        '4xl': '2560px',   // Ultra-Wide/QHD
      },
    },
  },
  plugins: [],
}

