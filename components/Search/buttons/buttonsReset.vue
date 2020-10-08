<template>
  <button v-on:click.prevent="Reset" class="border link-danger">Сброс</button>
</template>

<script>
export default {
  methods: {
    //  Обнулить форму!
    Reset(event) {
      // CHECKED ХРАНИТСЯ в VUEX с ДАННЫМИ
      this.$store.dispatch(
        "Catalog/All/_AllChexbox",
        this.$store.getters["Categories/CategoriesAll/GetCategories"]
      );
      this.$store.dispatch(
        "Catalog/All/_AllChexbox",
        this.$store.getters[
          "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
        ]
      );
      // ОТДЕЛЬНЫЙ ФАЙЛ VUEX С CHECKED
      this.$store.commit("formSearch/SetMaxValue", 60000);
      this.$store.commit("formSearch/SetMinValue", 0);
      this.$store.commit("formSearch/SetAllBrandsChecked", []);
      this.$store.commit("formSearch/SetSort", { SortType: "", SortName: "" });
      if (event != undefined) {
        // Проверка что это уход с страницы а не кнопка reset
        this.$router.push({
          name: "search",
          query: {
            ...this.$route.query,
            sort_type: undefined,
            sort_name: undefined,
            brand: undefined,
            categories:undefined,
          },
        });
      }
      //
    },
  },
  destroyed() {
    // Сбрасываем все конфинги при уходе из страницы
    this.Reset();
  },
};
</script>



