<template>
  <b-navbar-nav
    class="flex-row col-12 col-lg-7 order-4 order-lg-0 mt-2 mt-lg-0 align-items-center"
  >
  <nav-mobile-button></nav-mobile-button>
    <input
      v-model="search"
      v-on:keyup.enter="SetSearch"
      class="border-danger border-right-0 w-100 p-2 rounded-left bl-0"
      placeholder="Введите номер или название детали"
    />
    <button
      @click="SetSearch"
      class="bg-danger px-2 py-2 border-danger rounded-right text-light"
    >
      Найти
    </button>
  </b-navbar-nav>
</template>

<script>
import ResetFilter from "@/mixins/reset-filter/index";
import BaseButton from "@/components/base/base-button";
import NavMobileButton from "@/components/header/header-nav/button/nav-mobile-button";
export default {
  components: {NavMobileButton, BaseButton},
  mixins:[ResetFilter],
  computed: {
    search: {
      get() {
        return this.$store.getters["formSearch/GetSearch"];
      },
      set(value) {
        this.$store.commit("formSearch/SetSearch", value);
      },
    },
  },
  methods: {
    async SetSearch() {
      if (this.search.length != 0) {
        await this.ResetNoApplicabilitiess(false); // Поиск не удаляется
        await this.$store.commit("Applicabilities/Panel/DeleteAllPanel");
        this.$store.commit("SetcheckFilterClick", undefined);
        this.$router.push({
          name: "search",
          query: {
            name: this.search,
          },
        });
      }
      console.log({name: this.search});
    },
  },
};
</script>

<style>
</style>
