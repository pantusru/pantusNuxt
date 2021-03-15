<template>
  <div>
    <input
      class="base-input cart-count-offers-input"
      type="text"
      :value="offers.count"
      @input="cartCountOffers($event.target.value)"
      @blur="errorFalse($event.target.value)"
    />
    <div v-if="error.check" class="cart-count-offers-error">
      {{ error.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
import { CartCountOffers } from '~/composition/cart/cart-count-offers'

export default {
  name: 'CartCountOffers',
  props: {
    offers: {
      type: Object as PropType<CartOfferInterface>,
    },
  },
  setup(props: any) {
    return { ...CartCountOffers(props.offers) }
  },
}
</script>

<style lang="sass">
@import "assets/sass/cart/cart-count-offers"
@import "assets/sass/base/base-input"
</style>
