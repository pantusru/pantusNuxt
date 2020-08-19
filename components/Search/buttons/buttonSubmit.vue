<template>
        <button v-on:click="pushParams" class="mr-2 border link-danger">Отправить</button>
</template>

<script>
export default {
    methods:{
        //  ОТПРАВИТЬ ЗАПРОС!
        pushParams(event){
            event.preventDefault();
            if(this.$store.getters["formSearch/GetMinValue"] != 0){
                this.$route.query.minvalue = this.$store.getters["formSearch/GetMinValue"];
            }else{
                delete this.$route.query.minvalue;
            }
            if(this.$store.getters["formSearch/GetMinValue"] !=0){
                this.$route.query.maxvalue = this.$store.getters["formSearch/GetMaxValue"];
            }else{
               delete this.$route.query.maxvalue;
            }
            if(this.$store.getters["formSearch/GetBrandChexbox"] !=0){
                this.$route.query.brand = this.$store.getters["formSearch/GetBrandChexbox"].join();
            }else{``
               delete this.$route.query.brand; 
            }
             if(this.$store.getters["formSearch/GetCategoriesChexbox"] !=0){
                this.$route.query.categories = this.$store.getters["formSearch/GetCategoriesChexbox"].join();
            }else{
               delete this.$route.query.categories; 
            }
            this.$router.push({ path:"/search", query: {... this.$route.query} });
        },
    },
 
}
</script>

<style>

</style>

