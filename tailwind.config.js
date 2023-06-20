/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'ssw-red': '#CC4141',
      'ssw-black': '#333333',
      'ssw-grey': '#797979',
      'ssw-light-grey': '#AAAAAA', 
    },
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
}

