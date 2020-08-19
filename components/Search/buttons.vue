<template>
    <b-button-group>
        <button v-on:click="pushParams" class="mr-2 border link-danger">Отправить</button>
        <button class="border link-danger">Сброс</button>
</b-button-group>
</template>

<script>
export default {
    methods:{
        pushParams(event){
            event.preventDefault();
            if(this.$store.getters["form/GetMinValue"] != 0){
                this.$route.query.minvalue = this.$store.getters["form/GetMinValue"];
            }
            if(this.$store.getters["form/GetMinValue"] !=0){
                this.$route.query.maxvalue = this.$store.getters["form/GetMaxValue"];
            }
            if(this.$store.getters["form/GetBrandChexbox"] !=0){
                this.$route.query.brand = this.$store.getters["form/GetBrandChexbox"];
            }
             if(this.$store.getters["form/GetCategoriesChexbox"] !=0){
                this.$route.query.caregories = this.$store.getters["form/GetCategoriesChexbox"];
            }
            this.$store.
        }
    }
}
</script>

<style>

</style>