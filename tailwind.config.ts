import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: '#000000', // Default black color
                    100: '#000319',     // Custom black-100 shade
                },
                
            },
        },
    },
    plugins: [],
};

export default config;