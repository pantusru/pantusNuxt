module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "guard-for-in": 0, // check  в for hasOwnProperty -  не нужно
    "no-console": "warn", // Без консоли
    "vue/require-default-prop": 0 // require props default
  }
};
