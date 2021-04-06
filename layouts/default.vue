<template>
  <div class="home">
    <SetCart />
    <!--    <b-overlay :show="show" rounded="sm" class="blog-full-content">-->
    <!-- Спиннер для всего сайта компонент bootstrap 4 -->
    <VueHeader class="mb-5" />
    <button-scroll-top />
    <!-- Шапка сайта -->
    <Nuxt />
    <VueFooter />
    <!--    </b-overlay>-->
  </div>
</template>
<script>
import VueHeader from "@/components/header/index";
import VueFooter from "@/components/footer/footer-main";
import SetCart from "@/components/modal/set-cart";
import ButtonScrollTop from "~/components/base/button/button-scroll-top";
export default {
  components: {
    SetCart,
    ButtonScrollTop,
    VueHeader,
    VueFooter,
  },
  computed: {
    show() {
      return this.$store.getters.GetshowLoader;
    },
  },
  watch: {
    $route() {
      this.$store.commit("SetNavMobile", false);
    },
  },
  async mounted() {
    await this.$store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true });
  },
};
</script>
<style lang="sass">
.blog-full-content
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
