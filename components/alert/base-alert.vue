<template>
  <b-alert
    :variant="variant"
    v-if="getAlert === true"
    dismissible
    class="mt-3"
    @dismiss-count-down="countDownChanged"
    :show="dismissCountDown"
  >{{ text }}
  </b-alert
  >
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
    }
  },
  props: {
    /**
     * Внешний вид alert
     */
    variant: {
      default: "success",
    },
    /**
     * Флаг требуется ли делать router на главную
     */
    routerHome: {
      default: true,
      type: Boolean,
    },
    /**
     * Флаг когда показывать alert
     */
    getAlert: {
      default: false,
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
      type: Number,
    },
  },
  methods: {
    /**
     * @param dismissCountDown - Время которой alert осталось жить
     * @function countDownChanged - Функция которая  вычитает время жизни alert
     */
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      if (this.dismissCountDown === 0) { // Если время жизни закончилось
        if (this.routerHome === true) {// если нужно рендерить на главную
          this.$router.push("/");
        } else { // Если не надо рендерить на главную
          this.$emit("update:getAlert", false);
          this.dismissCountDown = this.dismissSecs;
        }
      }
    },
  }
}
</script>

<style>

</style>
