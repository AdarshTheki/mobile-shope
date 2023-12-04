/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-focus'],
    },
  },
  plugins: [],
};
