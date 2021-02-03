<template>
  <b-nav-item-dropdown
    id="my-nav-user"
    no-caret
    :text="userName"
    toggle-class="nav-link-custom fz-5 my-nav-user"
    center
  >
    <b-dropdown-item
      v-for="data in links"
      :key="data.id"
      class="fz-5"
      :to="data.to"
      >{{ data.text }}</b-dropdown-item
    >
    <base-exit-user components="b-dropdown-item" class="fz-5" />
  </b-nav-item-dropdown>
</template>

<script>
import BaseExitUser from "@/components/base/button/base-exit-user";

export default {
  components: { BaseExitUser },
  props: {
    userName: {
      type: String,
    },
  },
  data() {
    return {
      links: [
        { to: "/profile", text: "Личный кабинет" },
        { to: "/profile/orders", text: "История заказов" },
        { to: "/profile/selected", text: "Избранные товары" },
        { to: "/profile/new_password", text: "Изменить пароль" },
      ],
    };
  },
  methods: {
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
<style>
.my-nav-user {
  white-space: normal;
}
</style>
