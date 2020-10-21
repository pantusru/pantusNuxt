<template>
  <b-navbar-nav
    class="flex-row col-12 col-lg-7 order-4 order-lg-0 mt-2 mt-lg-0 align-items-center"
  >
    <input
      v-model="search"
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
export default {
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
    SetSearch() {
      if (this.search.length != 0) {
        this.$router.push({
          name: "search",
          query: {
            ...this.$route.query,
            name: this.search,
          },
        });
      }
    },
  },
};
</script>

<style>
</style>