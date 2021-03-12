<template>
  <div class="container">{{ getCart }}</div>
</template>

<script lang="ts">
import { PageCart } from '~/composition/cart/page-cart'

export default {
  name: 'PageCart',
  setup() {
    return { ...PageCart() }
  },
}
</script>

<!--<style scoped></style>-->
