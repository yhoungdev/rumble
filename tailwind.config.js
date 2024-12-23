/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      colors: {
        primary: {
          100: "#FF1100",
          200: "#FAC02F", 
          300: "#3D141C",
          400: "#228AD6",
          500: "#F7A928",

        }, 
   

      }, 
     
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '.5rem',
          lg: '.5rem',
          xl: '1rem',
          '2xl': '4rem',
        },
      },
    },
  },
  plugins: [],
}
