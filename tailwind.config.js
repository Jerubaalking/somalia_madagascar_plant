const colors = require('tailwindcss/colors');

module.exports = {
    important: true,
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'site-blue': '#315BA9',
                'site-green': '#42AC47',
                'site-gray' : '#F7F7F7',
                gray: colors.slate,
            },
            maxWidth: {
                'half': '50%',
              },
        },
    },
    plugins: [
        // require('@nuxtjs/tailwindcss/forms'),
        // // require('@tailwindcss/line-clamp'),
        // require('@tailwindcss/typography'),
    ],
}
