import colors from 'tailwindcss/colors';
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx}',
    ],
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
