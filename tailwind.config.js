/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Документы/Development/2Get.project/2Get/**/*.{html,js,php}"],
  darkMode: 'class',
  theme: {
    extend: {
          colors:{
            'dark':{
                'grey': '#1a1b1a',
                'blue': '#101419',
                'text':{
                    'primary': '#c9c4b7',
                    'secondary':'#9e9e9e',
                }
            },
            
            
        },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
