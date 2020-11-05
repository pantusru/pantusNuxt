<template>
  <b-form-group class="border  px-3 py-2 border-light">
      <base-title-filter :text="items"/>
        <VInputV :data="data"> </VInputV>
        <Data :name="name" :data="data" />

  </b-form-group>
</template>

<script>
import VInputV from "@/components/Search/Panel/Input/index"
import Data from "@/components/Search/Panel/panel-data/index"
import BaseTitleFilter from "@/components/Base/base-title-filter";
// import ButtonFull from "./button/getfull"
export default {
    props:["items", "ArrayData", "name" , "SetValue"],
    provide(){
        return{
            ArrayData: this.ArrayData,
            SetValue : this.SetValue
        }
    },
    components: {
      BaseTitleFilter,
            // ButtonFull,
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
