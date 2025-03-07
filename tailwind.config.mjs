/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorphic': '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
        'neumorphic-hover': 'inset 5px 5px 10px rgba(0, 0, 0, 0.2), inset -5px -5px 10px rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
      },
      animation: {
        'bounce-y': 'bounceY 2s infinite ease-in',
        'circle': 'circle 5s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)', easing: 'ease-in' },
          '50%': { transform: 'translateY(-10px)' ,easing: 'ease-in'},
        },
        circle: {
          '0%': { transform: 'rotate(0deg) translateX(128px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(128px) rotate(-360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },


      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        logobtbcolor: "#FE7A36",
        // logobtbcolor: "#EB5B00",
        buttonColor:"#083819"
      },
    },
  },
  plugins: [],
};
