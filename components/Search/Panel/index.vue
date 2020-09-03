<template>
  <b-form-group class="fz-5 border  px-3 py-2 border-light">
        <h3 class="mb-3">{{items}}</h3> 
        <VInput :data="data"> </VInput>
        <Data :name="name" :data="data" />

  </b-form-group>
</template>

<script>
import VInput from "./Input/index"
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
            VInput
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