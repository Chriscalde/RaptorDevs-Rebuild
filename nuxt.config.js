export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Raptor Devs',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/fonts/roboto.css',
        'boxicons/css/boxicons.min.css'
    ],
    target: 'static',
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxt/image'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        ['nuxt-i18n', {
            locales: [{
                    name: 'Español',
                    code: 'es',
                    iso: 'es-MX',
                    file: 'es.json'
                },
                {
                    name: 'English',
                    code: 'en',
                    iso: 'en-US',
                    file: 'en.json'
                }
            ],
            langDir: 'lang/',
            defaultLocale: 'en',
        }],
        '@nuxt/image'
    ],
    image:{

    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}