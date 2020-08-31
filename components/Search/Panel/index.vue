<template>
  <b-form-group class="fz-5 border  px-3 py-2 border-light">
        <h3 class="mb-3">{{items}}</h3> 
        <slot name="input"></slot>
        <Data :name="name" :data="data" />
        <ButtonFull :name="name" />

  </b-form-group>
</template>

<script>
import Data from "./Data/index"
import ButtonFull from "./button/getfull"
export default {
    props:["items", "ArrayData", "name"],
    provide(){
        return{
            ArrayData: this.ArrayData
        }
    },
    components: {
            ButtonFull,
            Data,
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