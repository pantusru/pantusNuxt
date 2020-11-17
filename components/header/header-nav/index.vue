<template>
  <div class="container">
    <b-navbar toggleable="lg" class="px-0">
      <!-- Логотип -->
      <b-navbar-brand to="/" class="logo"
      ><img src="@img/logo.png" alt="Логотип сайта"
      /></b-navbar-brand>
      <!-- center -->
      <VButtonSearch/>
      <!-- right   -->
      <!-- user  -->
      <b-navbar-nav class="d-flex ml-0 ml-lg-auto flex-row align-items-center">
        <div class="d-flex mr-2 align-items-center wm-60">
          <!-- icons -->
          <div class="icons-nav-w20">
            <img class="d-none d-lg-block"
              src="@img/icons/icon-avatar.png"
              alt="Иконка пользователя"
            />
            <nuxt-link to="profile" v-if="CheckUser === true">
              <img class="d-block d-lg-none"
                   src="@img/icons/icon-avatar.png"
                   alt="Иконка пользователя"
              />
            </nuxt-link>
            <nuxt-link to="" v-b-modal.authorization v-if="CheckUser === false">
              <img class="d-block d-lg-none"
                   src="@img/icons/icon-avatar.png"
                   alt="Иконка пользователя"
              />
            </nuxt-link>
          </div>
          <!--data user -->
          <div class="d-none d-sm-flex flex-column ml-1 fz-5" v-if="CheckUser === false">
            <nuxt-link
              to=""
              v-b-modal.authorization
              class="text-secondary link-danger">
                Вход
            </nuxt-link>
            <nuxt-link to="/register" class="text-secondary link-danger fz-5"
            >Регистрация
            </nuxt-link
            >
          </div>
          <div class="d-lg-block  d-none" v-if="CheckUser === true">
            <NavUser :userName="User.surname + ' ' + User.name"/>
          </div>
        </div>
        <!-- user -->
        <!-- Корзина-->
        <div
          class="position-relative"
          @mouseenter="getDropCart = true"
          @mouseleave="getDropCart =false"
        >
          <nuxt-link
            to="/cart"
            class="d-flex align-items-center link-decoration-none"
          >
            <div
              class="icons-nav-w20"
            >
              <img src="@img/icons/icon-shopping-cart.png" alt=""/>
            </div>
            <div class="d-flex flex-column text-secondary pl-10px">
              <div class="d-lg-block  d-none fz-5 ">
                <span>Корзина</span><b v-if="GetLength">: {{ GetLength }}</b>
              </div>
              <strong class="fz-5 d-lg-block  d-none" v-if="stoimost !== 0">{{ stoimost }} р</strong>
            </div>
          </nuxt-link>
          <dropdown-cart v-if="getDropCart"></dropdown-cart>
        </div>
        <!-- Корзина-->
      </b-navbar-nav>
    </b-navbar>
    <ModalAuthorization/>
  </div>
</template>

<script>
import VButtonSearch from "@/components/header/header-button-search"
import VueDropdown from "@/components/header/dropdown/navbottom";
import NavUser from "@/components/header/dropdown/nav-user";
import ModalAuthorization from "@/components/modal/authorization";
import DropdownCart from "@/components/header/dropdown/dropdown-cart";

export default {
  name: "NavIndex",
  data() {
    return {
      getDropCart: false,
    }
  },
  components: {
    DropdownCart,
    ModalAuthorization,
    NavUser,
    VueDropdown,
    VButtonSearch
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
};
</script>
<style>
.logo{
  min-width: 120px;
}
</style>
