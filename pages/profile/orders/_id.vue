<template>
  <b-container>
    <b-row>
      <NavProfile />
      <div v-if="GetMyOrderId" class="col-12 col-lg-10">
        <div class="order-name">
          Заказ {{ GetMyOrderId.id }} от {{ GetMyOrderId.dates.created }}
        </div>
        <order-id-row
          text="Текущий статус:"
          :value="GetMyOrderId.status.name"
        />
        <order-id-row text="Цена:	" :value="GetMyOrderId.price" />
        <b class="mt-4 d-block fz-15px">Параметры заказа </b>
        <order-id-row
          text="Тип плательщика:"
          :value="GetMyOrderId.payerType.name"
        />
        <b class="mt-4 d-block fz-15px">Контактное лицо</b>
        <order-id-row text="Фамилия:" :value="GetMyOrderId.user.nameFirst" />
        <order-id-row text="Имя:" :value="GetMyOrderId.user.nameLast" />
        <order-id-row
          text="Мобильный телефон:"
          :value="GetMyOrderId.user.phone"
        />
        <order-id-row text="Город:" :value="GetMyOrderId.address.city" />
        <order-id-row text="Адрес:" :value="GetMyOrderId.address.detailed" />
        <b class="mt-4 d-block fz-15px"> Параметры доставки и оплаты</b>
        <order-id-row
          text="Платёжная система:"
          :value="GetMyOrderId.paysystem.name"
        />
        <order-id-row
          text="Служба доставки:"
          :value="GetMyOrderId.service.name"
        />
      </div>
      <div v-else><h2>Заказ не найден</h2></div>
    </b-row>
  </b-container>
</template>

<script>
import OrderIdRow from "@/components/order/my-order/order-id-row";
import NavProfile from "@/components/nav/profile/index";
export default {
  name: "OrderId",
  components: { NavProfile, OrderIdRow },
  middleware: "CheckGuest",
  async fetch({ store, params }) {
    await store.dispatch("MyOrder/_MyOrderId", params.id);
  },
  computed: {
    GetMyOrderId() {
      return this.$store.getters["MyOrder/GetMyOrderId"];
    },
  },
};
</script>

<style>
.order-name {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(227, 227, 227, 1) 100%
  );
  padding: 8px;
  font-size: 15px;
  font-weight: 700;
}
.fz-15px {
  font-size: 15px;
  color: #3d4345;
}
</style>
