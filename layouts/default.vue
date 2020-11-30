<template>
  <div class="home">
    <b-overlay :show="show" rounded="sm">
      <!-- Спиннер для всего сайта компонент bootstrap 4 -->
      <VueHeader class="mb-5" />
      <!-- Шапка сайта -->
      <Nuxt v-show="NavMobule === false" />
      <VueFooter v-show="NavMobule === false" />
    </b-overlay>
  </div>
</template>
<script>
import VueHeader from "@/components/header/index";
import VueFooter from "@/components/footer/footer-main";
export default {
  components: {
    VueHeader,
    VueFooter
  },
  computed: {
    show() {
      return this.$store.getters["GetshowLoader"];
    },
    NavMobule() {
      return this.$store.getters["GetNavMobile"];
    }
  },
  mounted() {
    // при прогрузке странице
    this.$store.commit("SetShow", false);
    window.addEventListener("resize", () => {
      if (document.body.clientWidth > 992) {
        // Скрыть окно и показать контент
        if (this.NavMobule !== false) {
          // открыто окно
          this.$store.commit("SetNavMobile", false);
        }
      }
    });
  },
  watch: {
    // при изменения url
    $route() {
      this.$store.commit("SetShow", true); // Показать загрузку экрана
      this.$nextTick(() => {
        this.$store.commit("SetNavMobile", false); // Убрать мобильное меню
      });
    }
  },
  updated() {
    // при обновление страницы
    this.$store.commit("SetShow", false);
  }
};
</script>
