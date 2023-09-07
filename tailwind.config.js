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
          "primary": "#39fe77",
          "secondary": "#472fdb",
          "accent": "#c084fc",
          "neutral": "#26212c",
          "base-100": "#0f1125",
          "info": "#22d3ee",
          "success": "#84cc16",
          "warning": "#facc15",
          "error": "#eb2431",

          "--rounded-btn": "2rem",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

