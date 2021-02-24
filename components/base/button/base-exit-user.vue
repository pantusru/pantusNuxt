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
    async exitUser() {
      const token = await this.$store.dispatch("User/axios/getToken");
      this.$store.commit("SetCookie", token);
      this.$cookies.set("Authorization", token);
      this.$store.commit("User/AuthorizationFalse");
      await this.$router.push({ name: "index" });
      this.$store.commit("MyOrder/SetMyOrder", []);
      this.$store.commit("Cart/CartAll/ResetCartProduct");
      this.$store.commit("User/ResetForm");
    },
  },
};
</script>
