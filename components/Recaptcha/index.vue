<template>
  <vueRecaptcha
    sitekey="6LdMI94ZAAAAADQt2xBdUxgnhr0QpnezUwkcqiHV"
    :loadRecaptchaScript="true"
    @verify="registerTrue"
  >
  </vueRecaptcha>
</template>
<script>
import vueRecaptcha from 'vue-recaptcha';
export default {
  data() {
    return {
      check: false,
    }
  },
  components:{
    vueRecaptcha,
  },
  methods:{
    registerTrue(){
      console.log("Успех");
     this.check = true;
    }

  }
}
</script>
