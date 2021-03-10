<template>
  <table class="order-offer-table">
    <thead>
      <tr class="orders-offer-tr">
        <th class="orders-offer-th">Артикул</th>
        <th class="orders-offer-th">Наименование</th>
        <th class="orders-offer-th">Цена</th>
        <th class="orders-offer-th">Кол-во</th>
        <th class="orders-offer-th orders-offer-left">Сумма</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in offers" :key="data.id" class="orders-offer-tr">
        <td class="orders-offer-td">{{ data.sku }}</td>
        <td class="orders-offer-td orders-offer-td-name">{{ data.name }}</td>
        <td class="orders-offer-td">{{ data.price }}</td>
        <td class="orders-offer-td">{{ data.quantity }}</td>
        <product-symma
          component="td"
          class="orders-offer-td orders-offer-left"
          :symma="data.price * data.quantity"
        />
      </tr>
      <tr class="orders-offer-tr">
        <td colspan="5" class="orders-offer-td orders-offer-left">
          Стоимость товаров: {{ getOrderId.price }} ₽
        </td>
      </tr>
      <tr class="orders-offer-tr">
        <td colspan="5" class="orders-offer-td orders-offer-left">
          Доставка: {{ getOrderId.delivery.price }} ₽
        </td>
      </tr>
      <tr class="orders-offer-tr">
        <td colspan="5" class="orders-offer-td orders-offer-left">
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
    offers: Array as PropType<OrdersIdOffersInterface>,
    getOrderId: {
      type: Object as PropType<OrdersIdInterface>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/order/page/order-table-offers"
</style>
