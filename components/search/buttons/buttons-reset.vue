<template>
  <b-button v-on:click.prevent="Reset" class="_baseBnt py-1 px-2">Сбросить</b-button>
</template>

<script>
import Reset from "@/mixins/reset-filter/index";
export default {
  mixins: [Reset],
  methods: {
    //  Обнулить форму!
    async Reset(event) {
      this.$store.commit("SetcheckFilterClick", "resetAll");
      await this.ResetNoApplicabilitiess();
      await this.$router.push({
        name: "search",
        query: {
          ...this.$route.query,
          sort_type: undefined,
          sort_name: undefined,
          filter_brands: undefined,
          filter_categories: undefined,
          minvalue: undefined,
          maxvalue: undefined,
          filter_substr: undefined,
          page_number: undefined,
        },
      });
    },
  },
  async destroyed() {
    // Сбрасываем все конфинги при уходе из страницы
    console.log("Уход с страницы");
    await this.ResetNoApplicabilitiess();
    this.$store.commit("Products/SetCountPage", 0);
  },
};
</script>
