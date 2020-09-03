<template>
    <button v-on:click="Reset" class="border link-danger">Сброс</button>
</template>

<script>
export default {
    methods:{
        //  Обнулить форму!
        Reset(event){
            event.preventDefault();
            // CHECKED ХРАНИТСЯ в VUEX с ДАННЫМИ
            this.$store.dispatch("Catalog/All/_AllChexbox", this.$store.getters["Categories/CategoriesAll/GetCategories"]);
            this.$store.dispatch("Catalog/All/_AllChexbox", this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"]);
            // ОТДЕЛЬНЫЙ ФАЙЛ VUEX С CHECKED 
            this.$store.commit("formSearch/SetMaxValue", 60000);
            this.$store.commit("formSearch/SetMinValue", 0);
            this.$store.commit("formSearch/SetAllBrandsChecked", []);
            this.$router.push({ name:"search"});            
        }
    }
}
</script>

<style>

</style>

