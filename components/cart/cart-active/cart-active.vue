<template>
  <div class="cart-active-wrapper">
    <b-icon-exclamation-circle
      :id="'cart-active' + id"
      class="icons-cart-active"
    />
    <b-tooltip
      variant="danger"
      class="cart-active-tooltip"
      :target="'cart-active' + id"
      >К сожалению позиция от данного поставщика уже не доступна к покупке и не
      будет добавлена в Ваш заказ.
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "CartActive",
  props: {
    id: {
      type: String,
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
