<template>
  <b-container>
    <div v-if="GetProduct.length !== 0">
      <h2>Товар приминяемости: {{ GetFilter.name }}</h2>
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

export default {
  name: "ApplicabilitiesProduct",
  components: {
    FuncComponents,
    ModalBuyProduct,
    BasePagination,
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
    await store.dispatch(
      "Applicabilities/ApplicabilitiessAll/_Applicabilitiess"
    );
    const data = params.pathMatch.split("/");
    const dataset =
      store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"];
    const applicabilities = await functionSearch(data, dataset, 0);
    if (applicabilities) {
      store.commit("product-static/SetFilter", applicabilities);
      await store.dispatch("product-static/RequestProduct", {
        filter_applicabilities: applicabilities.id,
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
      const data = this.$route.params.pathMatch.split("/");
      const dataset = this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
      ];
      const applicabilities = this.functionSearch(data, dataset, 0);
      await this.SetProductVue(applicabilities.id, applicabilities);
      window.scrollTo(0, 0);
    },
  },
};
</script>
