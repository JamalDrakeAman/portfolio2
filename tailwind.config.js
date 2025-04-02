/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg': "url('/assets/design/bg-hero.png')",
        'profil-img': "url('/assets/imgs/profil-img.jpg')",
        'about-label-1': "url('/assets/design/label1.svg')",
        'about-label-2': "url('/assets/design/label2.svg')",
        'about-label-3': "url('/assets/design/label3.svg')"
      },
      screens: {
        '3xl': '1920px',  // Custom Breakpoint für 4K/Full HD
        '4xl': '2560px',   // Ultra-Wide/QHD
      },
    },
  },
  plugins: [],
}

