import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sml: "500px",
            ...defaultTheme.screens,
        },
        container: {
            center: true,
            screens: {
                "2xl": "1340px",
            },
        },
        extend: {
            colors: {
                white: {
                    100: "#FFFFFF",
                    200: "#F4F3EE",
                },
                purple: {
                    100: "#755f8c",
                    200: "#6C5585",
                },
                black: {
                    100: "#323333",
                    200: "#1C1F1F",
                    300: "#121313",
                },
            },
            fontFamily: {
                helvetica: ["var(--font-helvetica)", "sans"],
                prata: ["var(--font-prata)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
