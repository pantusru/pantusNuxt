<template>
  <base-button @click="NewsPassword" text="Изменить пароль"> </base-button>
</template>

<script>
import BaseButton from "@/components/Base/base-button";
export default {
  name: "button-password-new",
  components: {BaseButton},
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
