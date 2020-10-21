export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        /**
         * 
         * @param {String} data - Название элемента
         * @function check - Проверяет массив на наличие элементов и перевод в строку
         */
        check(data) {
            if (this.form[data].length != 0) {
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
            if (event != undefined) { // Проверка что это не уход с страницы
                event.preventDefault();
            }
            this.$store.commit("Catalog/Metks/ResetMetks");
            if (this.$store.getters["formSearch/GetMinValue"] != 0) { // ЦЕНА МИНИМУМ
                this.form.minvalue = this.$store.getters["formSearch/GetMinValue"];
            }
            if (this.$store.getters["formSearch/GetMaxValue"] != 60000) {// ЦЕНА МАКСИМУМ
                this.form.maxvalue = this.$store.getters["formSearch/GetMaxValue"];
            }
            if (this.$store.getters["formSearch/GetBrandsChecked"].length != 0) { // БРЭНД
                this.form.brand = this.$store.getters["formSearch/GetBrandsChecked"];
                // ДОбавление меток для Brand
                this.$store.dispatch("Catalog/Metks/SetMetksBrand", {
                    ids:this.form.brand
                });
                this.form.brand = this.form.brand.join();
            }
            // КАТЕГОРИИ
            this.form.categories = await this.$store.dispatch("Catalog/All/_AllChexboxId", this.$store.getters["Categories/CategoriesAll/GetCategories"]);
            this.$store.dispatch("Catalog/Metks/SetMetksCategories", this.$store.getters["Categories/CategoriesAll/GetCategories"]);
            this.check("categories");
            // ПРИМИНИМОСТИ
            this.form.applicabilities = await this.$store.dispatch("Applicabilities/Panel/SetAllIdUrl");
        },
        /**
         * @function pushParamsSort - Проверяет как сортировка товара выбрана
         */
        pushParamsSort() {
            if (this.$store.getters["formSearch/GetSortName"] != "") {
                this.form.sort_name = this.$store.getters["formSearch/GetSortName"];
                this.form.sort_name = this.form.sort_name;
            }
            if (this.$store.getters["formSearch/GetSortType"] != "") {
                this.form.sort_type = this.$store.getters["formSearch/GetSortType"];
                this.form.sort_type = this.form.sort_type;
            }
        },
        /**
         * @function PushUrl - Переходит на новый запрос
         */
        PushUrl() {
            // НОВЫЙ URL
            window.scrollTo(0, 0);
            this.$router.push({ name: "search", query: { ... this.form } });
            this.form = {};
        }
    },
}