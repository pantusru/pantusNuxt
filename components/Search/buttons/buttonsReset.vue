<template>
    <button v-on:click="Reset" class="border link-danger">Сброс</button>
</template>

<script>
export default {
    methods:{
        //  Обнулить форму!
        // ТУТ БОЛЬ + убрать все chexbox
        Reset(event){
            event.preventDefault();
            this.$store.dispatch("Catalog/All/_AllChexbox", this.$store.getters["Categories/CategoriesAll/GetCategories"]);
            this.$store.dispatch("Catalog/All/_AllChexbox", this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"]);
            // 
            this.$store.commit("formSearch/SetMaxValue", 60000);
            this.$store.commit("formSearch/SetMinValue", 0);
            this.$router.push({ name:"search"});            
        }
    }
}

</script>

<style>

</style>

