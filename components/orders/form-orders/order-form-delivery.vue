<template>
  <div class="">
    <h3 class="h3">Способ доставки <span class="text-error">*</span></h3>
    <template v-for="data in getOrderDelivery">
      <BaseRadio
        v-if="data.active"
        :id="'delivery-' + data.id"
        :key="data.id"
        :value-radio="data.id"
        :text="data.name"
        name="delivery"
        :validate-input="$v"
        @value="setCity($event)"
      />
    </template>
  </div>
</template>

<script lang="ts">
import BaseRadio from '~/components/base/input/base-radio.vue'
import { GetOrderForm } from '~/composition/orders/order-form/get-order-form'
import { OrderDelivery } from '~/composition/orders/order-form/order-delivery'

export default {
  name: 'OrderFormDelivery',
  components: { BaseRadio },
  props: {
    $v: {
      type: Object,
      require: true,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props: any, { emit }: { emit: Function }) {
    return { ...GetOrderForm(), ...OrderDelivery(emit) }
  },
}
</script>

<!--<style lang="sass"></style>-->
