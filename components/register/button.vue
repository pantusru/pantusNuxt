<template>
  <div class="col-4 text-center">
    <b-button @click="go" size="md" class="bg-danger border-danger">
      Зарегистрироваться
    </b-button>
    <vueRecaptcha class="mb-3 mt-3" :getError.sync="getError" :checkRecaptcha.sync="checkRecaptcha"/>
  </div>
</template>

<script>
import  check_recaptcha from  "@/mixins/Form/check-recaptcha/index"
import  vueRecaptcha from "@/components/Recaptcha/index"
export default {
  mixins:[check_recaptcha],
  components:{
    vueRecaptcha
  },
  inject: ["$v"],
  methods: {
    go() {
      this.$v.Form.$touch()
      this.checkValidateRecaptcha();
      if (this.$v.Form.$error === true ||  this.checkRecaptcha === false) {
        return;
      }else {
        this.$cookies.set("Authorization", this.$v.Form.$model.email , {
          maxAge: 60*60*24*7*365,
        });
        this.$store.commit("User/AuthorizationTrue");
        this.$router.push({name:"index"});
      }
    },
  },
};
</script>

