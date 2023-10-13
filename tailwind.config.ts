import type { Config } from 'tailwindcss';

const defaultDarkTheme = require('daisyui/src/theming/themes')[
  '[data-theme=dark]'
];

console.log(defaultDarkTheme);

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  daisyui: {
    themes: [
      {
        theme1: {
          primary: '#321714',
          'primary-content': '#FFFFFF',
          secondary: '#E0522E',
          accent: '#2EC4B6',
          neutral: '#5B6C5D',
          'base-100': '#FFFFFF'
        }
      },
      {
        theme2: {
          primary: '#321714',
          'primary-content': '#FFFFFF',
          secondary: '#E0522E',
          accent: '#E9CE2C',
          neutral: '#717568',
          'base-100': '#FFFFFF',
          '--rounded-btn': '0rem',
          '--rounded-box': '0rem',
          '--rounded-badge': '0rem',
          '--tab-radius': '0rem'
        }
      },

      {
        theme3: {
          primary: '#321714',
          'primary-content': '#FFFFFF',
          secondary: '#E0522E',
          accent: '#58A4B0',
          neutral: '#0C7C59',
          'base-100': '#FFFFFF',
          '--rounded-btn': '0rem',
          '--rounded-box': '0rem',
          '--rounded-badge': '0rem',
          '--tab-radius': '0rem'
        }
      },
      {
        theme4: {
          primary: '#321714',
          'primary-content': '#FFFFFF',
          secondary: '#E0522E',
          accent: '#5448C8',
          neutral: '#606C38',
          'base-100': '#FFFFFF'
        }
      },
      {
        theme5: {
          primary: '#E0522E',
          secondary: '#E0522E',
          accent: '#4C86A8',
          neutral: '#426A5A',
          'base-100': '#321714'
        }
      },
      {
        dark: {
          ...defaultDarkTheme,
          primary: '#FFFFFF',
          'primary-content': '#1d232a',
          secondary: '#FFFFFF',
          'base-100': '#1d232a',
          '--rounded-btn': '0rem',
          '--rounded-box': '0rem',
          '--rounded-badge': '0rem',
          '--tab-radius': '0rem'
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
export default config;
