<template>
  <table class="order-offer-table">
    <thead>
      <tr class="orders-offer-tr base-table-tr-th">
        <th class="orders-offer-th base-table-th">Артикул</th>
        <th class="orders-offer-th base-table-th">Наименование</th>
        <th class="orders-offer-th base-table-th">Цена</th>
        <th class="orders-offer-th base-table-th">Кол-во</th>
        <th class="orders-offer-th base-table-th orders-offer-right">Сумма</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in offers" :key="data.id" class="orders-offer-tr">
        <td class="orders-offer-td base-table-td">{{ data.sku }}</td>
        <td class="orders-offer-td base-table-td orders-offer-td-name">
          {{ data.name }}
        </td>
        <td class="orders-offer-td base-table-td">{{ data.price }}</td>
        <td class="orders-offer-td base-table-td">{{ data.quantity }}</td>
        <product-symma
          component="td"
          class="base-table-td orders-offer-td orders-offer-right"
          :symma="data.price * data.quantity"
        />
      </tr>
      <tr class="orders-offer-tr">
        <td
          colspan="5"
          class="base-table-td orders-offer-td orders-offer-right"
        >
          Стоимость товаров: {{ getOrderId.price }} ₽
        </td>
      </tr>
      <tr class="orders-offer-tr">
        <td
          colspan="5"
          class="base-table-td orders-offer-td orders-offer-right"
        >
          Доставка: {{ getOrderId.delivery.price }} ₽
        </td>
      </tr>
      <tr class="orders-offer-tr">
        <td
          colspan="5"
          class="base-table-td orders-offer-td orders-offer-right"
        >
          Итого: {{ getOrderId.price + getOrderId.delivery.price }} ₽
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {
  OrdersIdInterface,
  OrdersIdOffersInterface,
} from '@/interface/orders/orders-id.interface'
import ProductSymma from '~/components/products/element/product-symma.vue'

export default {
  name: 'OrderTableOffers',
  components: { ProductSymma },
  props: {
    offers: Array as PropType<OrdersIdOffersInterface[]>,
    getOrderId: {
      type: Object as PropType<OrdersIdInterface>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/base-table"
@import "assets/sass/order/page/order-table-offers"
</style>
