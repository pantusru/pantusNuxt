<template>
  <base-nav-mobule v-if="NavMobile === 'main'" :link="nav">
    <template #footer>
      <div class="px-15px">
        <b class="nav-mobile-link-tfl d-block">
          <a href="tel:88005558721" class="text-515151"> 8 (800) 555-87-21 </a>
        </b>
        <span class="nav-mobile-text-tfl"> Звонок по РФ - бесплатный </span>
      </div>
    </template>
  </base-nav-mobule>
</template>

<script>
import mixinsNav from "@/mixins/nav-mobule/index";
import BaseNavMobule from "@/components/base/nav-mobule/base-nav-mobule";

export default {
  name: "NavMobile",
  components: { BaseNavMobule },
  mixins: [mixinsNav],
  data() {
    return {
      nav: [
        { data: { text: "Автозапчасти" }, components: "div", value: "catalog" },
        { data: { text: "О компании", to: "/about" }, components: "div", value: "about" },
        { data: { text: "Мобильное приложение", to: "/app" } },
        { data: { text: "Новости", to: "/news" } },
        { data: { text: "Помощь", to: "/help" } },
        { data: { text: "Контакты", to: "/contacts" } },
        // { data: { text: "Новинки", to: "" } },
      ],
    };
  },
  computed: {
    NavMobile() {
      return this.$store.getters.GetNavMobile;
    },
  },
};
</script>

<style>
.nav-mobile-link-tfl {
  font-size: 22px;
}

.nav-mobile-blog-tlf {
  background: #eee;
}

.nav-mobile-text-tfl {
}
</style>
