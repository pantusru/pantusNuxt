<template>
  <b-nav-item-dropdown
    tabindex="-1"
    center
    no-caret
    toggle-class="text-body link-danger font-weight-bold fz-5 px-0 w-100"
  >
    <!-- Using 'button-content' slot -->
    <template slot="button-content">
      <b-icon-justify></b-icon-justify>
      <em>Все запчасти</em>
    </template>
    <b-dropdown-item :to="data.to" v-for="data in links" :key="data.id">{{
      data.text
    }}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { to: "/catalog", text: "Автокаталоги" },
        { to: "/brands", text: "Бренды запчастей" },
        { to: "/carbrands", text: "Марки автомобилей" },
        { to: "/categories", text: "Категории запчастей" },
        { to: "/search?filter_categories=434,517", text: "Масло  и автохимия" },
        { to: "/search?filter_categories=515", text: "Антифризы, толосы" },
      ],
    };
  },
};
</script>
