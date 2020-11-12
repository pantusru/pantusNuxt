<template>
  <b-container class="position-relative">
    <b-navbar-nav class="py-1 nav-mobile pb-3 d-lg-none">
      <slot></slot>
    </b-navbar-nav>
  </b-container>
</template>

<script>
import BaseNavMobuleLink from "@/components/base/nav-mobule/base-nav-mobule-link";
export default {
  name: "base-nav-mobule",
  components: {BaseNavMobuleLink},
  props:{
    crumbs:{
      default: false,
    }
  }

}
</script>

<style>
.nav-mobile {
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  background-color: #fff;
  width: 100%;
  left: 0;
  z-index: 100;
}
</style>
