export default {
  methods: {
    /**
     * @returns {Promise<void>}
     * @constructor
     * @function CheckQueryFilter - Что то делает!
     */
    async CheckQueryFilter() {
      if (this.$route.query !== undefined) {
        if (this.$route.query.minvalue !== undefined) {
          // ПРОВЕРКА МИНИМУМА
          this.$store.commit(
            "formSearch/SetMinValue",
            this.$route.query.minvalue
          );
        }
        if (this.$route.query.maxvalue !== undefined) {
          /**
           * Вывоз мутациис vuex сохранение max стоимости
           */
          this.$store.commit(
            "formSearch/SetMaxValue",
            this.$route.query.maxvalue
          );
        }
        if (this.$route.query.filter_brands !== undefined) {
          // ПРОВЕРКА БРЕНДА
          const filter_brands = this.$route.query.filter_brands.split(",");
          filter_brands.forEach(element => {
            this.$store.commit("formSearch/SetBrandsChecked", Number(element));
          });
          // this.$store.dispatch("Catalog/Metks/SetMetksBrand", {
          //     ids: brand,
          // });
        }
        if (this.$route.query.filter_categories !== undefined) {
          // ПРОВЕРКА КАТЕГОРИИ
          let ids = this.$route.query.filter_categories.split(",");
          await this.$store.dispatch("Catalog/All/_AllChexboxTrue", {
            data: this.$store.getters["Categories/CategoriesAll/GetCategories"],
            ids: ids,
          });
          // await this.$store.dispatch(
          //     "Catalog/Metks/SetMetksCategories",
          //     this.$store.getters["Categories/CategoriesAll/GetCategories"]
          // );
        }
        if (this.$route.query.filter_applicabilities !== undefined) {
          // ПРОВЕРКА ПРИМИНИМОСТИ
          let ids = this.$route.query.filter_applicabilities.split(",");
          await this.$store.dispatch("Applicabilities/PanelUrl/SetId_Url", {
            data: this.$store.getters[
              "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
            ],
            id: ids,
          });
          //   let ids = query.applicabilities.split(",");
          //   store.dispatch("Catalog/All/_AllChexboxTrue", {data: store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"], ids:ids });
        } else {
          this.$store.commit("Applicabilities/Panel/SetPanelNew");
        }
        if (this.$route.query.sort_name !== undefined) {
          // ПРОВЕРКА СОРТИРОВКИ
          this.$store.commit("formSearch/SetSort", {
            SortType: this.$route.query.sort_type,
            SortName: this.$route.query.sort_name,
          });
        }
        if (this.$route.query.filter_substr !== undefined) {
          this.$store.commit(
            "formSearch/SetSearch",
            this.$route.query.filter_substr
          );
        }
      }
    },
  },
};
