/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                pink: {
                    light: '#C59DD2',
                    base: '#7D298A',
                    dark: '#3F0F41',
                    low: '#9547A5',
                },
                blue: {
                    light: '#73B6D2',
                    base: '#2374A4',
                    mid: '#144A72',
                    dark: '#08233C',
                    low: '#358BB9',
                },
                shape: {
                    stroke: '#002347',
                    hover: '#001933',
                    base: '#000F1F',
                    background: '#00050A',
                },
                text: {
                    title: '#F8FBFB',
                    body: '#E2E7E9',
                    label: '#BAC6C9',
                },
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
            },
        },
    },
    plugins: [],
}