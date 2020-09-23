<template>
    <b-form-group class="border  px-3 py-2 border-light">
        <h4 class="mb-3 fz">{{items}}</h4> 
        <Vinput v-on:Vsearch="ValueSet"  :GetName="GetName" />
        <Data :SearchElem="SearchElem" :GetChecbox="GetChecbox" :SetChecbox="SetChecbox" />
    </b-form-group>
</template>

<script>
import Data from "./Data/index";
import Vinput from "./input/index";
export default {
    props:["name", "SetChecbox", "GetName", "items", "GetChecbox"],
    data(){
        return{
            SearchElem: this.$store.getters[this.GetName]
        }
    },
    methods:{ // получение результата от компонента поиска
        ValueSet(data){
            this.SearchElem = data;
        }
    },
    components:{
        Vinput,
        Data
    }
}
</script>

<style>

</style>