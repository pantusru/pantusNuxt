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
        <order-form-city
          :zip="formDataRetail.zip.value"
          :$v="formDataRetail.city"
          @value="ValidateInput(formDataRetail.city).onSwitch($event)"
          @zip="ValidateInput(formDataRetail.zip).onSwitch($event)"
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
        @zip="ValidateInput(formDataRetail.zip).onSwitch($event)"
        @deliverySumma="
          ValidateInput(formDataRetail.deliverySumma).onSwitch($event)
        "
      />
      <order-form-product :delivery="formDataRetail.deliverySumma.value" />
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
import OrderFormCity from '~/components/orders/form-orders/order-form-city.vue'
import OrderFormProduct from '~/components/orders/form-orders/order-form-product.vue'

export default {
  name: 'PageOrder',
  components: {
    OrderFormProduct,
    OrderFormCity,
    OrderFormDelivery,
    OrderFormPayment,
    BaseInput,
  },
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
@import "assets/sass/order/form/order-form"
</style>
