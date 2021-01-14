<template>
  <div class="d-flex align-items-start metka-filter-product-block">
    <span class="fz-5">{{ link.name }}</span>
    <b-badge
      @click="DeleteCheck"
      variant="light"
      pill
      class="mr-1 cursor-pointer mb-3 close-mark"
      ><b-icon-x></b-icon-x>
    </b-badge>
  </div>
</template>

<script>
export default {
  props: {
    /**
     *index метки в массиве
     */
    index: {
      request: true,
    },
    /**
     *  data метки
     */
    link: {
      request: true,
      type: Object,
    },
  },
  methods: {
    /**
     * @async
     * @function DeleteCheck - Проверяет чем является метка brand или categories удаляет метку и вызывает router push
     */
    async DeleteCheck() {
      let query;
      let name;
      if (this.link.type === "brand") {
        // Это бренд
        name = "filter_brands";
        query = await this.DeleteBrand();
      } else if (this.link.type === "categories") {
        // Это категория
        name = "filter_categories";
        query = await this.DeleteCategories();
      }
      this.$store.commit("Catalog/Metks/DeleteMetks", { index: this.index });
      await this.$router.push({
        // Изменение url
        name: "search",
        query: {
          ...this.$route.query,
          page_number: undefined,
          [name]: query,
        },
      });
    },
    /**
     *  @function DeleteBrand - Удаляет Бренд с Vuex и подготавливает новый query
     * @returns query - возвращает новый query
     */
    DeleteBrand() {
      let query = this.$route.query.filter_brands.split(",");
      for (const key in query) {
        // Прогоняем Query Brand
        if (query[key] == this.link.id) {
          query.splice(key, 1);
        }
      }
      this.$store.commit("formSearch/RemoreBrandsChecked", {
        // Удаляет выбранный бренд в VUEX
        id: this.link.id,
      });
      query = this.CheckLengthQuery(query);
      return query;
    },
    /**
     * @async
     * @function DeleteCategories - Удаляет категорию с VUEX и подготавливает новый query
     * @returns query - возвращает новый query
     */
    async DeleteCategories() {
      await this.$store.dispatch("Catalog/Chexbox/ChexboxCheckAll", {
        // Найди chexbox и убрать его с фильтров
        arr: this.$store.getters["Categories/CategoriesAll/GetCategories"],
        value: false,
        id: this.link.id,
      });
      let query = await this.$store.dispatch(
        // получить новые id выбранных фильтров
        "Catalog/All/_AllChexboxId",
        this.$store.getters["Categories/CategoriesAll/GetCategories"]
      );
      query = this.CheckLengthQuery(query);
      return query;
    },
    /**
     * @param {Array} query - Массив id
     * @function CheckLengthQuery - Проверяет если ли в массиве элементы
     * @returns Возвращает undefined - массив пустой
     * @returns Возвращает query - в массиве есть элементы
     */
    CheckLengthQuery(query) {
      if (query.length === 0) {
        return undefined;
      } else {
        return query.join();
      }
    },
  },
};
</script>

<style>
.metka-filter-product-block {
  transition: all 1s;
  cursor: pointer;
}
.metka-filter-product-block:hover {
  color: #98001f;
}
</style>
