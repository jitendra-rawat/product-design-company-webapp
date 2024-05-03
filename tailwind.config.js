/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F3177',
        secondary:'#666666'
      
      },
      fontFamily:{
        'proxima':["Proxima","sans-serif"]
      }
    },
  },
  plugins: [],
}

