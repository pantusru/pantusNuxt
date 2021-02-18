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
    <product404 v-if="GetProduct.length === 0" />
  </b-container>
</template>

<script>
import ModalBuyProduct from "@/components/modal/buy-product";
// import mixin from "@/mixins/product-static/index";
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
  async asyncData({ params, store, getters, commit, query, redirect }) {
    const AllCategories = [];
    let nameCategories;
    let ParentCategories = "каталог товаров";
    const functionSearch = (data, dataset, index) => {
      let id;
      const code = data[index];
      // if(data.length)
      const result = dataset.filter(elem => elem.code === code);
      if (result.length !== 0) {
        AllCategories.push(result[0].name);
        if (data.length - 1 !== index) {
          index++;
          ParentCategories = result[0].name;
          id = functionSearch(data, result[0].children, index);
        } else if (data.length - 1 === index) {
          nameCategories = result[0].name;
          return result[0];
        }
      } else {
        redirect("/404");
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
        page_number: query?.page_number,
      });
    }
    return { nameCategories, ParentCategories, AllCategories };
    // Купить болты в категории автокрепеж - по низким ценам с доставкой
    //  Купить автокрепеж в категории каталог товаров - по низким ценам с доставкой
  },
  head() {
    return {
      title: `Купить ${this.nameCategories} в категории ${this.ParentCategories} - по низким ценам с доставкой`,
      meta: [
        {
          name: "description",
          content: `Купить ${this.nameCategories} в категории  ${this.ParentCategories}`,
        },
        {
          name: "keywords",
          content: `${this.AllCategories.join(", ")} Каталог товаров`,
        },
      ],
    };
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
