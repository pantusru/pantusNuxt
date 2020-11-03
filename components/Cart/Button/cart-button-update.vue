<template>
  <b-button class="bg-danger border-0" @click="updateCart">Обновить корзину</b-button>
</template>

<script>
export default {
  name: "cart-button-update",
  methods:{
    updateCart(){
      console.log(this.CartProduct);
      this.$store.commit("Cart/CartAll/SetCartActual");
    }
  },
  computed:{
    CartProduct(){
      return this.$store.getters["Cart/CartAll/GetCartProduct"]
    },
  }
}
</script>

