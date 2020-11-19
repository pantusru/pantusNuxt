<template>
  <div>
    <vueRecaptcha
      sitekey="6LdMI94ZAAAAADQt2xBdUxgnhr0QpnezUwkcqiHV"
      :loadRecaptchaScript="true"
      @verify="registerTrue"
    >
    </vueRecaptcha >
    <p class="error mt-2 mb-0" v-if="getError === true">{{ textError }}  </p>
  </div>
</template>
<script>
import vueRecaptcha from 'vue-recaptcha';
export default {
  props:{
    getError: {
      type: Boolean,
      required: true,
    },
    checkRecaptcha:{
      type: Boolean,
      required: true,
    },
    textError:{
      type: String,
      default: "Пройдите капчу"
    }
  },
  components:{
    vueRecaptcha,
  },
  methods:{
    registerTrue(){
     this.$emit("update:checkRecaptcha", true);
     this.$emit("update:getError", false);
    }
  },
}
</script>
