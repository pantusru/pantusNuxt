<template>
        <button v-on:click="pushParams" class="mr-2 border link-danger">Отправить</button>
</template>

<script>
export default {
    methods:{
        //  ОТПРАВИТЬ ЗАПРОС!
         pushParams(event){
            event.preventDefault();
            let  a = {};
            if(this.$store.getters["formSearch/GetMinValue"] != 0){
                a.minvalue = this.$store.getters["formSearch/GetMinValue"];
            }
            if(this.$store.getters["formSearch/GetMaxValue"] != 60000){
                a.maxvalue = this.$store.getters["formSearch/GetMaxValue"];
            }
            if(this.$store.getters["formSearch/GetBrandChexbox"] !=0){
                a.brand = this.$store.getters["formSearch/GetBrandChexbox"].join();
            }
             if(this.$store.getters["formSearch/GetCategoriesChexbox"] !=0){
                a.categories = this.$store.getters["formSearch/GetCategoriesChexbox"].join();
            }            
            console.log(a.toString());
            // history.pushState({}, null, `/search? ${this.$route.query}`);
            // this.$router.push({ name:"search", query: {... this.$route.query} });
            //  this.$router.push({path: `/search/ ${this.$route.query}`});
        },
    },
 
}
</script>

<style>

</style>

