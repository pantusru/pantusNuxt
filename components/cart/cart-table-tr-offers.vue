<template>
  <tr class="base-table-tr cart-table-tr">
    <td
      class="cart-table-td base-table-td cart-table-td-supplier"
      data-label="Поставщик"
    >
      {{ offers.supplier.name }}
    </td>
    <td class="cart-table-td base-table-td" data-label="Остаток">
      {{ offers.quantity }}
    </td>
    <td class="cart-table-td base-table-td" data-label="Цена">
      {{ offers.prices }} ₽
    </td>
    <td
      class="cart-table-td base-table-td cart-table-td-count"
      data-label="Количество"
    >
      <cart-count-offers :offers="offers" />
    </td>
    <product-symma
      data-label="Сумма"
      class="base-table-td"
      :component="'td'"
      :symma="offers.count * offers.prices"
    />
    <td class="base-table-td">
      <cart-delete-offers :id="offers.id" />
    </td>
    <td class="">
      <cart-offer-edit-count :offer="offers" />
    </td>
  </tr>
</template>

<script lang="ts">
import { PropType } from 'vue'
import ProductSymma from '~/components/products/element/product-symma.vue'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
import CartDeleteOffers from '~/components/cart/button/cart-delete-offers.vue'
import CartCountOffers from '~/components/cart/cart-count-offers.vue'
import CartOfferEditCount from '~/components/cart/button/cart-offer-edit-count.vue'
export default {
  name: 'CartTableTrOffers',
  components: {
    CartOfferEditCount,
    CartCountOffers,
    CartDeleteOffers,
    ProductSymma,
  },
  props: {
    offers: {
      type: Object as PropType<CartOfferInterface>,
    },
  },
}
</script>
