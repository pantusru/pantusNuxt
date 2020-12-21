<template>
  <base-button @click="deleteProduct()"><b-icon-x /></base-button>
</template>

<script>
import BaseButton from "@/components/base/button/base-button";
export default {
  name: "CartButtonDelete",
  components: { BaseButton },
  props: {
    /***
     * index массива элемента корзины 1 товара
     */
    index: {
      type: Number,
    },
    cartProduct: {
      type: Array,
    },
  },
  methods: {
    async deleteProduct() {
      // await Запрос на удаление товара с корзины
      this.$store.commit("Cart/CartAll/DeleteCartProduct", {
        data: this.cartProduct,
        index: this.index,
        flag: true,
      });
      await this.$store.dispatch("Cart/CartAll/CartProductDeleteNotOffers");
    },
  },
};
</script>
