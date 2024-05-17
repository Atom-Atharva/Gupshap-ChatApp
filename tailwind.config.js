/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ffffff",
                secondary: "#3b82f6",
                "secondary-light": "#eff6ff",
                "primary-btn": "#3b82f6",
                "primary-btn-hover": "#1d4ed8",
            },
            fontFamily: {
                "web-site": ["Quicksand", "sans-serif"],
            },
        },
    },
    plugins: [],
};
