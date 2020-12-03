<template>
  <!--  компонент -->
  <div class="mb-lg-5 mb-3">
    <b-row class="justify-content-between">
      <b-col cols="12" sm="6" class="mb-2 mb-lg-0">
        <h4 class="mb-2 text-decoration">
          Заказ №<span> {{ data.id }} </span>
        </h4>
        <time :datetime="data.dates.created" class="d-block">
          Дата: {{ data.dates.created }}
        </time>
        <order-button-copy-cart :id_order="data.id" />
      </b-col>
      <b-col>
        <div class="mb-2">
          <b>Статус заказа:</b><span> {{ data.status.name }} </span>
        </div>
        <order-button-cancel :data="data"></order-button-cancel>
      </b-col>
    </b-row>
    <b-button
      class="bg-transparent text-e1002b border-0 mt-2 pl-0"
      v-b-toggle="'myOrder' + data.id"
      >Подробнее
    </b-button>
    <b-collapse :id="'myOrder' + data.id">
      <order-table-get :data="data"></order-table-get>
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
  },
};
</script>

<style>
.width-td-name {
  width: 24rem;
}
</style>
