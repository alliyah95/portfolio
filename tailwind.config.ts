import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                "2xl": "1440px",
            },
        },
        extend: {
            colors: {
                white: {
                    100: "#FFFFFF",
                    200: "#F4F3EE",
                },
                purple: {
                    100: "#836B9C",
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
