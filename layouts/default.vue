<template>
  <div class="home">
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
import ButtonScrollTop from "~/components/base/button/button-scroll-top";
export default {
  components: {
    ButtonScrollTop,
    VueHeader,
    VueFooter,
  },
  computed: {
    show() {
      return this.$store.getters.GetshowLoader;
    },
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
