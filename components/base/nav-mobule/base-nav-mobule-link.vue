<template>
  <component
    :is="component"
    :to="nav.to"
    class="nav-item-mobile d-flex justify-content-between"
  >
    <span class="cursor-pointer" @click="GetMainNav(value)">{{
      nav.text
    }}</span>
    <template v-if="value !== false">
      <b-icon-caret-right-fill
        v-if="flag === 'right'"
        class="fz-5 d-block"
      ></b-icon-caret-right-fill>
      <b-icon-caret-left-fill
        v-if="flag === 'left'"
        class="fz-5"
      ></b-icon-caret-left-fill>
    </template>
  </component>
</template>

<script>
export default {
  name: "base-nav-mobule-link",
  props: {
    /***
     * сторона стрелки в ссылках которые открывают другое окно right|left
     */
    flag: {
      default: "right",
      validator: value => {
        return ["right", "left"].includes(value) !== false;
      },
      type: String,
    },
    /**
     * Информация для ссылки [to,text]
     */
    nav: {
      request: true,
      type: Object,
    },
    /**
     * value - какое модальное окно открыть при клике на ссылку или компонент
     */
    value: {
      default: false,
      type: String | Boolean,
    },
    /***
     * component -  чем является элемент ссылка или другое
     */
    component: {
      default: "nuxt-link",
      type: String,
    },
  },
  methods: {
    GetMainNav(name) {
      this.$store.commit("SetNavMobile", name);
    },
  },
};
</script>

<style>
.nav-item-mobile {
  /*align-items: center;*/
  display: block;
  text-decoration: none !important;
  color: #000;
  padding: 10px 15px;
}
</style>
