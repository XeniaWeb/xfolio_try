const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'hero-bg': "url('../assets/images/switz08.webp')",
                // 'hero-pattern': "url('/img/hero-pattern.svg')",
                // 'footer-texture': "url('/img/footer-texture.png')",
            },
            colors: {
                'yel': '#ffe100',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
