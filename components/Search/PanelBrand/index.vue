<template>
    <b-form-group class="border  px-3 py-2 border-light">
      <base-title-filter :text="items"/>
        <Vinput v-on:Vsearch="ValueSet"  :GetName="GetName" />
        <Data :SearchElem="SearchElem" :GetChecbox="GetChecbox" :SetChecbox="SetChecbox" />
    </b-form-group>
</template>

<script>
import Data from "@/components/Search/PanelBrand/brands-data/index";
import Vinput from "@/components/Search/PanelBrand/input/index";
import BaseTitleFilter from "@/components/Base/base-title-filter";
export default {
    props:["name", "SetChecbox", "GetName", "items", "GetChecbox"],
    data(){
        return{
            SearchElem: this.$store.getters[this.GetName]
        }
    },
    methods:{ // получение результата от компонента поиска
        ValueSet(data){
            this.SearchElem = data.data;
        }
    },
    components:{
      BaseTitleFilter,
        Vinput,
        Data
    }
}
</script>

