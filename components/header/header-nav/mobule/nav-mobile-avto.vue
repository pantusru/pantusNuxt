<template>
  <div v-if="NavMobile === 'catalog'">
    <base-nav-mobule-back value="main" :nav="{ text: 'Главная' }" />
    <BaseNavMobile>
      <base-nav-mobule-link
        :value="dataset.value"
        :component="dataset.components"
        :nav="dataset.data"
        v-for="dataset in nav"
        :key="dataset.id"
      />
    </BaseNavMobile>
  </div>
</template>

<script>
import mixinsNav from "@/mixins/nav-mobule/index";
import BaseNavMobile from "@/components/base/nav-mobule/base-nav-mobule";
import BaseNavMobuleLink from "@/components/base/nav-mobule/base-nav-mobule-link";
import BaseNavMobuleBack from "@/components/base/nav-mobule/base-nav-mobule-back";

export default {
  name: "nav-mobile-avto",
  components: { BaseNavMobuleBack, BaseNavMobuleLink, BaseNavMobile },
  mixins: [mixinsNav],
  data() {
    return {
      nav: [
        { data: { text: "Марки автомобилей", to: "/applicabilities" } },
        { data: { text: "Производители запчастей", to: "/brands" } },
        { data: { text: "Категории запчастей", to: "/categories" } },
        { data: { text: "Масла и автохимия", to: "/" } },
        { data: { text: "Антифризы, тосолы", to: "/" } },
        { data: { text: "Онлайн-каталоги", to: "/" } }
      ]
    };
  }
};
</script>

<style></style>
