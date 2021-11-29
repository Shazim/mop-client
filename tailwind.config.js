module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      borderColor: theme => ({
        DEFAULT: theme('#e3342f', 'currentColor'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },

      fontFamily: {
        'nunito-light': 'nunito-light',
        'nunito-reg': 'nunito-regular',
        'nunito-semibold': 'nunito-semibold',
        'nunito-bold': 'nunito-bold'
      },
      width: {
        '116': "116px",
        '251': "251px",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
      },
      height: {
        '33': "33px",
        '42': "42px",
        '': "",
        '': "",
        '': "",
        '': "",
      },

      padding: {
        '15': "15px",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
      },

      margin: {
        '15': "15px",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
      },

      colors: {
        black: "#000000",
        white: "#FFFFFF",
        green: "green",
        green: "green",
        green: "green",

        primary: {
          light: '#D4B2B3',
          default: '#D26E72',
          dark: '#C71118',
        },
        pink: {
          light: '#ff7ce5',
          default: '#EEECEC',
          dark: '#D6D6D6',
        },
        default: {
          light: '#FBFBFB',
          normal: '#EEECEC',
          dark: '#D6D6D6',
        },
        secondary: "#4A4949"

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}