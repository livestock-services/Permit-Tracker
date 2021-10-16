export default {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  // target: 'static',
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lsc-permit-tracker',
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
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@braid/vue-formulate/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

   // Axios module configuration (https://go.nuxtjs.dev/config-axios)
   proxy: {
    '/api/': {
      target: process.env.NUXT_ENV_NEW_API_URL,
      pathRewrite: { '^/api/': '' },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // https: true,
    baseURL: process.env.NUXT_ENV_NEW_API_URL,
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
