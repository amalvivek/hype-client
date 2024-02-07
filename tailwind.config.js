/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      kalam: ['Kalam', 'cursive']
    },
    extend: {
      colors: {
        primary: '#cc635c',
        semitransparent: 'rgb(0,0,0,0.2)',
        outline: 'rgba(43, 43, 43, 0.568)'
      },
      backgroundImage: {
        brain: 'linear-gradient(90deg, rgba(148, 47, 73, 255), rgba(128,31,46,255))'
      }
    }
  },
  plugins: []
}
