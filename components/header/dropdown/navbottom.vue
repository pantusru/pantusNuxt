<template>
  <b-nav-item-dropdown
    tabindex="-1"
    center
    no-caret
    :toggle-class="[
      { 'dropdown-menu-color': isDropDown },
      'text-body link-danger font-weight-bold fz-5 px-0 w-100',
    ]"
    @shown="isDropDown = true"
    @hidden="isDropDown = false"
  >
    <!-- Using 'button-content' slot -->
    <template slot="button-content">
      <b-icon-justify />
      <b>Все запчасти</b>
    </template>
    <b-dropdown-item
      v-for="data in links"
      :key="data.id"
      :link-class="'fz-5_5'"
      :to="data.to"
      >{{ data.text }}</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>

<script>
export default {
  data() {
    return {
      isDropDown: false,
      links: [
        { to: "/catalog/originalpartscatalog", text: "Автокаталоги" },
        { to: "/brands", text: "Бренды запчастей" },
        { to: "/carbrands", text: "Марки автомобилей" },
        { to: "/categories", text: "Категории запчастей" },
        { to: "/search?filter_categories=434,517", text: "Масло  и автохимия" },
        { to: "/search?filter_categories=515", text: "Антифризы, тосолы" },
      ],
    };
  },
};
</script>

<style>
.dropdown-menu-color {
  color: #e1002b !important;
}
</style>
