<template>
  <button v-on:click.prevent="Reset" class="border link-danger">Сброс</button>
</template>

<script>
import Reset from "@/mixins/reset-filter/index";
export default {
  mixins: [Reset],
  methods: {
    //  Обнулить форму!
    Reset(event) {
      this.ResetNoApplicabilitiess();
      if (event != undefined) {
        // Проверка что это уход с страницы а не кнопка reset
        this.$router.push({
          name: "search",
          query: {
            ...this.$route.query,
            sort_type: undefined,
            sort_name: undefined,
            brand: undefined,
            categories: undefined,
            minvalue: undefined,
            maxvalue: undefined,
            name: undefined,
            page: undefined
          }
        });
      }
    }
  },
  destroyed() {
    // Сбрасываем все конфинги при уходе из страницы
    this.Reset();
  }
};
</script>
