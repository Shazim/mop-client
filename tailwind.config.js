const spacing = {};

for (let i = 1; i < 101; i++) {
  spacing[i] = `${i}px`;
  spacing[`${i}%`] = `${i}%`;
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },

      borderColor: theme => ({
        DEFAULT: theme('#C71118', 'currentColor'),
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'gray': '#D6D6D6'
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

      borderRadius: {
        'none': '0',
        DEFAULT: '4px',
        'large': '30px',
        'full': '100%',
      },

      colors: {
        black: "#000000",
        white: "#FFFFFF",
        green: "green",
        green: "green",
        green: "green",

        primary: {
          dim: '#D26E72',
          light: '#D4B2B3',
          DEFAULT: '#C71118',
        },
        pink: {
          DEFAULT: '#EEECEC',
          light: '#ff7ce5',
          dark: '#D6D6D6',
        },
        gray: {
          dim: '#EEECEC',
          light: '#FBFBFB',
          DEFAULT: '#D6D6D6',
        },
        secondary: {
          DEFAULT: "#4A4949",
          dark: "#1A1A1A",
          dim: "#999999",
          light: "#E4E4E4"
        }

      },
      fontSize: {
        'tiny': '10px',
        'xsm': '12px',
        'sm': '13px',
        'base': '14px',
        'lg': '16px',
        'xl': '18px',
        '2xl': '24px',
        'heading': '33px',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '13': '13px',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      fontFamily: {
        'light': 'nunito-light',
        'reg': 'nunito-regular',
        'medium': 'nunito-semibold',
        'bold': 'nunito-bold'
      },

      height: {
        '10': "10px",
        '12': "12px",
        '14': "14px",
        '18': "18px",
        '20': "20px",
        '32': "32px",
        '33': "33px",
        '42': "42px",
        '': "",
        '': "",
        '': "",
        '': "",
      },

      letterSpacing: {
        DEFAULT: '0.13em',
        tighter: '-.05em',
        normal: '0',
        wider: '0.18em',
        widest: '.25em',
      },

      margin: {
        '2': "2px",
        '10': "10px",
        '15': "15px",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
      },

      padding: {
        '2': "2px",
        '10': "10px",
        '15': "15px",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
      },

      spacing: { ...spacing, ...{} },
      width: {
        '10': "10px",
        '12': "12px",
        '14': "14px",
        '16': "16px",
        '18': "18px",
        '20': "20px",
        '35': "35px",
        '50': "50px",
        '80': "80px",
        '100': "100px",
        '116': "116px",
        '140': "140px",
        '160': "160px",
        '180': "180px",
        '243': "243px",
        '251': "251px",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}