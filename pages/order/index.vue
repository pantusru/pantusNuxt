<template>
  <b-container>
    <h3 class="mb-4 mb-lg-5">Мой заказ</h3>
    <b-row>
      <b-col cols="12" lg="6" class="mb-3 mb-lg-0">
        <h5 class="mb-2">Контактное лицо</h5>
        <Contact :$v="$v" class="pr-5" />
      </b-col>
      <b-col cols="12" lg="6">
        <h3 class="mb-2">Способ оплаты</h3>
        <Payment :$v="$v" :error="error" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="6" class="mt-lg-5 mt-3">
        <h3 class="mb-3">Способ доставки</h3>
        <Dostavka :$v="$v" :error="error" />
      </b-col>
      <b-col cols="6" class="mt-lg-5 mt-3">
        <Product :$v="$v" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import mixitError from "@/mixins/form/order/contact/error";
import mixitValid from "@/mixins/form/order/contact/validator";
import Contact from "@/components/order/form/contact";
import Payment from "@/components/order/form/payment";
import Dostavka from "@/components/order/form/dostavka";
import Product from "@/components/order/form/product";
import Mixin from "@/mixins/order-riles/index";

export default {
  components: {
    Contact,
    Payment,
    Dostavka,
    Product,
  },
  mixins: [mixitValid, Mixin, mixitError],
  middleware: ["order-check-count-product", "CheckGuest"],
  async fetch({ store }) {
    await Promise.all([
      store.dispatch("Order/Payment/Index/_Payment"),
      store.dispatch("Order/Payment/Index/_Dostavka"),
      store.dispatch("Order/Payment/Index/ActionRiles"),
    ]);
  },
  // created() {},
};
</script>
