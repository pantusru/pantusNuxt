<template>
  <section class="mt-5">
    <ModalImg />
    <ModalBuy />
    <div class="container">
      <FilterApplicabilities />
      <b-row>
        <b-col cols="12" lg="3" class="mb-lg-0 mb-3">
          <FilterForm />
        </b-col>
        <b-col lg="9">
          <MetkaFilter />
          <b-table-simple
            class="text-center fz-5_5"
            v-if="componentsName != 'TableProduct'"
          >
            <PanelVid class="panelProductFilter mb-0" />
          </b-table-simple>
          <!-- Для ПК ВЕРСИИ -->
          <div class="d-none d-lg-block">
            <components v-bind:is="componentsName" :array="Products" />
          </div>
          <!-- Для Мобильных -->
          <div class="d-block d-lg-none">
            <components v-bind:is="'productBlog'" :array="Products" />
          </div>
          <b-pagination-nav
            :link-gen="linkGen"
            :number-of-pages="10"
            use-router
            align="center"
          />
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import PageFilter from "@/mixins/Page/filter"
import ModalImg from "@/components/Modal/ProductImg";
import ModalBuy from "@/components/Modal/buyProduct";
import FilterApplicabilities from "@/components/Forms/FilterApplicabilities";
import PanelVid from "@/components/Search/ProductPanel/table";
import FilterForm from "@/components/Forms/FulterProducts";
import TableProduct from "@/components/Table/product";
import productBlog from "@/components/Func/productBlog";
import productRow from "@/components/Func/productRow";
import MetkaFilter from "@/components/Metka/Filter/Blog";
import ResetFilter from "@/mixins/ResetFilter/index";
import CheckQueryFilter from "@/mixins/CheckQueryFilter/index";
export default {
  mixins: [ResetFilter, CheckQueryFilter,PageFilter],
  async fetch({ query, store, getters, commit, rootGetters }) {
    await Promise.all([
      store.dispatch("Categories/CategoriesAll/_Categories"), // Категории
      store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"), // ПРиминимости
      store.dispatch("Brand/BrandAll/_Brands"), // бренды
      store.dispatch("Selected/selected/_Selected"), // запрос избранные товары user
    ]);
    //   ПРОВЕРКА QUERY
    if (query != undefined) {
      if (query.minvalue != undefined) {
        // ПРОВЕРКА МИНИМУМА
        store.commit("formSearch/SetMinValue", query.minvalue);
      }
      if (query.maxvalue != undefined) {
        // ПРОВЕРКА МАКСИМУМА
        store.commit("formSearch/SetMaxValue", query.maxvalue);
      }
      if (query.brand != undefined) {
        // ПРОВЕРКА БРЕНДА
        let brand = query.brand.split(",");
        brand.forEach((element) => {
          store.commit("formSearch/SetBrandsChecked", Number(element));
        });
        store.dispatch("Catalog/Metks/SetMetksBrand", {
          ids: brand,
        });
      }
      // ПРОВЕРКА name SKU
      if (query.name != undefined) {
        store.commit("formSearch/SetSearch", query.name);
      }
      if (query.categories != undefined) {
        // ПРОВЕРКА КАТЕГОРИИ
        let ids = query.categories.split(",");
        await store.dispatch("Catalog/All/_AllChexboxTrue", {
          data: store.getters["Categories/CategoriesAll/GetCategories"],
          ids: ids,
        });

        await store.dispatch(
          "Catalog/Metks/SetMetksCategories",
          store.getters["Categories/CategoriesAll/GetCategories"]
        );
      }
      if (query.applicabilities != undefined) {
        // ПРОВЕРКА ПРИМИНИМОСТИ
        let ids = query.applicabilities.split(",");
        store.dispatch("Applicabilities/PanelUrl/SetId_Url", {
          data:
            store.getters[
              "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
            ],
          id: ids,
        });
        //   let ids = query.applicabilities.split(",");
        //   store.dispatch("Catalog/All/_AllChexboxTrue", {data: store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"], ids:ids });
      } else {
        store.commit("Applicabilities/Panel/SetPanelNew");
      }
      if (query.sort_name != undefined) {
        // ПРОВЕРКА СОРТИРОВКИ
        store.commit("formSearch/SetSort", {
          SortType: query.sort_type,
          SortName: query.sort_name,
        });
      }
    }
    //   ПРОВЕРКА QUERY
  },
  components: {
    FilterForm,
    TableProduct,
    productBlog,
    productRow,
    PanelVid,
    FilterApplicabilities,
    MetkaFilter,
    ModalImg,
    ModalBuy,
  },
  computed: {
    Products() {
      return this.$store.getters["Products/GetProducts"];
    },
    componentsName() {
      return this.$store.getters["getProductType"];
    },
  },
  created() {
    this.$store.dispatch(
      "Catalog/All/_AllVisible",
      this.$store.getters["Categories/CategoriesAll/GetCategories"]
    );
    // this.$store.dispatch("Catalog/All/_AllVisible" , this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"]);
  },
  mounted() {
    // Изменение истории и изменения состоянии VUEX
    window.addEventListener("popstate", () => {
      this.$store.commit("Applicabilities/Panel/DeleteAllPanel");
      this.ResetNoApplicabilitiess();
      this.CheckQueryFilter();
    });
  },
  // watch: {
    // async $route() {
      // console.log("Новый запрос");
      // await this.pushParamsFilter();
      // await this.pushParamsSort();
      // await this.PushUrl();
      // this.$store.dispatch("Products/_ProductAll", this.$route.query); // Товары
    // },
  // },
};
</script>