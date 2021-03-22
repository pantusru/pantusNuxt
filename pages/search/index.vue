<template>
  <section class="mt-5">
    <!-- Модалки -->
    <b-overlay
      :show="!getCheckCountProducts"
      rounded="sm"
      class="blog-full-content"
      no-center
    >
      <ModalImg />
      <ModalBuy />
      <share title="Ссылка на страницу" />
      <!-- Модалки -->
      <div class="container">
        <!-- Фильтры применяемости -->
        <FilterApplicabilities />
        <b-row class="pr-lg-3">
          <b-col cols="12" lg="3" class="mb-lg-0 mb-4">
            <!-- Общие Фильтры -->
            <FilterForm class="block-shadow "/>
          </b-col>
          <b-col lg="9" class="block-shadow border block-radius">
            <div class="d-flex result-title justify-content-between reset-title mb-1">
              <get-count-res class="d-block" />

              <div class="text-right d-flex align-items-center">
                <button-reply-show />
              </div>
            </div>
            <hr class="my-0 mb-3">
            <!-- Метки какие бренды и категории выбраны  -->
            <MetkaFilter />

            <!-- Выбран вид не таблица () => показываем table-head -->
            <b-table-simple
              v-if="componentsName !== 'TableProduct' && Products.length !== 0"
              class="text-center fz-5_5"
            >
              <PanelVid
                v-if="Products.length !== 0"
                class="panelProductFilter mb-0"
              />
            </b-table-simple>
            <!-- Для ПК ВЕРСИИ ()=> Выбор вида товара -->
            <div class="d-none d-lg-block ">
              <components
                :is="componentsName"
                v-if="Products.length !== 0"
                :array="Products"
              />
            </div>
            <!-- Для Мобильных ()=>  вид товара блочный -->
            <div class="d-block d-lg-none ">
              <components
                :is="'productBlog'"
                v-if="Products.length !== 0"
                :array="Products"
              />
            </div>
            <product404 v-if="CountProducts === 0" />
            <base-pagination
              v-if="CountProducts !== 0"
              :length="CountProducts"
              :limit="30"
            />
          </b-col>
        </b-row>
      </div>
    </b-overlay>
  </section>
</template>

<script>
import ModalImg from "@/components/modal/product-img";
import ModalBuy from "@/components/modal/buy-product";
import FilterApplicabilities from "@/components/forms/filter-applicabilities";
// import PanelVid from "@/components/search/product-panel/product-thead-get";
import FilterForm from "@/components/forms/filter-products";
import TableProduct from "@/components/table/product/table-product-get";
import productBlog from "@/components/func/product-blogs-get";
import productRow from "@/components/func/product-rows-get";
import MetkaFilter from "@/components/metka/filter/catalog-metka-get";
import ResetFilter from "@/mixins/reset-filter/index";
import CheckQueryFilter from "@/mixins/check-query-filter/index";
import SubmitFilter from "@/mixins/search-submit/index";
import Share from "@/components/modal/share";
import ButtonReplyShow from "@/components/base/button/button-reply-show";
import BasePagination from "@/components/base/pagination/base-pagination-filter";
import GetCountRes from "@/components/search/getCountRes";
import PanelVid from "@/components/search/product-panel/index";
import Product404 from "@/components/products/404"; // Панель
export default {
  components: {
    Product404,
    GetCountRes,
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
    ModalBuy,
  },
  mixins: [ResetFilter, CheckQueryFilter, SubmitFilter],
  async fetch({ query, store }) {
    //   ПРОВЕРКА QUERY
    if (query !== undefined) {
      this.form = {};
      if (query.maxvalue !== undefined && query.minvalue !== undefined) {
        // Проверка МАКСИМУМА  + МИНИМУМА
        if (query.maxvalue > query.minvalue) {
          // Минимальное больше максимального
          store.commit("formSearch/SetMaxValue", query.minvalue);
          store.commit("formSearch/SetMinValue", query.maxvalue);
          this.form.maxvalue = store.getters["formSearch/GetMaxValue"];
          this.form.minvalue = store.getters["formSearch/GetMinValue"];
        }
      } else {
        // Если одного нет
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
        await  store.dispatch("Brand/BrandAll/_Brands");
        // ПРОВЕРКА БРЕНДА
        let brand = query.filter_brands.split(",");
        brand = Array.from(new Set(brand));
        brand.forEach(element => {
          const id = Number(element);
          store.commit("formSearch/SetBrandsChecked", id);
          // if (
          //   store.getters["Brand/BrandAll/GetBrand"].findIndex(
          //     data => data.id === id
          //  ) !== -1
          // ) {
          //   store.commit("formSearch/SetBrandsChecked", id);
          // }
        });
        await store.dispatch("Catalog/Metks/SetMetksBrand", {
          ids: brand,
        });
        this.form.filter_brands = store.getters["formSearch/GetBrandsChecked"];
        this.form.filter_brands = this.form.filter_brands.join();
      }
      if (query.filter_substr !== undefined) {
        // ПРОВЕРКА name search
        store.commit("formSearch/SetSearch", query.filter_substr);
        this.form.filter_substr = store.getters["formSearch/GetSearch"];
      }
      if (query.filter_categories !== undefined) {
        // ПРОВЕРКА КАТЕГОРИИ
        await store.dispatch("Categories/CategoriesAll/_Categories")
        const ids = query.filter_categories.split(",");
        await store.dispatch("Catalog/All/_AllChexboxTrue", {
          data: store.getters["Categories/CategoriesAll/GetCategories"],
          ids,
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
        await  store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"); // применяемости
        const ids = query.filter_applicabilities.split(",");
        await store.dispatch("Applicabilities/PanelUrl/SetId_Url", {
          data:
            store.getters[
              "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
            ],
          id: ids,
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
          SortName: query.sort_name,
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
        store.dispatch("Categories/CategoriesAll/_Categories"), // Категории
        store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"), // применяемости
        store.dispatch("Brand/BrandAll/_Brands"), // бренды
        store.dispatch("Selected/selected/_Selected"), // запрос избранные товары user
        store.dispatch("Products/_ProductAll", this.form),
      ]);
      this.form = {};
      store.commit("SetCheckCountProducts", true);
    }
    //   ПРОВЕРКА QUERY
  },
  head() {
    return {
      title: "Список запчастей",
      meta: [
        {
          name: "keywords",
          content:
            "Запчасти, автозапчасти, купить запчасти, каталог запчастей, интернет магазин автозапчастей, продажа запчастей, запчасти ваз, газ, камаз, маз",
        },
      ],
    };
  },
  computed: {
    getCheckCountProducts() {
      return this.$store.getters.getCheckCountProducts;
    },
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
      return this.$store.getters.getProductType;
    },
    /***
     *
     * @returns {Boolean | String} - Требуется ли обновлять все фильтры для нового запроса
     */
    checkFilterClick() {
      return this.$store.getters.GetcheckFilterClick;
    },
  },
  watch: {
    async $route() {
      window.scrollTo(0, 0);
      this.$store.commit("SetCheckCountProducts", false);
      // Изменение route
      if (this.checkFilterClick !== false) {
        // Это не кнопка
        if (this.checkFilterClick !== "resetAll") {
          await this.ResetNoApplicabilitiess();
        }
        if (this.checkFilterClick !== "resetApplicabilities") {
          await this.$store.dispatch("Applicabilities/Panel/ResetAll");
        }
        await this.CheckQueryFilter();
        await this.pushParamsFilter();
        await this.pushParamsSort();
        await this.$store.dispatch("Products/_ProductAll", this.form);
      } else if (this.checkFilterClick === false) {
        // Кнопка поиск
        this.form.filter_substr = this.$store.getters["formSearch/GetSearch"];
        await this.$store.dispatch("Products/_ProductAll", this.form);
      }
      this.$store.commit("SetcheckFilterClick", true);
      this.form = {};
      this.$store.commit("SetCheckCountProducts", true);
    },
  },
  created() {
    // КОстыль
    // let categories = this.$store.getters["Categories/CategoriesAll/GetCategories"];
    this.$store.dispatch(
      "Catalog/All/_AllVisible",
      this.$store.getters["Categories/CategoriesAll/GetCategories"]
    );
  },
};
</script>
<style >
.spinner-border{
  position: absolute;
  left: 48%;
  top: 40vh;
}

.block-shadow{
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
}
.block-radius{
  border-radius: 6px;
}

.result-title{
  height: 47px;
}
</style>
