<template>
  <div class="order-form-product">
    <div class="order-form-product-summa">Товары: {{ summa }} р</div>
    <div class="order-form-product-delivery">Доставка: {{ delivery }} р</div>
  </div>
</template>

<script lang="ts">
import { OrderProduct } from '~/composition/orders/order-form/order-product'

export default {
  name: 'OrderFormProduct',
  props: {
    delivery: {
      type: Number || null,
    },
  },
  setup() {
    return { ...OrderProduct() }
  },
}
</script>

<!--<style scoped></style>-->
