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
    backgroundImage: {
      "hero-banner": "linear-gradient(#000000af, #000000af), url('./img/hero-banner.png')",
      "download-banner": "linear-gradient(#252B420f, #252B420f), url('./img/download-banner.png')"
    },
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
            500:"#E4E4E4",
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
