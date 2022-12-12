/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        app: {
          dark: {
            button: "#203059",
            hover: "#131a2a",
            tokenSelect: "#293249",
            swap: '#0d111c'
          }
        }
      },
      textColor: {
        app: {
          dark: {
            button: "#487ced",
          }
        }
      },
      borderColor: {
        app: {
          dark: {
            DEFAULT: "#1b2236",
          }
        }
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
