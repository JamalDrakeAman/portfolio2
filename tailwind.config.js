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
        'pull-label': "url('/assets/design/pull-label3.png')"
      },
      screens: {
        '3xl': '1920px',  // Custom Breakpoint für 4K/Full HD
        '4xl': '2560px',   // Ultra-Wide/QHD
      },
      keyframes: {
        'diagonal-move1': {
          '0%': {
            transform: 'translate(0, 0)',
            opacity: '1'
          },
          '5%': {
            
            opacity: '0.7' // Behalte volle Sichtbarkeit bei 50%
          },
          '10%': {
            
            opacity: '0.2' // Behalte volle Sichtbarkeit bei 50%
          },
          '20%': {
            
            opacity: '0' // Behalte volle Sichtbarkeit bei 50%
          },
          '50%': {
            transform: 'translate(-100%, 100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(-50%, 50%)',
            opacity: '0'
          }
        },
        'diagonal-move2': {
          '0%': {
            transform: 'translate(0, 0)',
            opacity: '1'
          },
          '20%': {
            
            opacity: '1' // Behalte volle Sichtbarkeit bei 50%
          },
          '50%': {
            transform: 'translate(-100%, 100%)',
            opacity: '1' // Behalte volle Sichtbarkeit bei 50%
          },
          '100%': {
            transform: 'translate(-50%, 50%)',
            opacity: '0'
          }
        }
      },
      animation: {
        'diagonal-move1': 'diagonal-move1 3s ease-in-out forwards',
        'diagonal-move2': 'diagonal-move2 5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

