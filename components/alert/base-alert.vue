<template>
  <b-alert
    dismissible
    class="w-25 mt-3"
    @dismiss-count-down="countDownChanged"
    :show="dismissCountDown"
  >{{ text}}</b-alert
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
     * @protected Время жизни alert
     */
    text: {
      type: String,
      default: "Изменение прошли успешно"
    },
      /**
       * @protected Время жизни alert
       */
      dismissSecs:{
        default:3,
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
        if(this.dismissCountDown  === 0){
          this.$router.push("/");
        }
      },
    }
  }
</script>

<style>

</style>
