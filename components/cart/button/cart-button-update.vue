<template>
  <base-button text="Обновить корзину" @click.once="updateCart" />
</template>

<script>
import BaseButton from "@/components/base/button/base-button";
import mixin from "@/mixins/cart-set/index";
export default {
  name: "CartButtonUpdate",
  components: { BaseButton },
  mixins: [mixin],
  // computed: {
  //   CartProduct() {
  //     return this.$store.getters["Cart/CartAll/GetCartProduct"];
  //   },
  // },
  // methods: {
  //   async updateCart() {
  //     const arr = [];
  //     for (const product in this.CartProduct) {
  //       for (const offer in this.CartProduct[product].productOffer) {
  //         arr.push({
  //           id: this.CartProduct[product].productOffer[offer].id,
  //           quantity: this.CartProduct[product].productOffer[offer].Count,
  //         });
  //       }
  //     }
  //     const data = await this.$store.dispatch(
  //       "Cart/axios/_CartProductPutAll",
  //       arr
  //     );
  //     if (data.error === undefined) {
  //       this.$store.commit("Cart/CartAll/SetCartProduct", data);
  //     }
  //     this.$store.commit("Cart/CartAll/SetCartActual");
  //   },
  // },
};
</script>
