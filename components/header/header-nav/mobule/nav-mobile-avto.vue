<template>
  <div v-if="NavMobile === 'catalog'">
    <BaseNavMobile :link="nav">
      <template #header>
        <base-nav-mobule-back value="main" :nav="{ text: 'Главная' }" />
      </template>
    </BaseNavMobile>
  </div>
</template>

<script>
import BaseNavMobile from "@/components/base/nav-mobule/base-nav-mobule";
import BaseNavMobuleBack from "@/components/base/nav-mobule/base-nav-mobule-back";

export default {
  name: "nav-mobile-avto",
  components: { BaseNavMobuleBack, BaseNavMobile },
  data() {
    return {
      nav: [
        { data: { text: "Марки автомобилей", to: "/carbrands" } },
        { data: { text: "Производители запчастей", to: "/brands" } },
        { data: { text: "Категории запчастей", to: "/categories" } },
        { data: { text: "Масла и автохимия", to: "/" } },
        { data: { text: "Антифризы, тосолы", to: "/" } },
        { data: { text: "Онлайн-каталоги", to: "/" } },
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

<style></style>
