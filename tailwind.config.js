/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(166,255,0,1)',
        'neo-hover': '8px 8px 0px 0px rgba(166,255,0,1)',
        'neo-dark': '4px 4px 0px 0px rgba(255,255,255,1)',
        'neo-dark-hover': '8px 8px 0px 0px rgba(255,255,255,1)',
      },
      colors: {
        brand: '#A6FF00'
      }
    },
  },
  plugins: [],
};
