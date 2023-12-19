import type { Config } from 'tailwindcss';
import { themes } from './theme/index'

const config: Config = {
  // theme: {
    extend: {
      screens: {
        '3xl': '1792px'
      }
    },
  // },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  daisyui: {
    themes
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
export default config;
