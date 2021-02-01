// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require("path");
export default {
  storybook: {
    addons: ["@/storybook/addon-controls", "@storybook/addon-docs"],
    stories: ["@/stories/**/*.stories.js"],
  },
  pwa: {
    manifest: {
      name: "Pantus интернет магазин",
      short_name: "Pantus",
      lang: "ru",
      useWebmanifestExtension: false,
      background_color: "#000",
      theme_color: "#000",
      // start_url: "http://test2.pantus.ru:8083/",
      icons: [
        {
          src: "/icon.png",
          type: "image/png",
          sizes: "192x192",
        },
      ],
    },
    workbox: {},
  },
  router: {
    prefetchLinks: false,
    middleware: "user",

    // extendRoutes(routes, resolve) {
    //   return [
    //     {
    //       name: 'app',
    //       path: '/app',
    //       component: resolve(__dirname, 'pages/app/index-2.vue'),
    //       meta: {
    //         test: 'asdasd'
    //       }
    //     },
    //   ]
    //
    // }
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  server: {
    port: 8000,
    host: "0.0.0.0",
  },
  head: {
    htmlAttrs: {
      lang: "ru",
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/icon.png" },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/main.css",
    "@/assets/css/reset.css",
    "@/assets/css/fonts.css",
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "./plugins/vue-slick-carousel.js" },
    { src: "./plugins/ConfingAxios.js" },
    { src: "./plugins/vuelidate.js" },
    { src: "./plugins/v-mask.js" },
    { src: "./plugins/Clipboard.js" },
    // {src:'./plugins/scroll.js'},
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/pwa"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "bootstrap-vue/nuxt",
      {
        icons: true,
      },
    ],
    // https://www.npmjs.com/package/cookie-universal-nuxt
    ["cookie-universal-nuxt"],
    "@nuxtjs/axios",
  ],
  bootstrapVue: {
    // bootstrapCSS: false, // Или `css: false`
    // bootstrapVueCSS: false, // Или` bvCSS: false`
  },
  axios: {},

  build: {
    postcss: {
      plugins: {
        "postcss-combine-media-query": {},
      },
    },
    extend(config) {
      config.resolve.alias["@img"] = path.resolve(__dirname, "assets/img");
      // config.resolve.alias['@components_Cart_Blog_blog']= path.resolve(__dirname, "components/Cart/Blog/blog");
    },
    extractCSS: true,
  },
  env: {
    api: "https://api.pantus.ru",
  },
};
