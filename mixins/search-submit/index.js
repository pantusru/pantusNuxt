export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    /**
     *
     * @param {String} data - Название элемента
     * @function check - Проверяет массив на наличие элементов и перевод в строку
     */
    check(data) {
      if (this.form[data].length !== 0) {
        this.form[data] = this.form[data].join();
      } else {
        delete this.form[data];
      }
    },
    /**
     *
     * @async
     * @function pushParamsFilter - Проверяет query запросы и при необходимсти сохраняет во VUEX
     */
    async pushParamsFilter(event) {
      if (event !== undefined) {
        // Проверка что это не уход с страницы
        event.preventDefault();
      }
      this.$store.commit("Catalog/Metks/ResetMetks"); // RESET Metks
      if (this.$store.getters["formSearch/GetMinValue"] !== 0) {
        // ЦЕНА МИНИМУМ
        this.form.minvalue = this.$store.getters["formSearch/GetMinValue"];
      } else {
        this.form.minvalue = undefined;
      }
      if (this.$store.getters["formSearch/GetMaxValue"] !== 60000) {
        // ЦЕНА МАКСИМУМ
        this.form.maxvalue = this.$store.getters["formSearch/GetMaxValue"];
      } else {
        this.form.maxvalue = undefined;
      }
      if (this.$store.getters["formSearch/GetBrandsChecked"].length !== 0) {
        // БРЭНД
        this.form.filter_brands = this.$store.getters[
          "formSearch/GetBrandsChecked"
        ];
        // ДОбавление меток для Brand
        await this.$store.dispatch("Catalog/Metks/SetMetksBrand", {
          ids: this.form.filter_brands
        });
        this.form.filter_brands = this.form.filter_brands.join();
      } else {
        this.form.filter_brands = undefined;
      }
      // КАТЕГОРИИ
      this.form.filter_categories = await this.$store.dispatch(
        "Catalog/All/_AllChexboxId",
        this.$store.getters["Categories/CategoriesAll/GetCategories"]
      );
      await this.$store.dispatch(
        "Catalog/Metks/SetMetksCategories",
        this.$store.getters["Categories/CategoriesAll/GetCategories"]
      );
      this.check("filter_categories");
      // ПРИМИНИМОСТИ
      this.form.filter_applicabilities = await this.$store.dispatch(
        "Applicabilities/Panel/SetAllIdUrl"
      );
      // PAGE
      if (this.$route.query.page_number !== undefined) {
        this.form.page_number = this.$route.query.page_number;
      }
      if (this.$store.getters["formSearch/GetSearch"] !== "") {
        this.form.filter_substr = this.$store.getters["formSearch/GetSearch"];
      } else {
        this.form.filter_substr = undefined;
      }
    },
    /**
     * @function pushParamsSort - Проверяет как сортировка товара выбрана
     */
    pushParamsSort() {
      if (
        this.$store.getters["formSearch/GetSortName"] !== "" &&
        this.$store.getters["formSearch/GetSortType"] !== ""
      ) {
        this.form.sort_name = this.$store.getters["formSearch/GetSortName"];
        this.form.sort_type = this.$store.getters["formSearch/GetSortType"];
      }
    },
    /**
     * @function PushUrl - Переходит на новый запрос
     */
    async PushUrl(checkPush = true) {
      window.scrollTo(0, 0);
      // НОВЫЙ URL
      if (checkPush) {
        await this.$router.push({
          name: "search",
          query: { ...this.form, page_number: undefined }
        });
        await this.$store.dispatch("Products/_ProductAll", this.form);
      }
    }
  }
};
