<template>
  <button
    title="удалить"
    class="button link-hover-button cart-delete-offers"
    @click="cartDelete(id)"
  >
    X
  </button>
</template>

<script lang="ts">
import { CartDelete } from '~/composition/cart/cart-delete'

export default {
  name: 'CartDeleteOffers',
  props: {
    id: {
      type: Number,
    },
  },
  setup() {
    return { ...CartDelete() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/cart/cart-delete-offers"
</style>
