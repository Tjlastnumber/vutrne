const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js,vue}' ],
  theme: {
    colors: {
      current: 'currentColor',
      ...colors,
      light: {
        DEFAULT: '#EEEEEE',
        primary: 'rgba(0, 0, 0, .87)',
        secondary: 'rgba(0, 0, 0, .54)',
        disabled: 'rgba(0, 0, 0, .10)'
      },
      dark: {
        DEFAULT: '#212121',
        primary: 'rgba(255, 255, 255, .87)',
        secondary: 'rgba(255, 255, 255, .70)',
        disabled: 'rgba(255, 255, 255, .10)',
        hover: 'rgba(0, 0, 0, .90)'
      },
      primary: {
        light: colors.black,
        DEFAULT: colors.emerald[500],
        dark: colors.white
      },
      secondary: {
        DEFAULT: colors.neutral[700],
        dark: colors.neutral[600]
      },
      disabled: {
        DEFAULT: colors.neutral[300]
      }
    }
  },
  plugins: []
}
