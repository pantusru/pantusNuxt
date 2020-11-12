<template>
  <component :is="components" @click="exitUser">
      Выход
  </component>
</template>

<script>
export default {
name: "base-exit-user",
  methods:{
    exitUser(){
      this.$store.commit("User/ResetForm");
      this.$store.commit("User/AuthorizationFalse");
      this.$cookies.remove("Authorization");
      this.$router.push({name:"index"});

    },
  },
  props:{
    components:{
      request:true,
    }
  }
}
</script>

<style>

</style>
