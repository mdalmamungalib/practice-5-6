/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#c6ddff",

          "secondary": "#06a546",

          "accent": "#0259fc",

          "neutral": "#2e2933",

          "base-100": "#28384d",

          "info": "#7b93f4",

          "success": "#80e0b3",

          "warning": "#fdb863",

          "error": "#ee8177",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

