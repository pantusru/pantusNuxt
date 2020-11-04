<template>
  <b-col cols="12" lg="2">
    <b-navbar toggleable="lg" class="pl-0">
      <b-navbar-toggle target="nav-user" class="mb-3"></b-navbar-toggle>
      <b-collapse id="nav-user" is-nav>
        <div class="d-flex flex-column">
          <div class="mb-4">
            <div class="mb-2">{{ User.surname }} {{ User.name }}</div>
            <div>{{ User.login }}</div>
          </div>
          <nuxt-link to="/profile">Личный кабинет</nuxt-link>
          <nuxt-link to="/my_orders">История заказов</nuxt-link>
          <nuxt-link to="/selected">Избранные товары</nuxt-link>
          <nuxt-link to="/new_password"> Изменить пароль</nuxt-link>
        </div>
      </b-collapse>
    </b-navbar>
  </b-col>
</template>

<script>
export default {
  name: "NavProfile",
  computed: {
    User() {
      return this.$store.getters["User/FormData"];
    },
  },
};
</script>

