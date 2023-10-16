const defaultLightTheme = require('daisyui/src/theming/themes')[
  '[data-theme=dark]'
];
const defaultDarkTheme = require('daisyui/src/theming/themes')[
  '[data-theme=dark]'
];

export const themes = [
  // {
  //   theme1: {
  //     ...defaultLightTheme,
  //     primary: '#321714',
  //     'primary-content': '#FFFFFF',
  //     secondary: '#E0522E',
  //     accent: '#2EC4B6',
  //     neutral: '#5B6C5D',
  //     'base-100': '#FFFFFF',
  //     'base-200': '#e6e6e6'
  //   }
  // },
  // {
  //   theme2: {
  //     ...defaultLightTheme,
  //     primary: '#321714',
  //     'primary-content': '#FFFFFF',
  //     secondary: '#E0522E',
  //     accent: '#E9CE2C',
  //     neutral: '#717568',
  //     'base-100': '#FFFFFF',
  //     'base-200': '#e6e6e6',
  //     '--rounded-btn': '0rem',
  //     '--rounded-box': '0rem',
  //     '--rounded-badge': '0rem',
  //     '--tab-radius': '0rem'
  //   }
  // },

  // {
  //   theme3: {
  //     ...defaultLightTheme,
  //     primary: '#321714',
  //     'primary-content': '#FFFFFF',
  //     secondary: '#E0522E',
  //     accent: '#58A4B0',
  //     neutral: '#0C7C59',
  //     'base-100': '#FFFFFF',
  //     'base-200': '#e6e6e6',
  //     '--rounded-btn': '0rem',
  //     '--rounded-box': '0rem',
  //     '--rounded-badge': '0rem',
  //     '--tab-radius': '0rem'
  //   }
  // },
  // {
  //   theme4: {
  //     ...defaultLightTheme,
  //     primary: '#321714',
  //     'primary-content': '#FFFFFF',
  //     secondary: '#E0522E',
  //     accent: '#5448C8',
  //     neutral: '#606C38',
  //     'base-100': '#FFFFFF',
  //     'base-200': '#e6e6e6'
  //   }
  // },
  // {
  //   theme5: {
  //     primary: '#E0522E',
  //     secondary: '#E0522E',
  //     accent: '#4C86A8',
  //     neutral: '#426A5A',
  //     'base-100': '#321714',
  //     'base-200': '#472e2c'
  //   }
  // },
  {
    light: {
      ...defaultLightTheme,
      primary: '#1D232A',
      'primary-content': '#FFFFFF',
      secondary: '#E3532D',
      'secondary-content': '#1d232a',
      accent: '#ba0e07',
      'accent-content': '#1d232a',
      neutral: '#e6e6e6',
      'neutral-focus': '#1d232a',
      'neutral-content': '#1d232a',
      'base-100': '#FFFFFF',
      'base-200': '#e6e6e6',
      'base-300': '#cccccc',
      'base-content': '#1D232A',

      '--rounded-btn': '0rem',
      '--rounded-box': '0rem',
      '--rounded-badge': '0rem',
      '--tab-radius': '0rem',
    }
  },
  {
    dark: {
      ...defaultDarkTheme,
      primary: '#FFFFFF',
      'primary-content': '#1d232a',
      secondary: '#E3532D',
      'secondary-content': '#1d232a',
      accent: '#ba0e07',
      'accent-content': '#1d232a',
      neutral: '#2a323c',
      'neutral-focus': '#1d232a',
      'neutral-content': '#1d232a',
      'base-100': '#1d232a',
      'base-200': '#34393f',
      'base-300': '#14191d',
      'base-content': '#FFFFFF',

      '--rounded-btn': '0rem',
      '--rounded-box': '0rem',
      '--rounded-badge': '0rem',
      '--tab-radius': '0rem',
    }
  }
];
