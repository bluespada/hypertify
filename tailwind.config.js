/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}",
        "./index.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [ require("daisyui") ],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")[
                    "[data-theme=dark]"
                ],
                    secondary: "#151036",
                    primary: "#1f1666",
                    "base-100": "#0F0E15",
                    "base-200": "#1A1A21",
                    "base-300": "#242424",

                },
            },
        ],
        darkTheme: "class",
        base: true,
        logs: false,
    },
}

