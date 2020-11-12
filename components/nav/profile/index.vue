<template>
  <b-col cols="12" lg="2">
    <b-navbar toggleable="lg" class="pl-0">
      <b-navbar-toggle target="nav-user" class="mb-3"></b-navbar-toggle>
      <b-collapse id="nav-user" is-nav>
        <div class="d-flex flex-column">
          <div class="mb-5">
            <b class="mb-3 d-block">{{ User.surname }} {{ User.name }}</b>
            <div>{{ User.login }}</div>
          </div>
          <nav>
            <nuxt-link :active-class="ActiveClass" :class="classMain" to="/profile">Личный кабинет</nuxt-link>
            <nuxt-link :active-class="ActiveClass"  :class="classMain" to="/my_orders">История заказов</nuxt-link>
            <nuxt-link :active-class="ActiveClass" :class="classMain" to="/selected">Избранные товары</nuxt-link>
            <nuxt-link :active-class="ActiveClass"  :class="classMain" to="/new_password"> Изменить пароль</nuxt-link>
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
  components: {BaseExitUser},
  data() {
    return {
      ActiveClass: "font-weight-bold text-decoration",
      classMain: "text-body mb-2 d-block",
    }
  },
  name: "NavProfile",
  computed: {
    User() {
      return this.$store.getters["User/FormData"];
    },
  },
};
</script>

