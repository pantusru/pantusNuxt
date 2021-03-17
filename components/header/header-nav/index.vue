<template>
  <div class="container">
    <b-navbar toggleable="lg" class="px-0">
      <!-- Логотип -->
      <b-navbar-brand to="/" class="logo">
        <img src="@img/logo.png" alt="Логотип сайта" >
      </b-navbar-brand>
      <!-- center -->
      <VButtonSearch />
      <!-- right   -->
      <!-- user  -->
      <b-navbar-nav
        class="d-flex ml-0 ml-lg-auto flex-row align-items-center justify-content-between nav-user"
      >
        <div class="d-flex mr-2 align-items-center">
          <!-- icons -->
          <div class="icons-nav-w20 mr-3 mr-lg-0">
            <img
              class="d-none d-lg-block"
              src="@img/icons/icon-avatar.png"
              alt="Иконка пользователя"
            />
            <nuxt-link v-if="CheckUser === true" to="profile">
              <img
                class="d-block d-lg-none"
                src="@img/icons/icon-avatar.png"
                alt="Иконка пользователя"
              />
            </nuxt-link>
            <nuxt-link v-if="CheckUser === false" v-b-modal.authorization to="">
              <img
                class="d-block d-lg-none"
                src="@img/icons/icon-avatar.png"
                alt="Иконка пользователя"
              />
            </nuxt-link>
          </div>
          <!--data user -->
          <div
            v-if="CheckUser === false"
            class="d-none d-sm-flex flex-column ml-1 fz-5"
          >
            <span v-b-modal.authorization class="text-secondary link-danger">
              Вход
            </span>
            <nuxt-link to="/register" class="text-secondary link-danger fz-5">
              Регистрация
            </nuxt-link>
          </div>
          <div v-if="CheckUser === true" class="d-lg-block d-none">
            <NavUser :user-surname="User.surname" :user-name="User.name" />
          </div>
        </div>
        <!-- user -->
        <!-- Корзина-->
        <nuxt-link
          to="/cart"
          class="d-flex align-items-center link-decoration-none d-block d-md-none"
        >
          <div class="icons-nav-w20">
            <img src="@img/icons/icon-shopping-cart.png" alt="icon-shopping" >
          </div>
          <div class="d-flex flex-column text-secondary pl-10px">
            <div class="d-lg-block d-none fz-5 w-100 justify-content-end">
              <span>Корзина</span><b v-if="GetLength">: {{ GetLength }}</b>
            </div>
            <strong v-if="stoimost != 0.0" class="fz-5 d-lg-block d-none"
              >{{ stoimost }} р
            </strong>
          </div>
        </nuxt-link>

<!--        <b-nav-item-dropdown-->
<!--          :menu-class="'border-0'"-->
<!--          class="position-relative d-none d-md-block"-->
<!--          no-caret-->
<!--          d-none-->
<!--          d-md-table-->
<!--        >-->
<!--          <b-dropdown-item href="#">EN</b-dropdown-item>-->
<!--          <template #button-content>-->
            <nuxt-link to="/cart" class="d-none d-md-flex align-items-center link-decoration-none ">
              <div class="icons-nav-w20">
                <img
                  src="@img/icons/icon-shopping-cart.png"
                  alt="icon-shopping"
                />
              </div>
              <div class="d-flex flex-column text-secondary pl-10px">
                <div class="d-lg-block d-none fz-5 w-100 justify-content-end link-ec0e1d">
                  <span>Корзина</span><b v-if="GetLength">: {{ GetLength }}</b>
                </div>
                <strong v-if="stoimost != 0.0" class="fz-5 d-lg-block d-none"
                  >{{ stoimost }} р</strong
                >
              </div>
            </nuxt-link>
<!--          </template>-->
          <!--          <dropdown-cart />-->
<!--        </b-nav-item-dropdown>-->
        <!-- Корзина-->
      </b-navbar-nav>
    </b-navbar>
    <ModalAuthorization />
  </div>
</template>

<script>
import VButtonSearch from "@/components/header/header-button-search";
import NavUser from "@/components/header/dropdown/nav-user";
import ModalAuthorization from "@/components/modal/authorization";
import DropdownCart from "@/components/header/dropdown/dropdown-cart";

export default {
  name: "NavIndex",
  components: {
    DropdownCart,
    ModalAuthorization,
    NavUser,
    VButtonSearch,
  },
  data() {
    return {
      getDropCart: false,
    };
  },
  computed: {
    User() {
      return this.$store.getters["User/FormData"];
    },
    CheckUser() {
      return this.$store.getters["User/CheckUser"];
    },
    stoimost() {
      return this.$store.getters["Cart/CartAll/GetSymmaAll"];
    },
    GetLength() {
      return this.$store.getters["Cart/CartAll/GetLength"];
    },
  },
  methods: {
    ToggleBodyFunction() {},
  },
};
</script>
<style>
.logo {
  min-width: 120px;
}
.nav-user {
  flex: 0 0 auto;
}
</style>
