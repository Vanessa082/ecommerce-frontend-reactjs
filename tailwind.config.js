import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FA4A0C",
          "secondary": "#ffaa00",
          "accent": "#252B42",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        app: {
          orange: {
            900: "#FA4A0C"
          },
          blue: {
            900: "#252B42"
          },
          grey: {
            900: "#737373"
          }
        }
      },
      fontSize: {
        xl: '1rem'
      }
    },
  },
  plugins: [
    daisyui
  ],
}
