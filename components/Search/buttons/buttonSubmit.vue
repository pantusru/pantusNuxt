<template>
        <button v-on:click="pushParams" class="mr-2 border link-danger">Отправить</button>
</template>

<script>
export default {
    methods:{
        //  ОТПРАВИТЬ ЗАПРОС!
        async pushParams(event){
            event.preventDefault();
            let  a = {};
            if(this.$store.getters["formSearch/GetMinValue"] != 0){
                a.minvalue = this.$store.getters["formSearch/GetMinValue"];
            }
            if(this.$store.getters["formSearch/GetMaxValue"] != 60000){
                a.maxvalue = this.$store.getters["formSearch/GetMaxValue"];
            }
            a.categories = await this.$store.dispatch("Catalog/All/_AllChexboxId", this.$store.getters["Categories/CategoriesAll/GetCategories"] ); 
            a.applicabilities = await this.$store.dispatch("Catalog/All/_AllChexboxId", this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"] ); 
            if( a.categories.length != 0){ // КАТЕГОРИИ
                a.categories = a.categories.join();
            }else{
                delete a.categories;
            }
            if( a.applicabilities.length != 0){ // ПРИНЯНИМОСТИ
                a.applicabilities = a.applicabilities.join();
            }else{
                delete a.applicabilities;
            }
            this.$router.push({ name:"search", query: {... a} });
        },
    },
 
}
</script>

<style>

</style>

