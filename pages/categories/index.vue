<template>
    <b-container>
        <Vinput 
           class="col-12 col-lg-3 mx-auto"  
            :data="dataset"
            :placeholders=" 'Поиск по категориям' "
        /> 
         <h1 class="mb-5">Категории</h1>
         <b-card-group columns  class="column-count-1 column-count-sm-2 column-count-lg-4">
            <Categories  class="mb-3"
                v-for="data in dataset" 
                :key="data.id" 
                :dataset="data"
            />
        </b-card-group>
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
    components:{
        Vinput,
        Categories
    },
    computed:{
        dataset(){
            return this.$store.getters["Categories/CategoriesAll/GetCategories"];
        },
           
    },
    created(){
        this.$store.dispatch("Catalog/All/_AllVisible" , this.dataset);
    },
}
</script>

