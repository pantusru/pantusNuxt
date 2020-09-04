<template>
  <b-form-group class="fz-5 border  px-3 py-2 border-light">
        <h3 class="mb-3">{{items}}</h3> 
        <VInputV :data="data"> </VInputV>
        <Data :name="name" :data="data" />

  </b-form-group>
</template>

<script>
import VInputV from "@/components/Search/Panel/Input/index"
import Data from "./Data/index"
import ButtonFull from "./button/getfull"
export default {
    props:["items", "ArrayData", "name" , "SetValue"],
    provide(){
        return{
            ArrayData: this.ArrayData,
            SetValue : this.SetValue
        }
    },
    components: {
            ButtonFull,
            Data,
            VInputV
    },
    computed:{
        data(){
            return this.$store.getters[this.ArrayData];
        }
    }
}
</script>

<style>
.overflow{
    overflow:auto;
    max-height: 200px;
}
</style>