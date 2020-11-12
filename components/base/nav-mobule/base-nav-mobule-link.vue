<template>
  <component :is="component"
    :to="nav.to"
    class="nav-item-mobile">
    <span @click="GetMainNav(value)">
      {{ nav.text }}
    </span>
    <span class="w-100 text-right" v-if="value !== false">
      <b-icon-arrow-right></b-icon-arrow-right>
    </span>
  </component>
</template>

<script>
import mixinsNav from "@/mixins/nav-mobule/index";
export default {
  name: "base-nav-mobule-link",
  mixins: [mixinsNav],
  props:{
    nav:{
      request:true,
      type:Object,
    },
    value:{
      default: false,
      type: String|Boolean,
    },
    component:{
      default: "nuxt-link"
    }
  }
}
</script>

<style>

.nav-item-mobile {
  align-items: center;
  display: flex;
  text-decoration: none !important;
  color: #000;
  padding: 15px 0;
}
</style>
