<template>
  <div>
    <!--    <vueRecaptcha-->
    <!--      class="mb-4 mt-4"-->
    <!--      :get-error.sync="getError"-->
    <!--      :check-recaptcha.sync="checkRecaptcha"-->
    <!--    />-->
    <b-button class="border bg-danger" @click="SetDataUser">Изменить</b-button>
    <base-alert class="w-25" :get-alert.sync="getAlert" :routerHome="false" />
  </div>
</template>

<script>
import check_recaptcha from "@/mixins/form/check-recaptcha/index";
import vueRecaptcha from "@/components/recaptcha/index";
import BaseAlert from "@/components/alert/base-alert";
export default {
  components: {
    BaseAlert,
    // vueRecaptcha,
  },
  // mixins: [check_recaptcha],
  props: {
    $v: {},
  },
  data() {
    return {
      getAlert: false,
      variant: undefined,
      text: undefined,
    };
  },
  computed: {
    passwordCheck() {
      return this.$store.getters.GetFormPassword;
    },
    FormData() {
      return this.$store.getters["User/FormData"];
    },
  },
  destroyed() {
    this.$store.commit("SetFormApi", { data: "password", value: false });
  },
  methods: {
    async SetDataUser() {
      // Временное решение
      this.$v.$touch();
      // this.checkValidateRecaptcha();
      if (
        this.$v.Form.$error === false
        // && this.checkRecaptcha === true
      ) {
        // нет ошибок
        // await this.$axios.$get("http://localhost:3000/").then((res, req) => {
        //   this.$store.commit("SetFormApi", { data: "password", value: res });
        // if (this.passwordCheck === false) {
        const userNews = {
          // id: this.FormData.id,
          // login: this.FormData.login,
          name: this.$v.Form.$model.name,
          surname: this.$v.Form.$model.surname,
          telephone: this.$v.Form.$model.telephone,
          patronymic: this.$v.Form.$model.patronymic,
          type: this.FormData.type,
          login: this.FormData.login,
        };
        await this.$store.dispatch("User/axios/_UserUpdate", userNews);
        this.$store.commit("User/SetAll", userNews);
        this.getAlert = true;
      }
      // this.$v.Form.password.$model = "";
      // this.$v.Form.password2.$model = "";
      this.$v.Form.$reset();
      // window.grecaptcha.reset();
      // this.checkRecaptcha = false;
    },
  },
  // },
};
</script>

<style></style>
