<template>
  <base-button @click="updateCart" text="Обновить корзину"></base-button>
</template>

<script>
import BaseButton from "@/components/Base/base-button";
export default {
  name: "cart-button-update",
  components: {BaseButton},
  methods:{
    updateCart(){
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

