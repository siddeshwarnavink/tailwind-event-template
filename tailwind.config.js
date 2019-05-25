const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lt: colors.blue[300],
          md: colors.blue[500],
          dk: colors.blue[700],
        },
        secondary: {
          lt: colors.red[300],
          md: colors.red[500],
          dk: colors.red[700],
        },
        tertiary: {
          lt: colors.purple[300],
          md: colors.purple[500],
          dk: colors.purple[700],
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
