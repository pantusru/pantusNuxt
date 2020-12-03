<template>
  <div
    class="text-my-body text-decoration-none cursor-pointer"
    @click="set_order_cart"
  >
    Скопировать заказ в корзину
  </div>
</template>

<script>
export default {
  name: "order-button-copy-cart",
  props: {
    id_order: {
      type: Number,
      request: true,
    },
  },
  methods: {
    set_order_cart() {
      console.log(this.id_order);
    },
  },
};
</script>

<style scoped></style>
