/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        reg: ['poppins-reg', 'sans-serif'],
        med: ['poppins-med', 'sans-serif'],
        light: ['poppins-light', 'sans-serif'],
        thin: ['poppins-thin', 'sans-serif'],
        semibold: ['poppins-semi-bold', 'sans-serif'],
        bold: ['poppins-bold', 'sans-serif'],
        extrabold: ['poppins-extra-bold', 'sans-serif'],
        black: ['poppins-black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
