/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primaryGreen : '#00ff4e',    
        primaryRed : '#ff0000',    
        primaryBlue : '#031cff',    
      },
      fontFamily: {
        'navigo': ['navigo', 'sans-serif']
      },
  },
  },
}

