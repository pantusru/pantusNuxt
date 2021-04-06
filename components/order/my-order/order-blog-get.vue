<template>
  <!--  компонент -->
  <div class="mb-lg-5 mb-3">
    <b-row class="justify-content-between">
      <b-col cols="12" sm="6" class="mb-2 mb-lg-0">
        <h4 class="mb-2">
          <nuxt-link
            class="text-decoration text-body"
            :to="'/profile/orders/' + data.id"
          >
            Заказ №
            {{ data.id }}
          </nuxt-link>
        </h4>
        <time :datetime="data.dates.created" class="d-block">
          Дата: {{ data.dates.created }}
        </time>
        <!--        <order-button-copy-cart :id_order="data.id" />-->
      </b-col>
      <b-col>
        <div class="mb-2">
          <b>Статус заказа:</b><span> {{ data.status.name }} </span>
        </div>
        <!--        <order-button-cancel :data="data" />-->
      </b-col>
    </b-row>
    <span
      v-b-toggle="'myOrder' + data.id"
      to=""
      class="bg-transparent text-e1002b border-0 mt-2 pl-0"
      @click.prevent="myOrderOffers({ id: data.id, index })"
      >Подробнее
    </span>
    <b-collapse :id="'myOrder' + data.id">
      <order-table-get v-if="data.offers" :data="data" />
    </b-collapse>
  </div>
  <!--  компонент -->
</template>

<script>
import OrderTableGet from "@/components/order/my-order/order-table-get";
import OrderButtonCancel from "@/components/order/my-order/order-button-cancel";
import OrderButtonCopyCart from "@/components/order/my-order/order-button-copy-cart";

export default {
  components: { OrderButtonCopyCart, OrderButtonCancel, OrderTableGet },
  props: {
    data: {},
    index: {
      type: Number,
    },
  },
  methods: {
    async myOrderOffers(data) {
      await this.$store.dispatch("MyOrder/_MyOrderOffer", data);
    },
  },
};
</script>

<style>
.width-td-name {
  width: 24rem;
}
</style>
