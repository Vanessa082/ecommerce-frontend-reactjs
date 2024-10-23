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
          "primary": "#8B4513",
          "secondary": "#ffaa00",
          "accent": "#3E3E3E",
        },
      },
    ],
  },
  theme: {
    backgroundImage: {
      "hero-banner": "linear-gradient(#0000000f, #0000000f), url('./img/hero-banner.png')",
      "formal-women":"url('./img/formal-w.png')",
      "formal-men":"url('./img/formal-m.png')",
      "formal-casual":"url('./img/casual.png')"
    },
    extend: {
      fontFamily: {
        "playfair": ["Playfair Display SC", "serif"],
        "lato": ["Lato", "sans-serif"]
      },
      colors: {
        app: {
          orange: {
            900: "#FA4A0C"
          },
          blue: {
            900: "#252B42"
          },
          grey: {
            400: "#B6B6B6",
            500: "#E4E4E4",
            900: "#737373"
          }
        }
      },
      fontSize: {
        xl: '1rem'
      },
      spacing: {
        "app-w": "var(--app-w)",
      },
      screens: {
        'md-lg': { 'min': '768px', 'max': '1024px' },
      }
    },
  },
  plugins: [
    daisyui
  ],
}
