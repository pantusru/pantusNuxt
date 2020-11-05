<template>
  <div>
    <vueRecaptcha class="mb-4 mt-4" :getError.sync="getError" :checkRecaptcha.sync="checkRecaptcha"/>
    <b-button class="border bg-danger" @click="SetDataUser">Изменить</b-button>
    <base-alert class="w-25" :get-alert.sync="getAlert"></base-alert>
  </div>
</template>

<script>
import  check_recaptcha from "@/mixins/Form/check-recaptcha/index"
import  vueRecaptcha from  "@/components/Recaptcha/index"
import BaseAlert from "@/components/alert/base-alert";
export default {
  data() {
    return {
      getAlert: false,
      variant: undefined,
      text: undefined,
    }
  },
  mixins:[check_recaptcha],
  components:{
    BaseAlert,
    vueRecaptcha,
  },
  inject: ["$v"],
  methods:{
    async SetDataUser() {
      // Временное решение
      this.$v.$touch();
      this.checkValidateRecaptcha();
      if (this.$v.Form.$error === false &&  this.checkRecaptcha === true) {// Нету ошибок
          await this.$axios.$get("http://localhost:3000/").then((res, req) =>{
          this.$store.commit("SetFormPassword", res);
        });
         if(this.passwordCheck === false){ // нету ошибок от API
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
           this.getAlert = true;
        }
        this.$v.Form["password"].$model = "";
        this.$v.Form["password2"].$model = "";
        this.$v.Form.$reset();
        window.grecaptcha.reset();
        this.checkRecaptcha = false;
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
