export default {
  props: {
    request: {},
    placeholder: {},
    maxlength: {},
    /***
     * Название элемента который проверяется в $v
     */
    name: {},
    /**
     * Текст который является label в input
     */
    items: {},
    /**
     * Массив ошибок для отображения
     */
    error: {},
    /**
     * type input
     */
    type: {
      default: "text",
    },
    /**
     * маска для input
     */
    Vmask: {
      default: null,
    },
    /***
     * Состояния валидация для условия отображения ошибок
     */
    $v: {},
  },
};
