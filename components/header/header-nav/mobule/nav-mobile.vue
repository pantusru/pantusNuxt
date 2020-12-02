<template>
  <base-nav-mobule v-if="NavMobile === 'main'">
    <base-nav-mobule-link
      :value="dataset.value"
      :component="dataset.components"
      :nav="dataset.data"
      v-for="dataset in nav"
      :key="dataset.id"
    />
    <div class="px-15px">
      <b class="nav-mobile-link-tfl d-block">
        <a href="tel:88005558721" class="text-515151"> 8 (800) 555-87-21 </a>
      </b>
      <span class="nav-mobile-text-tfl"> Звонок по РФ - бесплатный </span>
    </div>
  </base-nav-mobule>
</template>

<script>
import mixinsNav from "@/mixins/nav-mobule/index";
import BaseNavMobule from "@/components/base/nav-mobule/base-nav-mobule";
import BaseNavMobuleLink from "@/components/base/nav-mobule/base-nav-mobule-link";

export default {
  name: "nav-mobile",
  components: { BaseNavMobuleLink, BaseNavMobule },
  mixins: [mixinsNav],
  data() {
    return {
      nav: [
        { data: { text: "Автозапчасти" }, components: "div", value: "catalog" },
        { data: { text: "О компании", to: "" } },
        { data: { text: "Новости", to: "" } },
        { data: { text: "Помощь", to: "" } },
        { data: { text: "Контакты", to: "" } },
        { data: { text: "Новинки", to: "" } },
      ],
    };
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
