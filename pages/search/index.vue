<template>
  <section class="mt-5">
    <!-- Модалки -->
    <ModalImg />
    <ModalBuy />
    <share></share>
    <!-- Модалки -->
    <div class="container">
      <!-- Фильтры применяемости -->
      <FilterApplicabilities />
      <b-row>
        <b-col cols="12" lg="3" class="mb-lg-0 mb-3">
          <!-- Общие Фильтры -->
          <FilterForm />
        </b-col>
        <b-col lg="9">
          <!-- Метки какие бренды и категории выбраны  -->
          <MetkaFilter />
          <div class="text-right">
            <button-reply-show />
          </div>
          <!-- Выбран вид не таблица () => показываем table-head -->
          <b-table-simple
            v-if="componentsName !== 'TableProduct'"
            class="text-center fz-5_5"
          >
            <PanelVid class="panelProductFilter mb-0" />
          </b-table-simple>
          <!-- Для ПК ВЕРСИИ ()=> Выбор вида товара -->
          <div class="d-none d-lg-block">
            <components :is="componentsName" :array="Products" />
          </div>
          <!-- Для Мобильных ()=>  вид товара блочный -->
          <div class="d-block d-lg-none">
            <components :is="'productBlog'" :array="Products" />
          </div>
          <base-pagination :length="CountProducts" />
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
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
import SubmitFilter from "@/mixins/search-submit/index";
import Share from "@/components/modal/share";
import ButtonReplyShow from "@/components/base/button/button-reply-show";
import BasePagination from "@/components/base/pagination/base-pagination";

export default {
  mixins: [ResetFilter, CheckQueryFilter, SubmitFilter],
  async fetch({ query, store }) {
    await Promise.all([
      store.dispatch("Categories/CategoriesAll/_Categories"), // Категории
      store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"), // применяемости
      store.dispatch("Brand/BrandAll/_Brands"), // бренды
      store.dispatch("Selected/selected/_Selected") // запрос избранные товары user
    ]);
    //   ПРОВЕРКА QUERY
    if (query !== undefined) {
      this.form = {};
      if (query.maxvalue !== undefined && query.minvalue !== undefined) {
        // Проверка МАКСИМУМА  + МИНИМУМА
        if (query.maxvalue < query.minvalue) {
          // Минимальное больше максимального
          store.commit("formSearch/SetMaxValue", query.minvalue);
          store.commit("formSearch/SetMinValue", query.maxvalue);
          this.form.maxvalue = store.getters["formSearch/GetMaxValue"];
          this.form.minvalue = store.getters["formSearch/GetMinValue"];
        }
      } else {
        // Если одного нету
        if (query.minvalue !== undefined) {
          // ПРОВЕРКА МИНИМУМА
          store.commit("formSearch/SetMinValue", query.minvalue);
          this.form.minvalue = store.getters["formSearch/GetMinValue"];
        }
        if (query.maxvalue !== undefined) {
          // ПРОВЕРКА МАКСИМУМА
          store.commit("formSearch/SetMaxValue", query.maxvalue);
          this.form.maxvalue = store.getters["formSearch/GetMaxValue"];
        }
      }
      if (query.filter_brands !== undefined) {
        // ПРОВЕРКА БРЕНДА
        let brand = query.filter_brands.split(",");
        brand = Array.from(new Set(brand));
        brand.forEach(element => {
          store.commit("formSearch/SetBrandsChecked", Number(element));
        });
        await store.dispatch("Catalog/Metks/SetMetksBrand", {
          ids: brand
        });
        this.form.filter_brands = store.getters["formSearch/GetBrandsChecked"];
        this.form.filter_brands = this.form.filter_brands.join();
      }
      if (query.filter_substr !== undefined) {
        // ПРОВЕРКА name SKU
        store.commit("formSearch/SetSearch", query.filter_substr);
        this.form.filter_substr = store.getters["formSearch/GetSearch"];
      }
      if (query.filter_categories !== undefined) {
        // ПРОВЕРКА КАТЕГОРИИ
        const ids = query.filter_categories.split(",");
        await store.dispatch("Catalog/All/_AllChexboxTrue", {
          data: store.getters["Categories/CategoriesAll/GetCategories"],
          ids
        });

        await store.dispatch(
          "Catalog/Metks/SetMetksCategories",
          store.getters["Categories/CategoriesAll/GetCategories"]
        );
        this.form.filter_categories = await store.dispatch(
          "Catalog/All/_AllChexboxId",
          store.getters["Categories/CategoriesAll/GetCategories"]
        );
        this.form.filter_categories = this.form.filter_categories.join();
      }
      if (query.filter_applicabilities !== undefined) {
        // ПРОВЕРКА ПРИМИНИМОСТИ
        const ids = query.filter_applicabilities.split(",");
        await store.dispatch("Applicabilities/PanelUrl/SetId_Url", {
          data:
            store.getters[
              "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
            ],
          id: ids
        });
        this.form.filter_applicabilities = await store.dispatch(
          "Applicabilities/Panel/SetAllIdUrl"
        );
        if (store.getters["Applicabilities/Panel/PanelLength"] === 0) {
          // Указанные применяемости не найдены
          store.commit("Applicabilities/Panel/SetPanelNew");
        }
      } else {
        store.commit("Applicabilities/Panel/SetPanelNew");
      }
      if (query.sort_name !== undefined && query.sort_type !== undefined) {
        // ПРОВЕРКА СОРТИРОВКИ
        store.commit("formSearch/SetSort", {
          SortType: query.sort_type,
          SortName: query.sort_name
        });
        this.form.sort_name = store.getters["formSearch/GetSortName"];
        this.form.sort_type = store.getters["formSearch/GetSortType"];
      }
      // Пагинация
      if (query.page_number !== undefined) {
        this.form.page_number = query.page_number;
      }
      // Запрос для получение товара
      await Promise.all([
        store.dispatch("Products/_ProductAll", this.form),
        store.dispatch("Products/axios/_ProductFilterCount", this.form)
      ]);
      this.form = {};
    }
    //   ПРОВЕРКА QUERY
  },
  components: {
    BasePagination,
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
    ModalBuy
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
     * @returns {Object} - количество продуктов с указанными фильтрами
     */
    CountProducts() {
      return this.$store.getters["Products/GetCountProducts"];
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
  created() {
    // КОстыль
    // let categories = this.$store.getters["Categories/CategoriesAll/GetCategories"];
    console.log("reset");
    this.$store.dispatch(
      "Catalog/All/_AllVisible",
      this.$store.getters["Categories/CategoriesAll/GetCategories"]
    );
  },
  watch: {
    async $route(num, str) {
      // Изменение route
      if (this.checkFilterClick === true) {
        console.log("Новый запрос reset all + count нужен");
        await this.ResetNoApplicabilitiess();
        await this.$store.dispatch("Applicabilities/Panel/ResetAll");
        await this.CheckQueryFilter();
        await this.pushParamsFilter();
        await this.pushParamsSort();
        await this.PushUrl(false);
        await this.$store.dispatch("Products/_ProductAll", this.form);
        if (
          num.query.page_number !== str.query.page_number ||
          num.query.page_number == 0
        ) {
          console.log("Новый запрос на колво не требуется");
        }
        this.form = {};
      } else {
        console.log("Клик submit");
        this.$store.commit("SetcheckFilterClick", true);
      }
    }
  }
};
</script>
