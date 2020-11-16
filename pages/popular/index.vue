<template>
  <b-container>
  <modal-buy-product></modal-buy-product>
    <ProductRow :array="Products" />
  </b-container>
</template>

<script>
import ProductRow from "@/components/func/product-blogs-get"
import ModalBuyProduct from "@/components/modal/buy-product";
    export default {
      components:{
        ModalBuyProduct,
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
