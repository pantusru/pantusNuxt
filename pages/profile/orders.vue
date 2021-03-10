<template>
  <div class="container">
    <div class="row">
      <ProfileNav />
      <div class="orders-item col">
        <h1 class="h1">Мои заказы</h1>
        <orders-id v-for="data in getOrder" :key="data.id" :order="data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PageOrders } from '~/composition/orders/page-orders'
import ProfileNav from '~/components/profile/profile-nav.vue'
import OrdersId from '~/components/orders/orders-id.vue'

export default {
  name: 'PageOrder',
  components: { OrdersId, ProfileNav },
  setup() {
    return { ...PageOrders() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/order/order"
</style>
