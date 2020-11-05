<template>
  <b-button @click="deleteProduct()" class="bg-danger border-0 py-1">X</b-button>
</template>

<script>
export default {
  name: "cart-button-delete",
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
