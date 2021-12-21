const spacing = {};

for (let i = 1; i < 300; i++) {
  spacing[i] = `${i}px`;
}

for (let i = 1; i < 101; i++) {
  spacing[`${i}%`] = `${i}%`;
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'featured-gallery': "url('/src/assets/images/background/gallary.png')",
        cubes: "url('/src/assets/images/background/cubes.png')",
        photography: "url('/src/assets/images/background/photography.png')",
      }),
      boxShadow: {
        sm: '0 4px 4px rgba(0, 0, 0, 0.04)',
        DEFAULT:
          '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },

      borderColor: (theme) => ({
        DEFAULT: theme('#C71118', 'currentColor'),
        // secondary: '#ffed4a',
        // danger: '#e3342f',
        // gray: '#D6D6D6',
      }),

      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },

      borderRadius: {
        none: '0',
        DEFAULT: '4px',
        large: '30px',
        full: '100%',
      },

      colors: {
        black: '#000000',
        white: '#FFFFFF',
        green: 'green',

        backgroundColor: '#F2F1F1',
        border: {
          DEFAULT: '#CCCCCC',
        },

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
          lightest: '#E3E3E3',
          lighter: '#EFECEC',
          DEFAULT: '#D6D6D6',
          darkest: '#E5DDDD',
        },
        secondary: {
          DEFAULT: '#4A4949',
          dim: '#F7F7F7',
          darkest: '#262626',
          dark: '#1A1A1A',
          dim: '#999999',
          light: '#E4E4E4',
        },
      },

      fill: (theme) => ({
        DEFAULT: theme('#ffff', 'currentColor'),
        secondary: '#ffed4a',
        danger: '#e3342f',
        gray: '#D6D6D6',
      }),
      fontSize: {
        tiny: '10px',
        xsm: '12px',
        sm: '13px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        20: "20px",
        '2xl': '24px',
        heading: '33px',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      fontFamily: {
        'nunito-light': 'nunito-light',
        reg: 'nunito-regular',
        'nunito-semibold': 'nunito-semibold',
        bold: 'nunito-bold',
        'avenir-reg': 'avenir-roman',
        'avenir-800': 'avenir-black',
        'avenir-300': 'avenir-book',
      },

      height: {
        10: '10px',
        12: '12px',
        14: '14px',
        18: '18px',
        20: '20px',
        32: '32px',
        33: '33px',
        42: '42px',
        '': '',
        '': '',
        '': '',
        '': '',
      },

      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        32: '32px',
        38: '38px',
        55: '55px',
      },

      letterSpacing: {
        DEFAULT: '0.13em',
        tight: '0.09em',
        tighter: '-.05em',
        normal: '0',
        wider: '0.18em',
        widest: '.25em',
      },

      margin: {
        2: '2px',
        10: '10px',
        15: '15px',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
      },

      maxWidth: (theme, { breakpoints }) => ({
        none: 'none',
        1440: '1440px',
        460: '460px',
        '3/4': '75%',
        0: '0rem',
        187: '187px',
        370: '370px',
        312: '312px',
        270: '270px',
        420: '420px',
        484: '484px',
        548: '548px',
        sm: '500px',
        md: '400px',
        700: '700px',
        lg: '1440px',
        xl: '100px',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
        ...breakpoints(theme('screens')),
      }),

      padding: {
        2: '2px',
        10: '10px',
        15: '15px',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
      },

      spacing: {
        ...spacing,
        ...{
          _16: '-16px',
          _20: '-20px',
          _4: '-4px',
          _39: '-39px',
          370: '370px',
        },
      },
      width: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        35: '35px',
        50: '50px',
        80: '80px',
        100: '100px',
        116: '116px',
        140: '140px',
        160: '160px',
        180: '180px',
        243: '243px',
        251: '251px',
        534: '534px',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
