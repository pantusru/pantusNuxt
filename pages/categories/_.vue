<template>
  <b-container>
    <ModalImg />
    <div v-if="GetProduct.length !== 0">
      <h2>Товар категории: {{ GetFilter.name }}</h2>
      <FilterTop />
      <div class="mt-3">
        <modal-buy-product />
        <FuncComponents :array="GetProduct" />
        <BasePagination :length="getCountProducts" :limit="20" />
      </div>
    </div>
    <h2 v-else class="text-danger">Товар не найден</h2>
  </b-container>
</template>

<script>
import ModalBuyProduct from "@/components/modal/buy-product";
import mixin from "@/mixins/product-static/index";
import FuncComponents from "@/components/func/product-blogs-get";
import BasePagination from "@/components/base/pagination/base-pagination-filter";
import FilterTop from "~/components/filter-top";
import ModalImg from "~/components/modal/product-img";

export default {
  name: "CategoriesProduct",
  components: {
    FilterTop,
    FuncComponents,
    ModalBuyProduct,
    BasePagination,
    ModalImg,
  },
  mixins: [mixin],
  async fetch({ params, store, getters, commit }) {
    const functionSearch = (data, dataset, index) => {
      let id;
      const code = data[index];
      const result = dataset.filter(elem => elem.code === code);
      if (result.length !== 0) {
        if (data.length - 1 !== index) {
          index++;
          id = functionSearch(data, result[0].children, index);
        } else if (data.length - 1 === index) {
          return result[0];
        }
      }
      return id;
    };
    await store.dispatch("Categories/CategoriesAll/_Categories");
    const data = params.pathMatch.split("/");
    const dataset = store.getters["Categories/CategoriesAll/GetCategories"];
    const categories = await functionSearch(data, dataset, 0);
    if (categories) {
      store.commit("product-static/SetFilter", categories);
      await store.dispatch("product-static/RequestProduct", {
        filter_categories: categories.id,
        page_number: this.$route?.query?.page_number,
      });
    }
  },
  computed: {
    GetFilter() {
      return this.$store.getters["product-static/getFilter"];
    },
    GetProduct() {
      return this.$store.getters["product-static/getProduct"];
    },
    getCountProducts() {
      return this.$store.getters["product-static/getCountProducts"];
    },
  },
  watch: {
    async $route() {
      console.log("Изменения");
      const data = this.$route.params.pathMatch.split("/");
      const dataset = this.$store.getters[
        "Categories/CategoriesAll/GetCategories"
      ];
      const categories = this.functionSearch(data, dataset, 0);
      await this.SetProductVue(categories.id, categories);
      window.scrollTo(0, 0);
    },
  },
};
</script>
