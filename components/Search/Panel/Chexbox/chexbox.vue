<template>
  <b-form-checkbox  class="min-h-auto mb-3"
  @change="checxboxGo(dataset.id)" 
  v-model="dataset.CheckedType"  
  :indeterminate="dataset.Indeterminate"
   :id="dataset.id.toString()">
    {{ dataset.name }}
      <slot></slot>
  </b-form-checkbox>
</template>

<script>
export default {
    props:["dataset"],
    inject: ['ArrayData'],
    methods: {
        checxboxGo(id){
            this.$store.commit("Catalog/Chexbox/SetChecboxCheckedType", { data: this.dataset, value: !this.dataset.CheckedType });
            this.$store.dispatch("Catalog/Chexbox/ChexboxCheckAll" , 
                {arr:this.$store.getters[ this.ArrayData], 
                value: this.dataset.CheckedType, 
                id:this.dataset.id} );
        }
    },
}
</script>

<style>
    .min-h-auto{
        min-height: auto;
    }
</style>