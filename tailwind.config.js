/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#3b82f6",
        "secondary-light": "#eff6ff",
        "secondary-darker": "#c7ced7",
        "primary-btn": "#3b82f6",
        "primary-btn-hover": "#1d4ed8",
        "black-opacity-40": "rgba(0, 0, 0, 0.40)",
        error: "#ff3333",
        "error-hover": "#cc0000",
        borderColor: {
          "black-opacity-20": "rgba(0, 0, 0, 0.20)",
        },
        copywrite: "#6B7280",
      },
      fontFamily: {
        "web-site": ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
