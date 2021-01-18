<template>
  <div class="home">
    <b-overlay :show="show" rounded="sm">
      <!-- Спиннер для всего сайта компонент bootstrap 4 -->
      <VueHeader class="mb-5" v-if="visible"/>
      <!-- Шапка сайта -->
      <Nuxt />
      <VueFooter v-if="visible"/>
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
  data(){
    return{
      visible: true,
    }
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

        // отрефакторишь, то что тут внизу, самое оптимальное в роутере задавать
        // страницам которые должны быть чистые свойство,
        // например blank: true, чекать тут и делать visible true or false
        // ссылка где я описал что нужно
        // https://ru.stackoverflow.com/questions/1231751/nuxt-js-%d0%94%d0%be%d0%b1%d0%b0%d0%b2%d0%b8%d1%82%d1%8c-%d1%81%d0%b2%d0%be%d1%91-%d0%bc%d0%b5%d1%82%d0%b0-%d1%81%d0%b2%d0%be%d0%b9%d1%81%d1%82%d0%b2%d0%be-%d0%b2-%d0%be%d0%b4%d0%b8%d0%bd-%d0%ba%d0%be%d0%bd%d0%ba%d1%80%d0%b5%d1%82%d0%bd%d1%8b%d0%b9-%d1%80%d0%be%d1%83%d1%82%d0%b5%d1%80
        // а пока по-тупому this.$route.path === '/app' || this.$route.path === '/app2' || this.$route.path === '/app3' и тд.
        this.setStateVisible();
      });
    },
  },

  created() {
    this.setStateVisible();
  },

  methods: {
    setStateVisible(){
      this.$route.path === '/app' ? this.visible = false : this.visible = true
    }
  },

};
</script>
<style lang="sass"></style>
