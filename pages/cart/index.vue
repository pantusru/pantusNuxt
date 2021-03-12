<template>
  <div class="container">
    <CartTable :cart="getCart" />
  </div>
</template>

<script lang="ts">
import { PageCart } from '~/composition/cart/page-cart'
import CartTable from '~/components/cart/cart-table.vue'

export default {
  name: 'PageCart',
  components: { CartTable },
  setup() {
    return { ...PageCart() }
  },
}
</script>

<!--<style lang="sass">-->

<!--</style>-->
