<!-- Выпадающее меню из header для мобильных устройств  -->
<template>
  <b-container class="position-relative">
    <b-navbar-nav class="py-1 nav-mobile pb-3 d-lg-none">
      <slot name="header" />
      <base-nav-mobule-link
        v-for="dataset in link"
        :key="dataset.id"
        :value="dataset.value"
        :component="dataset.components"
        :nav="dataset.data"
      />
      <slot name="footer" />
    </b-navbar-nav>
  </b-container>
</template>

<script>
import BaseNavMobuleLink from "@/components/base/nav-mobule/base-nav-mobule-link";
export default {
  name: "base-nav-mobule",
  components: { BaseNavMobuleLink },
  props: {
    link: {
      type: Array,
      request: true,
    },
  },
  mounted() {
    document.body.classList.add("overflow-hidden");
  },
  destroyed() {
    document.body.classList.remove("overflow-hidden");
  },
  // components: { BaseNavMobuleLink }
};
</script>

<style>
.nav-mobile {
  position: absolute;
  background-color: #fff;
  width: 100%;
  left: 0;
  z-index: 100;
}
body.overflow-hidden {
  overflow: hidden;
}
</style>
