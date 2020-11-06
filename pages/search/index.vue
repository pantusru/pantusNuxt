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
            :value="$route.query.page || 1"
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
import FilterApplicabilities from "@/components/Forms/filter-applicabilities";
import PanelVid from "@/components/Search/ProductPanel/product-thead-get";
import FilterForm from "@/components/Forms/fulter-products";
import TableProduct from "@/components/table/table-product-get";
import productBlog from "@/components/Func/product-blogs-get";
import productRow from "@/components/Func/product-rows-get";
import MetkaFilter from "@/components/Metka/Filter/catalog-metka-get";
import ResetFilter from "@/mixins/ResetFilter/index";
import CheckQueryFilter from "@/mixins/check-query-filter/index";
import SubmitFilter from "@/mixins/SearchSubmit/index"
export default {
  mixins: [ResetFilter, CheckQueryFilter,PageFilter, SubmitFilter],
  async fetch({ query, store, getters, commit, rootGetters }) {
    await Promise.all([
      // store.dispatch("Products/_ProductAll"), // Временная хуйта!
      store.dispatch("Categories/CategoriesAll/_Categories"), // Категории
      store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"), // ПРиминимости
      store.dispatch("Brand/BrandAll/_Brands"), // бренды
      store.dispatch("Selected/selected/_Selected"), // запрос избранные товары user
    ]);
    //   ПРОВЕРКА QUERY
    if (query !== undefined) {
      this.form = {};
      if(query.maxvalue !== undefined && query.minvalue !== undefined){      // ПРоверка МАКСИМУМА  + МИНИМУМА
        if(query.maxvalue < query.minvalue){ // Минимальное больше максимального
          store.commit("formSearch/SetMaxValue", query.minvalue);
          store.commit("formSearch/SetMinValue", query.maxvalue);
          this.form.maxvalue = store.getters["formSearch/GetMaxValue"];
          this.form.minvalue = store.getters["formSearch/GetMinValue"];
        }
      }
      else{ // Если одного нету
        if (query.minvalue !== undefined) {// ПРОВЕРКА МИНИМУМА
          store.commit("formSearch/SetMinValue", query.minvalue);
          this.form.minvalue = store.getters["formSearch/GetMinValue"];
        }
        if (query.maxvalue !== undefined) {// ПРОВЕРКА МАКСИМУМА
          store.commit("formSearch/SetMaxValue", query.maxvalue);
          this.form.maxvalue = store.getters["formSearch/GetMaxValue"];
        }
      }
      if (query.brand !== undefined) {
        // ПРОВЕРКА БРЕНДА
        let brand = query.brand.split(",");
        brand = Array.from(
          new Set(brand)
        );
        brand.forEach((element) => {
          store.commit("formSearch/SetBrandsChecked", Number(element));
        });
        store.dispatch("Catalog/Metks/SetMetksBrand", {
          ids: brand,
        });
        this.form.brand = store.getters["formSearch/GetBrandsChecked"];
        this.form.brand = this.form.brand.join();
      }
      // ПРОВЕРКА name SKU
      if (query.name !== undefined) {
        store.commit("formSearch/SetSearch", query.name);
      }
      if (query.categories !== undefined) {
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
        this.form.categories = await store.dispatch("Catalog/All/_AllChexboxId", store.getters["Categories/CategoriesAll/GetCategories"]);
      }
      if (query.applicabilities !== undefined) {
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
      if (query.sort_name !== undefined && query.sort_type !== undefined) {
        // ПРОВЕРКА СОРТИРОВКИ
        store.commit("formSearch/SetSort", {
          SortType: query.sort_type,
          SortName: query.sort_name,
        });
        this.form.sort_name = store.getters["formSearch/GetSortName"];
        this.form.sort_type = store.getters["formSearch/GetSortType"];
      }
      if(query.page != undefined){
          this.form.page = query.page;
      }
      // Запрос для получение товара
      console.log(this.form);
      store.dispatch("Products/_ProductAll") // Временная хуйта!
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
    checkFilterClick(){
      return this.$store.getters["GetcheckFilterClick"];
    }
  },
  created() { // КОстыль
    let categories  = this.$store.getters["Categories/CategoriesAll/GetCategories"];
      console.log("reset");
      this.$store.dispatch(
        "Catalog/All/_AllVisible",
        this.$store.getters["Categories/CategoriesAll/GetCategories"]
      );
    // this.$store.dispatch("Catalog/All/_AllVisible" , this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"]);
  },
    watch: {
      async $route() {
        if(this.checkFilterClick === true){
          console.log("Новый запрос");
          await this.ResetNoApplicabilitiess();
          await this.$store.commit("Applicabilities/Panel/DeleteAllPanel");
          await this.CheckQueryFilter();
          await this.pushParamsFilter();
          await this.pushParamsSort();
          this.PushUrl();
        // this.$store.dispatch("Products/_ProductAll", this.$route.query); // Товары
        }else{
          this.$store.commit('SetcheckFilterClick', true)
        }
      },
  },
};
</script>
