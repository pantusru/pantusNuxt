<template>
    <b-container>
        <Vinput 
            class="w-25 mx-auto" 
            v-on:Vsearch="ValueSet"  
            :GetName="GetName" 
            :placeholders="'Поиск по брендам'"
        />
        <h1>Бренды</h1>
        <b-row class="mt-5">
            <Brand v-for="data in SearchElem" :key="data.id" :dataset="data" />
        </b-row>
    </b-container>
</template>

<script>
import Vinput from "@/components/Search/PanelBrand/input/index"
import Brand from "@/components/Catalog/Brand/full"
export default {
    async fetch({store, getters, commit}){
        await store.dispatch("Brand/BrandAll/_Brands");
    },
    data() {
        return {
            GetName: "Brand/BrandAll/GetBrand",
            SearchElem: this.$store.getters["Brand/BrandAll/GetBrand"]
        }
    },
    components:{
        Vinput,
        Brand
    },
     methods:{ // получение результата от компонента поиска
        ValueSet(data){
            this.SearchElem = data;
        }
    },
}
</script>

<style>

</style>