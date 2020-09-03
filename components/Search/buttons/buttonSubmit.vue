<template>
        <button v-on:click="pushParams" class="mr-2 border link-danger">Отправить</button>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods:{
        check(data){
            if(this.form[data].length !=0){
                this.form[data] = this.form[data].join();
            }else{
                delete this.form[data];
            }
        },
        //  ОТПРАВИТЬ ЗАПРОС!
        async pushParams(event){
            event.preventDefault();
            if(this.$store.getters["formSearch/GetMinValue"] != 0){ // ЦЕНА МИНИМУМ
                this.form.minvalue = this.$store.getters["formSearch/GetMinValue"];
            }
            if(this.$store.getters["formSearch/GetMaxValue"] != 60000){// ЦЕНА МАКСИМУМ
                this.form.maxvalue = this.$store.getters["formSearch/GetMaxValue"];
            }
            if(this.$store.getters["formSearch/GetBrandsChecked"].length !=0){ // БРАНД
                this.form.brand = this.$store.getters["formSearch/GetBrandsChecked"];
                 this.form.brand = this.form.brand.join();
            }
            // КАТЕГОРИИ
            this.form.categories = await this.$store.dispatch("Catalog/All/_AllChexboxId", this.$store.getters["Categories/CategoriesAll/GetCategories"] ); 
            this.check("categories");
            // ПРИМИНИМОСТИ
            this.form.applicabilities = await this.$store.dispatch("Catalog/All/_AllChexboxId", this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"] ); 
            this.check("applicabilities");
            // НОВЫЙ URL
            this.$router.push({ name:"search", query: {... this.form} });
        },
    },
 
}
</script>

<style>

</style>

