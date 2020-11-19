<template>
  <div class="border-bottom">
   <base-nav-mobule-link class="container"
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
  components: {BaseNavMobuleLink},
  props:{
    /**
     * value - пропс передающий потомку
     */
    value:{},
    /**
     * nav - пропс передающий потомку
     */
    nav:{},
  }
}
</script>

<style>

</style>
