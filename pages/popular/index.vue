<template>
  <div>{{ getProductsPopular }}</div>
</template>

<script lang="ts">
import { PageProductsPopular } from '~/composition/products/page-products-popular'

export default {
  name: 'PagePopular',
  setup() {
    return { ...PageProductsPopular() }
  },
}
</script>
