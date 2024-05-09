/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:
      {
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",


      }
    },
  },
  fontFamily:
  {
    nunito:['Nunito Sans', 'sans-serif'] 
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  
}

