module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "guard-for-in": "warn", // проверка в for hasOwnProperty -  не нужно
    "no-console": "warn", // Без консоли
    "vue/require-default-prop": "warn", // обязательное значение props default
    "vue/require-valid-default-prop": "warn", // Валидное значение по умолчанию
    "vue/name-property-casing": ["warn", "kebab-case"],
    "vue/comment-directive": [
      "error",
      {
        reportUnusedDisableDirectives: false,
      },
    ],
    "vue/custom-event-name-casing": "warn", // написание emit
    "vue/no-arrow-functions-in-watch": "warn", // Запрет писать стрелочные функции в watch
    "vue/no-async-in-computed-properties": "warn", //Запрет писать асинхронные функции в computed
    "vue/no-dupe-keys": "warn", // Запретит дублирование название
    "vue/no-dupe-v-else-if": "warn", // Запрет использовать однотипные/ повторяющие условиях в if and else-if
    "vue/no-duplicate-attributes": "warn", // Запретить дублирование атрибутов
    "vue/no-mutating-props": "warn", // Запретить мутацию компонентных пропсов
    "vue/no-reserved-keys": "warn", // Запретить переписать зарезервированные ключи
    "vue/no-shared-component-data": "warn", // Заставить свойство данных компонента быть функцией
    "vue/no-template-key": "warn", //Запретить template свойства key
    "vue/no-textarea-mustache": "warn", // Запретить в textarea вставлять текст в тело а не в model
    "vue/no-unused-components": "warn", //Запретить регистрацию компонентов, которые не используются внутри шаблонов
    "vue/no-unused-vars": "warn", //Запретить неиспользуемые определения переменных для директив v-for или атрибутов области видимости
    "vue/no-use-v-if-with-v-for": "warn", //Запретить использование v-if для того же элемента, что и v-for
    "vue / require-component-is": "warn", //Требуют v-bind:is от <component>элементов
    "vue/require-prop-type-constructor": "warn", //Требовать, чтобы тип опоры был конструктором
    "vue/require-render-return": "warn", //Заставить функцию рендеринга всегда возвращать значение
    "vue/require-v-for-key": "warn", // Требовать v-bind:key с v-for директивами
    "vue/return-in-computed-property": "warn", //Обеспечить наличие оператора возврата в вычисляемом свойстве
    "vue/valid-template-root": "warn", //Принудительно применить действительный корень шаблона и запрет отсутсвие корневого элемента
    "vue/valid-v-bind": "warn", //Обеспечить соблюдение действующих v-bind директив
    "vue/valid-v-else-if": "warn", //Обеспечить соблюдение действующих v-else-if директив
    "vue/valid-v-else": "warn", // Обеспечить соблюдение действующих v-else директив
    "vue/no-multiple-template-root": "warn", // для VUE 2 обязательно иметь 1 корневой элемент
    "vue/attribute-hyphenation": ["warn", "always"], //Применять стиль именования атрибутов для пользовательских компонентов в шаблоне always через дефис
    "vue/component-definition-name-casing": ["warn", "kebab-case"], //Принудительно применять конкретный регистр для имени определения компонента
    "vue/html-closing-bracket-spacing": [
      "warn",
      { startTag: "never", endTag: "never", selfClosingTag: "always" },
    ], //Требовать или запрещать использование пробела перед закрывающими скобками тега
    "vue/html-end-tags": "warn", //запретить отсутствие закрывающих тегов.
  },
};
