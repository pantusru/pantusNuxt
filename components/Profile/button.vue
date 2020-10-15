<template>
  <b-button @click="SetDataUser">Изменить</b-button>
</template>

<script>
export default {
  inject: ["$v"],
  methods: {
    SetDataUser() {
      // Временное решение
      this.$v.$touch();
      console.log(this.$v.Form.password);
      if (this.$v.Form.$error == false) { // Нет ошибок первой валидации
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
        if (false) {
            this.$v.Form["password"].$model = "";
            this.$v.Form["password2"].$model = "";
          // Пароли с БД совпали с введеным паролем
          this.$v.Form.$reset();
        } else { // Введен не правильный пароль
            this.$v.Form["password"].SameBd =  true;
        }
      }
    },
  },
};
</script>   

<style>
</style>