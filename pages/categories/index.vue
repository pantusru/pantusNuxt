<template>
    <b-container>
        <Vinput 
            class="w-25 mx-auto" 
            :data="dataset"
        /> 
         <h1>Категории</h1>
        <b-row class="">
            <Categories 
                v-for="data in dataset" 
                :key="data.id" 
                :dataset="data"
            />
        </b-row>
    </b-container>
</template>

<script>
import Categories from "@/components/Catalog/Categories/full"
import Vinput from "@/components/Search/Panel/Input/index"
export default {
    provide(){
        return{
            SetValue: "Categories/CategoriesAll/SetCategories"        
        }
    },
    async fetch({query, store, getters, commit}){
        await store.dispatch("Categories/CategoriesAll/_Categories");
    },
    data() {
        return {
           
        }
    },
    components:{
        Vinput,
        Categories
    },
    computed:{
        dataset(){
            return this.$store.getters["Categories/CategoriesAll/GetCategories"]
        }   
    }
}
</script>

<style>

</style>