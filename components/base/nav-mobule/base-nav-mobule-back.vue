<!-- Верхняя часть Выпадающего меню из header для мобильных устройств   -->
<template>
  <div class="border-bottom">
    <base-nav-mobule-link
      class="container"
      :value="value"
      :nav="nav"
      component="div"
      flag="left"
    />
  </div>
</template>

<script>
import BaseNavMobuleLink from "@/components/base/nav-mobule/base-nav-mobule-link";
export default {
  name: "base-nav-mobule-back",
  components: { BaseNavMobuleLink },
  props: {
    /**
     * value - пропс передающий потомку
     */
    value: {
      default: false,
      type: String | Boolean
    },
    /**
     * nav - пропс передающий потомку
     */
    nav: {
      request: true,
      type: Object
    }
  }
};
</script>

<style></style>
