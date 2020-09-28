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
            <VirtualList
                ref="scroll"
                class="h-100"
                :keeps="20"
                :data-key="'id'"
                :data-sources="SearchElem"
                :data-component="NameComponent">  
            </VirtualList>
        </b-row>
    </b-container>
</template>

<script>
import VirtualList from 'vue-virtual-scroll-list'
import ChecboxBrand from '@/components/Search/PanelBrand/Chexbox/index' 
import Vinput from "@/components/Search/PanelBrand/input/index"
import Brand from "@/components/Catalog/Brand/full"
export default {
    watch:{
        SearchElem(){
            this.$refs.scroll.scrollToOffset(0);
        }
    },
    async fetch({store, getters, commit}){
        await store.dispatch("Brand/BrandAll/_Brands");
    },
    data() {
        return {
            NameComponent: Brand,
            GetName: "Brand/BrandAll/GetBrand",
            SearchElem: this.$store.getters["Brand/BrandAll/GetBrand"]
        }
    },
    components:{
        Vinput,
        Brand,
        ChecboxBrand,
        VirtualList
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