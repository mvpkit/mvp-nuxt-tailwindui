export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  server: {
    host: 'localhost',
    port: 3012
  },

  env: {
    PROXY_API_URL: process.env.PROXY_API_URL
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mvp-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/clientInit.js',
    '@/plugins/dayjs.js',
    '@/plugins/mixins.js',
    '@/plugins/portal.js',
    '@/plugins/axios.js',
    "@/plugins/directives.js",
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-svg-loader'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.PROXY_API_URL,
    credentials: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  router: {
    middleware: ['login']
  }
}
