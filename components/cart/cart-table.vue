<template>
  <table class="cart-table base-table">
    <thead class="base-table-thead">
      <tr class="base-table-tr-th">
        <th class="cart-table-th base-table-th">Брэнд</th>
        <th class="cart-table-th base-table-th">Артикул</th>
        <th class="cart-table-th base-table-th">Название товара</th>
        <th class="cart-table-th base-table-th">Поставщик</th>
        <th class="cart-table-th base-table-th">Остаток</th>
        <th class="cart-table-th base-table-th">Цена</th>
        <th class="cart-table-th base-table-th">Количество</th>
        <th class="cart-table-th base-table-th">Сумма</th>
        <th class="cart-table-th base-table-th"></th>
        <th class="cart-table-th base-table-th"></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in cart">
        <tr :key="data.productCard.id" class="cart-table-tr base-table-tr">
          <td
            data-label="Брэнд"
            :rowspan="data.productOffer.length"
            class="base-table-td cart-table-td"
          >
            {{ data.productCard.brand.name }}
          </td>
          <td
            data-label="Артикул"
            :rowspan="data.productOffer.length"
            class="cart-table-td base-table-td"
          >
            {{ data.productCard.sku.original }}
          </td>
          <td
            data-label="Название товара"
            :rowspan="data.productOffer.length"
            class="cart-table-td cart-table-td-name base-table-td"
          >
            {{ data.productCard.name }}
          </td>
          <template v-if="data.productOffer.length > 0">
            <td
              class="cart-table-td base-table-td cart-table-td-supplier"
              data-label="Поставщик"
            >
              {{ data.productOffer[0].supplier.name }}
            </td>
            <td class="cart-table-td base-table-td" data-label="Остаток">
              {{ data.productOffer[0].quantity }}
            </td>
            <td class="cart-table-td base-table-td" data-label="Цена">
              {{ data.productOffer[0].prices }} ₽
            </td>
            <td
              data-label="Количество"
              class="cart-table-td base-table-td cart-table-td-count"
            >
              <cart-count-offers :offers="data.productOffer[0]" />
            </td>
            <product-symma
              data-label="Сумма"
              class="base-table-td"
              :component="'td'"
              :symma="data.productOffer[0].count * data.productOffer[0].prices"
            />
            <td class="base-table-td">
              <cart-delete-offers :id="data.productOffer[0].id" />
            </td>
            <td class="">
              <cart-offer-edit-count :offer="data.productOffer[0]" />
            </td>
          </template>
        </tr>
        <template v-if="data.productOffer.length > 1">
          <CartTableTrOffers
            v-for="offers in data.productOffer.slice(1)"
            :key="offers.id"
            :offers="offers"
          />
        </template>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CartInterface } from '~/interface/cart/cart.interface'
import CartTableTrOffers from '~/components/cart/cart-table-tr-offers.vue'
import ProductSymma from '~/components/products/element/product-symma.vue'
import CartDeleteOffers from '~/components/cart/cart-delete-offers.vue'
import CartCountOffers from '~/components/cart/cart-count-offers.vue'
import CartOfferEditCount from "~/components/cart/cart-offer-edit-count.vue";
export default {
  name: 'CartTable',
  components: {
    CartOfferEditCount,
    CartCountOffers,
    CartDeleteOffers,
    ProductSymma,
    CartTableTrOffers,
  },
  props: {
    cart: {
      type: Array as PropType<CartInterface[]>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/base-table"
@import "assets/sass/cart/cart-table"
</style>
