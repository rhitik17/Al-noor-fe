/** @type {import('tailwindcss').Config} */
import colors from './src/colors'; 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        status: colors.status,
        neutral: colors.neutral,
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'], 
        geologica: ['Geologica', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
