<template>
  <section class="mt-5">
    <!-- Модалки -->
    <ModalImg/>
    <ModalBuy/>
    <share></share>
    <!-- Модалки -->
    <div class="container">
      <!-- Фильтры применяемости -->
      <FilterApplicabilities/>
      <b-row>
        <b-col cols="12" lg="3" class="mb-lg-0 mb-3">
          <!-- Общие Фильтры -->
          <FilterForm/>
        </b-col>
        <b-col lg="9">
          <!-- Метки какие бренды и категории выбраны  -->
          <MetkaFilter/>
          <div class="text-right">
            <button-reply-show />
          </div>
          <!-- Выбран вид не таблица () => показываем table-head -->
          <b-table-simple
            class="text-center fz-5_5"
            v-if="componentsName !== 'TableProduct'"
          >
            <PanelVid class="panelProductFilter mb-0"/>
          </b-table-simple>
          <!-- Для ПК ВЕРСИИ ()=> Выбор вида товара -->
          <div class="d-none d-lg-block">
            <components :is="componentsName" :array="Products"/>
          </div>
          <!-- Для Мобильных ()=>  вид товара блочный -->
          <div class="d-block d-lg-none">
            <components :is="'productBlog'" :array="Products"/>
          </div>
          <b-pagination-nav
            hide-ellipsis
            first-number
            last-number
            limit="3"
            hide-goto-end-buttons
            size="sm"
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
import PageFilter from "@/mixins/page/filter"
import ModalImg from "@/components/modal/product-img";
import ModalBuy from "@/components/modal/buy-product";
import FilterApplicabilities from "@/components/forms/filter-applicabilities";
import PanelVid from "@/components/search/product-panel/product-thead-get";
import FilterForm from "@/components/forms/filter-products";
import TableProduct from "@/components/table/table-product-get";
import productBlog from "@/components/func/product-blogs-get";
import productRow from "@/components/func/product-rows-get";
import MetkaFilter from "@/components/metka/filter/catalog-metka-get";
import ResetFilter from "@/mixins/reset-filter/index";
import CheckQueryFilter from "@/mixins/check-query-filter/index";
import SubmitFilter from "@/mixins/search-submit/index"
import Share from "@/components/modal/share";
import ButtonReplyShow from "@/components/button-reply-show";

export default {
  mixins: [ResetFilter, CheckQueryFilter, PageFilter, SubmitFilter],
  async fetch({query, store, getters, commit, rootGetters}) {
    await Promise.all([
      store.dispatch("Products/_ProductAll"), // Временная хуйта!
      store.dispatch("Categories/CategoriesAll/_Categories"), // Категории
      store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"), // применяемости
      store.dispatch("Brand/BrandAll/_Brands"), // бренды
      store.dispatch("Selected/selected/_Selected"), // запрос избранные товары user
    ]);
    //   ПРОВЕРКА QUERY
    if (query !== undefined) {
      this.form = {};
      if (query.maxvalue !== undefined && query.minvalue !== undefined) {      // Проверка МАКСИМУМА  + МИНИМУМА
        if (query.maxvalue < query.minvalue) { // Минимальное больше максимального
          store.commit("formSearch/SetMaxValue", query.minvalue);
          store.commit("formSearch/SetMinValue", query.maxvalue);
          this.form.maxvalue = store.getters["formSearch/GetMaxValue"];
          this.form.minvalue = store.getters["formSearch/GetMinValue"];
        }
      } else { // Если одного нету
        if (query.minvalue !== undefined) {// ПРОВЕРКА МИНИМУМА
          store.commit("formSearch/SetMinValue", query.minvalue);
          this.form.minvalue = store.getters["formSearch/GetMinValue"];
        }
        if (query.maxvalue !== undefined) {// ПРОВЕРКА МАКСИМУМА
          store.commit("formSearch/SetMaxValue", query.maxvalue);
          this.form.maxvalue = store.getters["formSearch/GetMaxValue"];
        }
      }
      if (query.brand !== undefined) {// ПРОВЕРКА БРЕНДА
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
      if (query.name !== undefined) { // ПРОВЕРКА name SKU
        store.commit("formSearch/SetSearch", query.name);
      }
      if (query.categories !== undefined) {// ПРОВЕРКА КАТЕГОРИИ
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
        await store.dispatch("Applicabilities/PanelUrl/SetId_Url", {
          data:
            store.getters[
              "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
              ],
          id: ids,
        });
        if(store.getters['Applicabilities/Panel/PanelLength'] === 0){ // Указанные применяемости не найдены
          store.commit("Applicabilities/Panel/SetPanelNew");
        }
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
      if (query.page !== undefined) {
        this.form.page = query.page;
      }
      // Запрос для получение товара
      console.log(this.form);
    }
    //   ПРОВЕРКА QUERY
  },
  components: {
    ButtonReplyShow,
    Share,
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
    /***
     *
     * @returns {Object} - Список продуктов
     */
    Products() {
      return this.$store.getters["Products/GetProducts"];
    },
    /***
     *
     * @returns {String} - Название  в каком виде отображаются товары
     */
    componentsName() {
      return this.$store.getters["getProductType"];
    },
    /***
     *
     * @returns {Boolean} - Требуется ли обновлять все фильтры для нового запроса
     */
    checkFilterClick() {
      return this.$store.getters["GetcheckFilterClick"];
    }
  },
  created() { // КОстыль
    let categories = this.$store.getters["Categories/CategoriesAll/GetCategories"];
    console.log("reset");
    this.$store.dispatch(
      "Catalog/All/_AllVisible",
      this.$store.getters["Categories/CategoriesAll/GetCategories"]
    );
  },
  watch: {
    async $route() { // Изменение route
      if (this.checkFilterClick === true) {
        console.log("Новый запрос");
        await this.ResetNoApplicabilitiess();
        await this.$store.commit("Applicabilities/Panel/DeleteAllPanel");
        await this.CheckQueryFilter();
        await this.pushParamsFilter();
        await this.pushParamsSort();
        this.PushUrl();
        // this.$store.dispatch("Products/_ProductAll", this.$route.query); // Товары запросы
      } else {
        this.$store.commit('SetcheckFilterClick', true)
      }
    },
  },
};
</script>
