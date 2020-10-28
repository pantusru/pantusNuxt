<template>
  <div>
    <b-button @click="SetDataUser">Изменить</b-button>
    <b-alert
      dismissible
      class="w-25 mt-3"
      @dismiss-count-down="countDownChanged"
      :show="dismissCountDown"
      
      >Изменение прошли успешно</b-alert
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      /**
       * @private Время жизни alert
       */
      dismissSecs: 5,
      /**
       * @private Переменная которая отсчитывает время когда alert изображается
       */
      dismissCountDown: 0,
    }
  },
  inject: ["$v"],
  methods: {
    /**
     * @param dismissCountDown - Время которой alert осталось жить
     * @function countDownChanged - Функция которая  вычитает время жизни alert
     */
     countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    async SetDataUser() {
      // Временное решение
      this.$v.$touch();
      // this.$v.Form.password.apiCheck = await this.ResApi()
      console.log( this.$v.Form.password);

      if (this.$v.Form.$error == false) {// Нету ошибок
        await this.$axios.$get("http://localhost:3000/").then((res, req) =>{
          this.$store.commit("SetFormPassword", res);
        });
        if(this.passwordCheck == false){ // нету ошибок от API
                 // Нет ошибок первой валидации
          // Проверка данных с API
          // ВРЕМЕННОЕ РЕШЕНИЕ БАН!
          this.$store.commit("User/SetFull", {
            name: "login",
            value: this.$v.Form.$model.login,
          });
          this.$store.commit("User/SetFull", {
            name: "name",
            value: this.$v.Form.$model.name,
          });
          this.$store.commit("User/SetFull", {
            name: "surname",
            value: this.$v.Form.$model.surname,
          });
          this.$store.commit("User/SetFull", {
            name: "telephone",
            value: this.$v.Form.$model.telephone,
          });
          this.$store.commit("User/SetFull", {
            name: "patronymic",
            value: this.$v.Form.$model.patronymic,
          });
          // ВРЕМЕННОЕ РЕШЕНИЕ БАН!
          this.$v.Form["password"].$model = "";
          this.$v.Form["password2"].$model = "";
          this.$v.Form.$reset();
          this.dismissCountDown = this.dismissSecs 
        }
      }
    },
  },
  computed:{
    passwordCheck(){
      return this.$store.getters["GetFormPassword"];
    }
  },
  destroyed(){
    this.$store.commit("SetFormPassword", false);
  }
};
</script>   

<style>
</style>