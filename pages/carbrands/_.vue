<template>
  <b-container>
    <div>
      <h2>Товар приминяемости: запчасти для а/м {{ nameArray.join(" - ") }}</h2>
      <FilterTop />
      <h2 v-if="GetProduct.length === 0" class="text-danger mt-4">
        Товар не найден
      </h2>
      <div class="mt-3 mb-3" v-if="GetProduct.length !== 0">
        <ModalImg />
        <modal-buy-product />
        <FuncComponents :array="GetProduct" />
        <BasePagination :length="getCountProducts" :limit="20" />
      </div>
      <div v-html="getGetApplicabilitiesDescription.description" />
    </div>
  </b-container>
</template>

<script>
import ModalBuyProduct from "@/components/modal/buy-product";
import mixin from "@/mixins/product-static/index";
import FuncComponents from "@/components/func/product-blogs-get";
import BasePagination from "@/components/base/pagination/base-pagination-filter";
import ModalImg from "@/components/modal/product-img";
import FilterTop from "~/components/filter-top";

export default {
  name: "ApplicabilitiesProduct",
  components: {
    FilterTop,
    FuncComponents,
    ModalBuyProduct,
    BasePagination,
    ModalImg,
  },
  mixins: [mixin],
  async asyncData({ params, store, getters, commit, query }) {
    const nameArray = [];
    const functionSearch = (data, dataset, index) => {
      let id;
      const code = data[index];
      const result = dataset.filter(elem => elem.code === code);
      if (result.length !== 0) {
        nameArray.push(result[0].name);
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
        page_number: query.page_number,
      });
      await store.dispatch(
        "Applicabilities/ApplicabilitiessAll/_ApplicabilitiesDescription",
        applicabilities.id
      );
    }
    let SeoKeywords = "";
    const StringArray = nameArray.join(" ");
    nameArray.forEach(elem => {
      SeoKeywords += `запчасти на ${elem} `;
    });
    SeoKeywords += `запчасти на ${StringArray}`;
    return { nameArray, StringArray, SeoKeywords };
  },
  head() {
    return {
      title: `Запчасти на ${this.StringArray} - купить в интернет-магазине по низким ценам`,
      meta: [
        {
          name: "description",
          content: `Купить запчасти на ${this.StringArray}, Предложения (цены) по низким ценам с доставкой по все России. Более 20 000 позиций запчастей в наличии оптом и в розницу`,
        },
        {
          name: "keywords",
          content: this.SeoKeywords,
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
    getGetApplicabilitiesDescription() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilitiesDescription"
      ];
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
