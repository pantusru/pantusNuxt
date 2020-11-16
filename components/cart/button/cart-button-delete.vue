<template>
  <base-button @click="deleteProduct()"><b-icon-x></b-icon-x></base-button>
</template>

<script>
import BaseButton from "@/components/base/button/base-button";
export default {
  name: "cart-button-delete",
  components: {BaseButton},
  props:{
        index:{},
    },
    methods:{
        async deleteProduct() {
            //await Запрос на удаление товара с корзины
            this.$store.commit("Cart/CartAll/DeleteCartProduct", {index:this.index, flag:true});
        },
    }
};
</script>
