/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: 'dgs-ui-kit-',
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@dgshahr/dg-theme-tailwind-plugin')],
};
