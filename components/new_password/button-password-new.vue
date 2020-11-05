<template>
  <b-button @click="NewsPassword">Изменить пароль</b-button>
</template>

<script>
export default {
  name: "button-password-new",
  inject: ["$v"],
  methods:{
    async NewsPassword(){
      this.$v.Form.$touch();
      if(!this.$v.Form.$error){
        let check_password =  await this.$store.dispatch("news-password/axios/_Check_Password_User",
        this.$v.Form.$model.str_password);
        if(check_password === true){
          this.$store.commit("SetFormNewsPassword" , false);
          console.log("Пароль изменен");
        }else {
          console.log("error");
          this.$store.commit("SetFormNewsPassword" , true);
        }
      }
    }
  }
}
</script>

<style>

</style>
