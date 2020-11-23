<template>
  <b-alert
    v-if="getAlert === true"
    :variant="variant"
    dismissible
    class="mt-3"
    :show="dismissCountDown"
    @dismiss-count-down="countDownChanged"
  >
    {{ text }}
  </b-alert>
</template>

<script>
export default {
  name: "base-alert",
  data() {
    return {
      /**
       * @protected Переменная которая отсчитывает время когда alert изображается
       */
      dismissCountDown: this.dismissSecs
    };
  },
  props: {
    /**
     * Внешний вид alert
     */
    variant: {
      default: "success",
      type: String
    },
    /**
     * Флаг требуется ли делать router на главную
     */
    routerHome: {
      default: true,
      type: Boolean
    },
    /**
     * Флаг когда показывать alert
     */
    getAlert: {
      default: false,
      type: Boolean
    },
    /**
     * Текст который вставлен в alert
     */
    text: {
      type: String,
      default: "Изменение прошли успешно"
    },
    /**
     *  Время жизни alert
     */
    dismissSecs: {
      default: 3,
      type: Number
    }
  },
  methods: {
    /**
     * @param dismissCountDown - Время которой alert осталось жить
     * @function countDownChanged - Функция которая  вычитает время жизни alert
     */
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      if (this.dismissCountDown === 0) {
        // Если время жизни закончилось
        if (this.routerHome === true) {
          // если нужно рендерить на главную
          this.$router.push("/");
        } else {
          // Если не надо рендерить на главную
          this.$emit("update:getAlert", false);
          this.dismissCountDown = this.dismissSecs;
        }
      }
    }
  }
};
</script>

<style></style>
