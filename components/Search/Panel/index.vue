<template>
  <b-form-group class="border  px-3 py-2 border-light">
        <h4 class="mb-3 fz-5 font-weight-bold">{{items}}</h4> 
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
 