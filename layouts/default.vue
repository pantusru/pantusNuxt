<template>
  <div class="home">
    <b-overlay :show="show" rounded="sm">
      <!-- Спиннер для всего сайта компонент bootstrap 4 -->
      <VueHeader class="mb-5" />
      <!-- Шапка сайта -->
      <Nuxt />
      <VueFooter />
    </b-overlay>
  </div>
</template>
<script>
import VueHeader from "@/components/header/index";
import VueFooter from "@/components/footer/footer-main";
export default {
  components: {
    VueHeader,
    VueFooter,
  },
  computed: {
    show() {
      return this.$store.getters.GetshowLoader;
    },
  },
  watch: {
    // при изменения url
    $route() {
      this.$nextTick(() => {
        this.$store.commit("SetNavMobile", false); // Убрать мобильное меню
      });
    },
  },
};
</script>
<style lang="sass"></style>
