const defaultLightTheme = require('daisyui/src/theming/themes')[
  '[data-theme=dark]'
];
const defaultDarkTheme = require('daisyui/src/theming/themes')[
  '[data-theme=dark]'
];

export const themes = [
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
      'base-300': '#1D232A',
      'base-content': '#1D232A',

      '--rounded-btn': '0rem',
      '--rounded-box': '0rem',
      '--rounded-badge': '0rem',
      '--tab-radius': '0rem'
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
      '--tab-radius': '0rem'
    }
  }
];
