<template>
  <b-col cols="12" lg="2">
    <b-navbar toggleable="lg" class="pl-0">
      <b-navbar-toggle target="nav-user" class="mb-3" />
      <b-collapse id="nav-user" is-nav>
        <div class="d-flex flex-column">
          <div class="mb-5">
            <b class="mb-3 d-block">{{ User.surname }} {{ User.name }}</b>
            <div>{{ User.login }}</div>
          </div>
          <nav>
            <nuxt-link
              :exact-active-class="ActiveClass"
              :class="classMain"
              to="/profile/"
              >Личный кабинет</nuxt-link
            >
            <nuxt-link
              :exact-active-class="ActiveClass"
              :class="classMain"
              to="/profile/orders"
              >История заказов</nuxt-link
            >
            <nuxt-link
              :exact-active-class="ActiveClass"
              :class="classMain"
              to="/profile/selected"
              >Избранные товары</nuxt-link
            >
            <nuxt-link
              :exact-active-class="ActiveClass"
              :class="classMain"
              to="/profile/new_password"
            >
              Изменить пароль</nuxt-link
            >
            <base-exit-user
              components="div"
              class="cursor-pointer"
              :class="classMain"
            />
          </nav>
        </div>
      </b-collapse>
    </b-navbar>
  </b-col>
</template>

<script>
import BaseExitUser from "@/components/base/button/base-exit-user";
export default {
  name: "NavProfile",
  components: { BaseExitUser },
  data() {
    return {
      ActiveClass: "active",
      classMain: "profile_nav-link text-436174",
    };
  },
  computed: {
    User() {
      return this.$store.getters["User/FormData"];
    },
  },
};
</script>
<style lang="sass">
@import "assets/sass/profile/profile-nav"
</style>
