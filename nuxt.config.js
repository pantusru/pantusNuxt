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
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        const hash = to.hash.slice(1);
        const elem = document.querySelector(`[name = ${hash}]`);
        if (elem) {
          const Rect = elem.getBoundingClientRect();
          // window.location.href =
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({ x: 0, y: Rect.y });
            }, 500);
          });
        }
      }
      return { x: 0, y: 0 };
    },
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
    // title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:image",
        property: "og:image",
        content: `${process.env.pantus}/bitrix/templates/main/img/d/smallogo.png`,
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
        // "postcss-combine-media-query": {},
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
    pantus: "https://www.pantus.ru",
  },
};
