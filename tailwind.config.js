/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#cc635c',
        semitransparent: 'rgb(0,0,0,0.4)',
        outline: 'rgba(43, 43, 43, 0.568)'
      },
      backgroundImage: {
        brain: 'radial-gradient(rgba(231,140,141,255), rgba(128,31,46,255))'
      }
    }
  },
  plugins: []
}
