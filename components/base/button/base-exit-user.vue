<template>
  <component :is="components" @click="exitUser">
      Выход
  </component>
</template>

<script>
export default {
name: "base-exit-user",
  methods:{
    /**
     * @function  exitUser - Выход user из аккаунта
     */
    exitUser(){
      this.$store.commit("User/ResetForm");
      this.$store.commit("User/AuthorizationFalse");
      this.$cookies.remove("Authorization");
      this.$router.push({name:"index"});

    },
  },
  props:{
    /***
     * Компонент в котором обвернется функция выход из аккаунта
     */
    components:{
      request:true,
    }
  }
}
</script>

<style>

</style>
