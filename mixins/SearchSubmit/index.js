export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        check(data) {
            if (this.form[data].length != 0) {
                this.form[data] = this.form[data].join();
            } else {
                delete this.form[data];
            }
        },
        async pushParamsFilter(event) {
            if (event != undefined) {
                event.preventDefault();
            }
            if (this.$store.getters["formSearch/GetMinValue"] != 0) { // ЦЕНА МИНИМУМ
                this.form.minvalue = this.$store.getters["formSearch/GetMinValue"];
            }
            if (this.$store.getters["formSearch/GetMaxValue"] != 60000) {// ЦЕНА МАКСИМУМ
                this.form.maxvalue = this.$store.getters["formSearch/GetMaxValue"];
            }
            if (this.$store.getters["formSearch/GetBrandsChecked"].length != 0) { // БРАНД
                console.log(this.$store.getters["formSearch/GetBrandsChecked"].length);
                this.form.brand = this.$store.getters["formSearch/GetBrandsChecked"];
                this.form.brand = this.form.brand.join();
            }
            // КАТЕГОРИИ
            this.form.categories = await this.$store.dispatch("Catalog/All/_AllChexboxId", this.$store.getters["Categories/CategoriesAll/GetCategories"]);
            this.check("categories");
            // ПРИМИНИМОСТИ
            this.form.applicabilities = await this.$store.dispatch("Applicabilities/Panel/SetAllIdUrl");
        },
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
        PushUrl() {
            // НОВЫЙ URL
            window.scrollTo(0, 0);
            this.$router.push({ name: "search", query: { ... this.form } });
            this.form = {};
        }
    },
}