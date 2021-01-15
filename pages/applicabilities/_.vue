<template>
  <b-container>
      <h2>Товар приминяемости: {{ GetFilter.name }}</h2>
      <FilterTop />
    <div class="mt-3">
      <modal-buy-product />
      <FuncComponents :array="GetProduct" />
    </div>
  </b-container>
</template>

<script>
import ModalBuyProduct from "@/components/modal/buy-product";
import mixin from "@/mixins/product-static/index";
import FuncComponents from "@/components/func/product-blogs-get";
export default {
  name: "ApplicabilitiesProduct",
  components: {
    FuncComponents,
    ModalBuyProduct,
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
  },
  watch: {
    async $router() {
      const data = this.$route.params.pathMatch.split("/");
      const dataset = this.$store.getters[
        "applicabilities/applicabilitiesAll/Getapplicabilities"
      ];
      const applicabilities = this.functionSearch(data, dataset, 0);
      await this.SetProductVue(applicabilities.id, applicabilities);
    },
  },
};
</script>
