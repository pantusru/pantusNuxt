<template>
  <b-container>
    <ProductRow :array="Products" />
  </b-container>
</template>

<script>
import ProductRow from "@/components/Func/productBlog"
    export default {
      components:{
        ProductRow,
      },
        async fetch({store}){
          await store.dispatch("Products/_ProductAll");
        },
        computed:{
            Products(){
                return  this.$store.getters["Products/GetProducts"]
            }
        }
    }
</script>

<style>

</style>
