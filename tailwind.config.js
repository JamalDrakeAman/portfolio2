/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/assets/design/bg-hero.png')",
        'profil-img': "url('/assets/imgs/profil-img.jpg')",
        'about-label-1': "url('/assets/design/label1.svg')",
        'about-label-2': "url('/assets/design/label2.svg')",
        'about-label-3': "url('/assets/design/label3.svg')",
        'skills-bg': "url('/assets/design/bg-skills.png')",
        'skill-label': "url('/assets/design/skills-label.png')",
        'pull-label': "url('/assets/design/pull-label3.png')",
        'universe-bg': "url('/assets/design/universe.svg')",
        'footer-bg': "url('/assets/design/bg-footer.png')",
        'label-bg': "url('/assets/design/bg-label.png')",
        'feedback-label1': "url('/assets/design/feedback-label1.png')",
        'feedback-label2': "url('/assets/design/feedback-label2.png')"
      },
      screens: {
        '3xl': '1920px',  // Custom Breakpoint für 4K/Full HD
        '4xl': '2560px',   // Ultra-Wide/QHD
      },
      
    },
  },
  plugins: [],
}

