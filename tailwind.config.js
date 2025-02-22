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
        'bg-gallery':
          "url('/src/assets/images/background/galleryBackground.png')",
        'home-mobile':
          "url('/src/assets/images/background/home-mobile-bg.png')",
        'gallery-mobile':
          "url('/src/assets/images/background/gallery-mobile-bg.png')",
        'gofree-mobile':
          "url('/src/assets/images/background/gofree-mobile-bg.png')",
        'background-gallery':
          "url('/src/assets/images/background/bgGallery.png')",
        cubes: "url('/src/assets/images/background/cubes.png')",
        photography: "url('/src/assets/images/background/photography.png')",
      }),

      backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',

        'left-top-50': 'left top 50%',
        'left-top-80': 'left top 80%',
        'left-bottom': 'left bottom',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-4': 'right top 40px',
        'right-80': 'right top 80%',
        'right-50': 'right top 50%',
        'right-40': 'right top 40%',
        'right-45': 'right top 45%',
        'right-47': 'right top 47%',
        'right-30': 'right top 30%',
        'right-35': 'right top 35%',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 1rem',
      },

      boxShadow: {
        sm: '0 4px 4px rgba(0, 0, 0, 0.04)',
        DEFAULT: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 7px 0px 0px rgba(0, 0, 0, 0.3)',
        '4xl': '-477px 0 0 470px #c71118',
        '5xl': '-772px 0 0 772px #4A4949',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },

      borderColor: (theme) => ({
        DEFAULT: theme('#C71118', 'currentColor'),
        black: '#cccccc',
        brown: '#473326',
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
        sm: '5px',
        lg: '9px',
        8: '8px',
        xl: '15px',
        large: '30px',
        '50%': '50%',
        full: '100%',
      },

      colors: {
        black: '#000000',
        gradient: '#989998',
        white: '#FFFFFF',
        offwhite: '#F2F1F1',
        green: 'green',

        // backgroundColor: '#E5E5E5',

        instagram: '#C32AA3',
        facebook: '#3B5998',

        border: {
          DEFAULT: '#CCCCCC',
          light: '#DEDEDE',
        },

        primary: {
          dim: '#D26E72',
          light: '#D4B2B3',
          lighter: '#F2F1F1',
          DEFAULT: '#C71118',
          'layout-background': 'rgb(242, 241, 241,0.75)',
        },
        pink: {
          DEFAULT: '#EEECEC',
          light: '#ff7ce5',
        },
        gray: {
          dim: '#EEECEC',
          light: '#FBFBFB',
          lightest: '#E3E3E3',
          lighter: '#EFECEC',
          DEFAULT: '#D6D6D6',
          dark: '#E5E5E5',
          darker: '#c4c4c4',
          darkest: '#E5DDDD',
          800: '#E2E2E2',
        },
        secondary: {
          DEFAULT: '#4A4949',
          dim: '#F7F7F7',
          darkest: '#262626',
          dark: '#1A1A1A',
          lighter: '#999999',
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
        6: '6px',
        7: '7px',
        8: '8px',
        tiny: '10px',
        11: '11px',
        xsm: '12px',
        sm: '13px',
        base: '14px',
        15: '15px',
        lg: '16px',
        xl: '18px',
        20: '20px',
        22: '22px',
        '2xl': '24px',
        heading: '33px',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },

      fontFamily: {
        'nunito-light': 'nunito-light',
        reg: 'nunito-regular',
        'nunito-semibold': 'nunito-semibold',
        'nunito-bold': 'nunito-bold',
        bold: 'nunito-bold',
        'avenir-reg': 'avenir-roman',
        'avenir-800': 'avenir-black',
        'avenir-300': 'avenir-book',
      },

      height: {
        330: '330px',
        578: '578px',
        661: '661px',
        1015: '1015px',
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
        15: '15px',
        18: '18px',
        20: '20px',
        22: '22px',
        30: '30px',
        32: '32px',
        35: '35px',
        38: '38px',
        50: '50px',
        54: '54px',
        55: '55px',
        60: '60px',
      },

      letterSpacing: {
        DEFAULT: '0.13em',
        tightest: '0.03em',
        tight: '0.09em',
        tighter: '-.05em',
        normal: '0',
        wider: '0.18em',
        widest: '.25em',
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

      minWidth: {
        36: '36px',
      },

      screens: {
        xsm: [{ min: '0px', max: '459px' }],
        sm: [{ min: '0px', max: '959px' }],
        tab: [{ min: '801px', max: '959px' }],
        md: [{ min: '960px', max: '1023px' }],
        lg: [{ min: '1024px', max: '1080px' }],
        xl: [{ min: '1081px', max: '1280px' }],
        '2xl': [{ min: '960px' }],
        '3xl': [{ max: '1440px' }],
      },

      spacing: {
        ...spacing,
        ...{
          _16: '-16px',
          _20: '-20px',
          _5: '-5px',
          _4: '-4px',
          _20: '-20px',
          _29: '-29px',
          _39: '-39px',
          370: '370px',
          318: '318px',
          312: '312px',
          303: '303px',
          375: '375px',
          491: '491px',
          468: '468px',
          483: '483px',
          '96vh': '96vh',
          '90vw': '90vw',
          '100vh': '100vh',
          1240: '1240px',
          777: '777px',
        },
      },
      width: {
        340: '340px',
        379: '379px',
        455: '455px',
        534: '534px',
        568: '568px',
      },
      zIndex: {
        1: '1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
