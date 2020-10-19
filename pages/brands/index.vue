<template>
    <b-container>
        <Vinput 
            class="col-12 col-lg-3 mx-auto" 
            v-on:Vsearch="ValueSet" 
            :GetName="'Brand/BrandAll/GetBrand'" 
            :placeholders="'Поиск по брендам'"
        />
        <h1>Бренды</h1>
                <b-row class="mt-3 mt-lg-5">
                    <Brand  
                        v-for="source in SearchElem" 
                        :key="source.id"
                        :source="source" />
                </b-row>
            <b-pagination-nav
                v-if="CountPages != 1"
                use-router 
                :number-of-pages="CountPages" 
                :link-gen="linkGen" 
                align="center"
            > 
            </b-pagination-nav>
    </b-container>
</template>

<script>
import Vinput from "@/components/Search/PanelBrand/input/index"
import Brand from "@/components/Catalog/Brand/full"
import PageMixins from "@/mixins/Page/index"
export default {
    mixins:[PageMixins],
    async fetch({store, getters, commit , query}){
        await store.dispatch("Brand/BrandAll/_Brands");
    },
    watch:{
        $route(){
            window.scrollTo(0, 0);
            this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](this.$route.query.pages);
        }
    },
    created(){
        if(this.$route.query.pages != undefined){
            this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](this.$route.query.pages);
        }else{
            this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](1);
        }
    },
    data() {
        return {
            CountPages: this.$store.getters["Brand/BrandAll/GetBrandLength"],
            NameComponents: Brand,
            SearchElem: "",
        }
    },
    computed:{
        BrandLength(){
            return this.$store.getters["Brand/BrandAll/GetBrandLength"]
        }
    },
    components:{
        Vinput,
        Brand,
    },
     methods:{ // получение результата от компонента поиска
        ValueSet(data){
            if(data.search > 0){
                this.SearchElem = data.data;
                this.CountPages = 1;
            }else{
                this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](this.$route.query.pages);
                this.CountPages = this.BrandLength;
            }
        },    
    },
}
</script>

