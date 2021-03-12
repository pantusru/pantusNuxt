<template>
  <tr>
    <td class="cart-table-td base-table-td">
      {{ offers.supplier.name }}
    </td>
    <td class="cart-table-td base-table-td">
      {{ offers.quantity }}
    </td>
    <td class="cart-table-td base-table-td">
      {{ offers.prices }}
    </td>
    <td class="cart-table-td base-table-td">
      {{ offers.count }}
    </td>
    <product-symma
      class="base-table-td"
      :component="'td'"
      :symma="offers.count * offers.prices"
    />
  </tr>
</template>

<script lang="ts">
import { PropType } from 'vue'
import ProductSymma from '~/components/products/element/product-symma'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export default {
  name: 'CartTableTrOffers',
  components: { ProductSymma },
  props: {
    offers: {
      type: Object as PropType<CartOfferInterface>,
    },
  },
}
</script>
