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
  computed: {
    getCart() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
  methods: {
    async deleteProduct(event) {
      // await Запрос на удаление товара с корзины
      await this.$store.dispatch("Cart/CartAll/DeleteCartProduct", this.id);
      if (this.$route.name === "order" && this.getCart.length === 0) {
        await this.$router.push("/cart");
      }
      // await this.$store.dispatch("Cart/CartAll/CartProductDeleteNotOffers");
    },
  },
};
</script>
