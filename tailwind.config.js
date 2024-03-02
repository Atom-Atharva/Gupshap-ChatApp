/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                chakraPetch: ["Chakra Petch, roboto-slab"],
                macondo: ["Macondo, cursive"],
                dancingScript: ["Dancing Script, cursive"],
                kalam: ["Kalam, cursive"],
            },
        },
    },
    plugins: [],
};
