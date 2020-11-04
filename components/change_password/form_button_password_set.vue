<template>
  <div>
    <b-button class="border-0 bg-danger" @click="SetPassword">Подвердить</b-button>
    <base-alert v-if="getAlert" :text="text"> </base-alert>
  </div>
</template>

<script>
import BaseAlert from "@/components/alert/base-alert";

export default {
  data() {
    return {
      text: "Пароль успешно изменен!",
      getAlert: false,
    }
  },
  name: "form_button_password_set",
  components: {BaseAlert},
  inject: ["$v"],
  methods: {
    SetPassword() {
      this.$v.Form.$touch();
      if (this.$v.$error === false) {
        console.log(this.$v.Form.$model.password) // передать к API
        console.log(this.$route.query.check_user);
        console.log("Запрос на изменение");
        // Вывести алерт
        if (false){ // Все гуд
          this.getAlert = true;
        }else { // error
          this.text = "Ошибка"
          this.getAlert = true;

        }
      }
    },
  }
}
</script>


