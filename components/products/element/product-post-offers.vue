<template>
  <button class="button link-hover-button" @click="cartPostOffers(id, count)">
    Купить
  </button>
</template>

<script lang="ts">
import { CartPostOffers } from '~/composition/cart/cart-post-offers'

export default {
  name: 'ProductPostOffers',
  props: {
    count: {
      type: Number,
    },
    id: {
      type: Number,
    },
  },
  setup() {
    return { ...CartPostOffers() }
  },
}
</script>

<!--<style scoped></style>-->
