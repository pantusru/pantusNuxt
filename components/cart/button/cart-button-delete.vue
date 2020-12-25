<template>
  <base-button @click="deleteProduct()"><b-icon-x /> </base-button>
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
    id: {
      type: Number,
    },
    cartProduct: {
      type: Array,
    },
  },
  methods: {
    async deleteProduct() {
      console.log(this.id);
      // await Запрос на удаление товара с корзины
      await this.$store.dispatch("Cart/CartAll/DeleteCartProduct", this.id);
      // await this.$store.dispatch("Cart/CartAll/CartProductDeleteNotOffers");
    },
  },
};
</script>
