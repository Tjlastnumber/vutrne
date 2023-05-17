const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js,vue}' ],
  theme: {
    colors: {
      current: 'currentColor',
      ...colors,
      light: {
        DEFAULT: '#ffffff',
        primary: 'rgba(0, 0, 0, .87)',
        secondary: 'rgba(0, 0, 0, .54)',
        active: 'rgba(0, 0, 0, .05)',
        hover: 'rgba(0, 0, 0, .03)',
        disabled: 'rgba(0, 0, 0, .10)'
      },
      dark: {
        DEFAULT: '#202020',
        primary: 'rgba(255, 255, 255, .87)',
        secondary: 'rgba(255, 255, 255, .70)',
        active: 'rgba(255, 255, 255, .22)',
        hover: 'rgba(255, 255, 255, .17)',
        disabled: 'rgba(255, 255, 255, .10)'
      },
      primary: {
        light: colors.emerald[600],
        DEFAULT: colors.emerald[500],
        dark: colors.emerald[400],
        hover: colors.emerald[300],
        active: colors.emerald[200]
      },
      secondary: {
        DEFAULT: colors.neutral[700]
      },
      disabled: {
        DEFAULT: colors.neutral[300]
      }
    }
  },
  plugins: []
}
