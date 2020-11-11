<template>
  <base-button class="py-1" @click="deleteProduct()" text="X"></base-button>
</template>

<script>
import BaseButton from "@/components/base/base-button";
export default {
  name: "cart-button-delete",
  components: {BaseButton},
  props:{
        index:{},
    },
    methods:{
        deleteProduct() {
            this.$store.commit("Cart/CartAll/DeleteCartProduct", this.index);
        },
    }
};
</script>
