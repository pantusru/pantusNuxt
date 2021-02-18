<template>
  <b-container>
    <Vinput
      class="col-12 col-lg-3 px-0"
      :data="dataset"
      :placeholders="'Поиск по категориям'"
    />
    <base-title-catalog text="Категории" />
    <b-card-group
      columns
      class="column-count-1 column-count-sm-2 column-count-lg-4"
    >
      <Categories
        v-for="data in dataset"
        :key="data.id"
        class="mb-3"
        :dataset="data"
      />
    </b-card-group>
  </b-container>
</template>

<script>
import Categories from "@/components/catalog/categories/categories-blog-get";
import Vinput from "@/components/search/panel/input/index";
import BaseTitleCatalog from "@/components/base/title/base-title-catalog";
export default {
  components: {
    BaseTitleCatalog,
    Vinput,
    Categories,
  },
  provide() {
    return {
      SetValue: "Categories/CategoriesAll/SetCategories",
    };
  },
  async fetch({ query, store, getters, commit }) {
    await store.dispatch("Categories/CategoriesAll/_Categories");
  },
  head() {
    return {
      title: `Категории`,
      meta: [
        {
          name: "description",
          content: `Запчасти, автозапчасти, купить запчасти, каталог запчастей, интернет магазин автозапчастей, продажа запчастей, запчасти ваз, газ, камаз, маз`,
        },
        {
          name: "keywords",
          content: ``,
        },
      ],
    };
  },
  computed: {
    dataset() {
      return this.$store.getters["Categories/CategoriesAll/GetCategories"];
    },
  },
  created() {
    this.$store.dispatch("Catalog/All/_AllVisible", this.dataset);
  },
};
</script>
