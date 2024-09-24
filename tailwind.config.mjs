/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wine: '#A02020',
        blue: '#5698C2',
        textColor: '#676767',
        bg: '#F2E8C9',
      },
      fontFamily: {
        orbitron: ['Orbitron'],
      },
    },
  },
  plugins: [],
};
