<template>
  <component :is="component"
             :to="nav.to"
             class="nav-item-mobile">
    <div  @click="GetMainNav(value)" class="w-100 d-flex justify-content-between align-items-center cursor-pointer">
      <span>
        {{ nav.text }}
      </span>
      <span class="text-right" v-if="value !== false">
        <b-icon-caret-right-fill class="fz-5"></b-icon-caret-right-fill>
      </span>
    </div>
  </component>
</template>

<script>
import mixinsNav from "@/mixins/nav-mobule/index";

export default {
  name: "base-nav-mobule-link",
  mixins: [mixinsNav],
  props: {
    nav: {
      request: true,
      type: Object,
    },
    value: {
      default: false,
      type: String | Boolean,
    },
    component: {
      default: "nuxt-link"
    }
  },
}
</script>

<style>

.nav-item-mobile {
  /*align-items: center;*/
  display: block;
  text-decoration: none !important;
  color: #000;
  padding: 15px 0;
}
</style>
