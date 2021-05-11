<template>
  <component :is="component">
    <span
      v-if="linkOffers.quantity > 0 && linkOffers.active"
      class="text-00b91e"
    >
      {{ linkOffers.quantity }}
      {{ linkProduct.params.measure }}
    </span>
    <!-- под заказ сколько дней -->
    <span
      v-else-if="linkProduct.brand.deliveryDelay != 0 && linkOffers.active"
      class="text-d2b77e"
    >
      Под заказ:
      {{ linkProduct.brand.deliveryDelay }} дн.
    </span>
    <!-- под запросу  -->
    <span v-else-if="linkOffers.active" class="text-d2b77e">По запросу</span>
  </component>
</template>

<script>
export default {
  name: "AvailabilityOffers",
  props: {
    component: {
      request: true,
      type: String,
    },
    linkProduct: {
      request: true,
      type: Object,
    },
    linkOffers: {
      request: true,
      type: Object,
    },
  },
};
</script>

<style scoped></style>
