<template>
  <div class="col-4 text-center">
    <b-button size="md" class="bg-danger border-danger" @click="go">
      Зарегистрироваться
    </b-button>
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
export default {
  components: {
    vueRecaptcha,
  },
  mixins: [check_recaptcha],
  props: {
    $v: {},
    buyer: {},
  },
  methods: {
    go() {
      this.$v.Form.$touch();
      this.checkValidateRecaptcha();
      if (this.$v.Form.$error === true || this.checkRecaptcha === false) {
      } else {
        // this.$cookies.set("Authorization", this.$v.Form.$model.email, {
        //   maxAge: 60 * 60 * 24 * 7 * 365,
        // });
        // this.$store.commit("User/AuthorizationTrue");
        const user = this.$v.Form.$model;
        user.type = this.buyer;
        this.$store.dispatch("User/axios/_UserCreate", user);
      }
    },
  },
};
</script>
