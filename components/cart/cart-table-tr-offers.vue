<template>
  <tr class="base-table-tr cart-table-tr">
    <td class="cart-table-td base-table-td" data-label="Поставщик">
      {{ offers.supplier.name }}
    </td>
    <td class="cart-table-td base-table-td" data-label="Остаток">
      {{ offers.quantity }}
    </td>
    <td class="cart-table-td base-table-td" data-label="Цена">
      {{ offers.prices }}
    </td>
    <td class="cart-table-td base-table-td" data-label="Количество">
      {{ offers.count }}
    </td>
    <product-symma
      data-label="Сумма"
      class="base-table-td"
      :component="'td'"
      :symma="offers.count * offers.prices"
    />
  </tr>
</template>

<script lang="ts">
import { PropType } from 'vue'
import ProductSymma from '~/components/products/element/product-symma.vue'
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
