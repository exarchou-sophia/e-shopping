/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {},
    },
    plugins: ["daisyui"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: colors.cyan["600"],
                    secondary: colors.slate["500"],
                    accent: colors.amber["600"],
                    neutral: colors.stone["300"],
                },
            },
        ],
    },
}
