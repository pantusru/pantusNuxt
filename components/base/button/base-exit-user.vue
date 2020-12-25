<template>
  <component :is="components" @click="exitUser"> Выход </component>
</template>

<script>
export default {
  name: "BaseExitUser",
  props: {
    /***
     * Компонент в котором обвернется функция выход из аккаунта
     */
    components: {
      request: true,
      type: String,
    },
  },
  methods: {
    /**
     * @function  exitUser - Выход user из аккаунта
     */
    exitUser() {
      this.$store.commit("User/ResetForm");
      this.$store.commit("User/AuthorizationFalse");
      this.$cookies.remove("Authorization");
      this.$store.commit("Cart/CartAll/ResetCartProduct");
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style></style>
