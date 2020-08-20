<template>
    <button v-on:click="Reset" class="border link-danger">Сброс</button>
</template>

<script>
export default {
    methods:{
        //  Обнулить форму!
        Reset(event){
            event.preventDefault();
            this.$store.commit("formSearch/SetCategoriesChexbox", []);
            this.$store.commit("formSearch/SetBrandChexbox", []);
            this.$store.commit("formSearch/SetApplicabilitiesChexbox", []);
            this.$store.commit("formSearch/SetMaxValue", 60000);
            this.$store.commit("formSearch/SetMinValue", 0);
            this.$router.push({ name:"search"});            
        }
    }
}

</script>

<style>

</style>

