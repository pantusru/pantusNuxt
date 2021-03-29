<template>
  <div class="col-4 text-center">
    <b-button size="md" class="bg-danger border-danger" @click="go">
      Зарегистрироваться
    </b-button>
    <base-alert
      text="Вы успешно зарегистрировались"
      :get-alert.sync="get"
      :router-home="true"
    />
    <vueRecaptcha
      class="mb-3 mt-3"
      :get-error.sync="getError"
      :check-recaptcha.sync="checkRecaptcha"
    />
  </div>
</template>

<script>
import check_recaptcha from "@/mixins/form/check-recaptcha/index";
import vueRecaptcha from "@/components/recaptcha/index";
import BaseAlert from "@/components/alert/base-alert";
export default {
  components: {
    BaseAlert,
    vueRecaptcha,
  },
  mixins: [check_recaptcha],
  props: {
    $v: {},
    buyer: {},
  },
  data: () => ({
    get: false,
  }),
  methods: {
    async go() {
      this.$v.Form.$touch();
      this.checkValidateRecaptcha();
      if (this.$v.Form.$error === true || this.checkRecaptcha === false) {
      } else {
        const user = this.$v.Form.$model;
        user.type = this.buyer;
        const res = await this.$store.dispatch("User/axios/_UserCreate", user);
        if (res.data.error !== undefined) {
          this.$store.commit("SetFormApi", {
            data: "errorRegister",
            value: res.data.error,
          });
        } else {
          window.ym(21081355,'reachGoal','HYHdMZA3RNZ5xAtS');
          console.log("222");
          this.get = true;
          this.$store.commit("SetFormApi", {
            data: "errorRegister",
            value: undefined,
          });
        }
      }
    },
  },
};
</script>
