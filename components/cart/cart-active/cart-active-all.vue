<template>
  <div v-if="!GetCartActiveAll" class="cart-active-wrapper">
    <b-icon-exclamation-circle id="cart-active-all" class="icons-cart-active" />
    <b-tooltip
      variant="danger"
      class="cart-active-tooltip"
      target="cart-active-all"
      >В вашей корзине присутствуют товары не доступные к покупке.
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "CartActiveAll",
  computed: {
    GetCartActiveAll() {
      return this.$store.getters["Cart/CartAll/GetCartActiveAll"];
    },
  },
};
</script>

<style lang="sass">
.icons-cart-active
  font-size: 25px
  color: #dc3545
  cursor: pointer
.cart-active-tooltip
  background: #dc3545
  color: #fff
</style>
