<template>
  <div>
    <base-button @click="NewsPassword" text="Изменить пароль"></base-button>
    <base-alert
      text="Пароль изменен успешно"
      class="w-25"
      :get-alert="getAlert"
    ></base-alert>
  </div>
</template>

<script>
import BaseButton from "@/components/base/button/base-button";
import BaseAlert from "@/components/alert/base-alert";

export default {
  name: "button-password-new",
  components: { BaseAlert, BaseButton },
  props: {
    $v: {},
  },
  data() {
    return {
      getAlert: false,
    };
  },
  methods: {
    ResetForm() {
      this.$store.commit("SetFormApi", { data: "new_password", value: false });
      this.$v.Form.$model.password2 = "";
      this.$v.Form.$model.password = "";
      this.$v.Form.$model.str_password = "";
      this.$v.Form.$reset();
    },
    async NewsPassword() {
      console.log(this.$v.Form);
      this.$v.Form.$touch();
      if (!this.$v.Form.$error) {
        // нет ошибок от валидации
        const checkPassword = await this.$store.dispatch(
          "news-password/axios/_Check_Password_User",
          this.$v.Form.$model.str_password
        );
        if (checkPassword === true) {
          // пароль совпадает
          this.ResetForm();
          this.getAlert = true;
        } else {
          // Пароль не совпадает
          this.$store.commit("SetFormApi", {
            data: "new_password",
            value: true,
          });
        }
      }
    },
  },
};
</script>

<style></style>
