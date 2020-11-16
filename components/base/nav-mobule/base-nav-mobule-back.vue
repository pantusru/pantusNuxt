<template>
  <div class="border-bottom w-100vw">
   <base-nav-mobule-link
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
    value:{},
    nav:{},
  }
}
</script>

<style>

</style>
