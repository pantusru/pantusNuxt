<template>
  <div class="container">
    <h1 class="h1">Мой заказ</h1>
    <form class="order-form">
      <div class="order-form-items">
        <h3 class="h3">Контактное лицо</h3>
        <base-input
          text="Фамилия"
          :validate-input="formDataRetail.surname"
          @value="ValidateInput(formDataRetail.surname).onSwitch($event)"
        />
        <base-input
          text="Имя"
          :validate-input="formDataRetail.name"
          @value="ValidateInput(formDataRetail.name).onSwitch($event)"
        />
        <base-input
          mask="+# (###) ###-##-##"
          text="Номер телефона"
          :validate-input="formDataRetail.telephone"
          @value="ValidateInput(formDataRetail.telephone).onSwitch($event)"
        />
      </div>
      <order-form-payment
        class="order-form-items"
        :$v="formDataRetail.payment"
        @value="ValidateInput(formDataRetail.payment).onSwitch($event)"
      />
      <order-form-delivery
        class="order-form-items"
        :$v="formDataRetail.delivery"
        @value="ValidateInput(formDataRetail.delivery).onSwitch($event)"
        @city="ValidateInput(formDataRetail.city).onSwitch($event)"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { OrderForm } from '~/composition/orders/order-form/order-form'
import BaseInput from '~/components/base/input/base-input.vue'
import { ValidateInput } from '~/composition/_validate/validate-input'
import { PageOrderForm } from '~/composition/orders/order-form/page-order-form'
import OrderFormPayment from '~/components/orders/form-orders/order-form-payment.vue'
import { GetOrderForm } from '~/composition/orders/order-form/get-order-form'
import OrderFormDelivery from '~/components/orders/form-orders/order-form-delivery.vue'

export default {
  name: 'PageOrder',
  components: { OrderFormDelivery, OrderFormPayment, BaseInput },
  setup() {
    return {
      ...OrderForm(),
      ValidateInput,
      ...PageOrderForm(),
      ...GetOrderForm(),
    }
  },
}
</script>
<style lang="sass">
@import "assets/sass/order/order-form"
</style>
