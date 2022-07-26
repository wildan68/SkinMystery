export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'SkinMystery',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
        ]
    },

    // SVG Loader
    svgLoader: {
        svgoConfig: {
            plugins: [
                { prefixIds: false } // Disables prefixing for SVG IDs
            ]
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/main.css',
        '~/assets/css/custom_swiper.css',
    ],
    // SCSS
    styleResources: {
        scss: []
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/swiper.js', ssr: false },
        { src: '~/plugins/system.js' },
        { src: '~/plugins/skeleton.js', ssr: false },
        { src: '~/plugins/imageZoom.js', ssr: false },
        { src: '~/plugins/rating.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/postcss8',
        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        'nuxt-svg-loader',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            name: 'SkinMystery App',
            lang: 'en',
            useWebmanifestExtension: false
        },
        workbox: {
            runtimeCaching: [{
                urlPattern: 'https://sm.wildan.host/.*',
                strategyOptions: {
                    cacheName: 'our-cache',
                },
                strategyPlugins: [{
                    use: 'Expiration',
                    config: {
                        maxEntries: 10,
                        maxAgeSeconds: 300
                    }
                }]
            }]
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
        extractCSS: {
            allChunks: true
        },
    }
}