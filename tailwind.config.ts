import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            background: '#1A212C',
            appBarColor: '#23262F',
            card: '#202937',
            secondaryText: '#676D75',
            primaryText: '#DFDFE1',
        },
    },
    plugins: [],
};
export default config;
