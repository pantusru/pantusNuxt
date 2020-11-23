<template>
  <base-button @click="updateCart" text="Обновить корзину"></base-button>
</template>

<script>
import BaseButton from "@/components/base/button/base-button";

export default {
  name: "cart-button-update",
  components: { BaseButton },
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    }
  },
  methods: {
    updateCart() {
      // await Запрос на изменение full cart
      // flag обновлена ли корзина
      this.$store.commit("Cart/CartAll/SetCartActual");
      // Количество не обновленных товаров
      this.$store.commit("Cart/CartAll/SetCartUpdateCount", 0);
      for (const index in this.CartProduct) {
        // Убрать все flag не обновленных товаров
        this.$store.commit("Cart/CartAll/SetCartCheckCount", {
          value: false,
          index
        });
      }
    }
  }
};
</script>
