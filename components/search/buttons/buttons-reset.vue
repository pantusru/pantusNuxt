<template>
  <button v-on:click.prevent="Reset" class="border link-danger">Сброс</button>
</template>

<script>
import Reset from "@/mixins/reset-filter/index";
export default {
  mixins: [Reset],
  methods: {
    //  Обнулить форму!
    async Reset(event) {
      this.ResetNoApplicabilitiess();
      console.log(event);
      if (event !== undefined) {
        console.log("Уход с страницы");
        // Проверка что это уход с страницы а не кнопка reset
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
            page_number: undefined
          }
        });
        await this.$store.dispatch(
          "Products/axios/_ProductFilterCount",
          this.$route.query
        );
      }
    }
  },
  async destroyed() {
    // Сбрасываем все конфинги при уходе из страницы
    console.log("Уход с страницы");
    await this.Reset();
    await this.$store.dispatch("Applicabilities/Panel/ResetAll");
    this.$store.commit("Products/SetCountPage", 0);
  }
};
</script>
