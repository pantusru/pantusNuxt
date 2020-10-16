<template>
  <div class="mt-4">
    <!--  компонент -->
    <div class="mb-3" v-for="data in MyOrder" :key="data.id">
      <div class="d-flex justify-content-between">
        <div>
          <h4 class="mb-2 text-decoration">
            Заказ №<span> {{ data.id }} </span>
          </h4>
          <time datetime=" 24.09.2020 " class="d-block">
            {{ data.dates.created }}
          </time>
          <nuxt-link class="text-my-body text-decoration-none" to=""
            >Скопировать заказ в корзину</nuxt-link
          >
        </div>
        <div>
          <div class="mb-2">
            <b>Статус заказа:</b><span> {{ data.status.name }} </span>
          </div>
          <nuxt-link to="">Отменить заказ</nuxt-link>
        </div>
      </div>
      <b-table-simple class="mt-4">
        <b-thead>
          <b-tr>
            <b-th>Артикул</b-th>
            <b-th>Наименование</b-th>
            <b-th>Цена</b-th>
            <b-th>Кол-во, шт</b-th>
            <b-th>Сумма</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="offer in data.offers" :key="offer.id">
            <b-td></b-td>
            <b-td>{{offer.name}}</b-td>
            <b-td>{{offer.price}} </b-td>
            <b-td> {{offer.quantity}}</b-td>
            <b-td>{{offer.price * offer.quantity}} </b-td>
          </b-tr>
          <b-tr><b-td>Стоимость товаров: {{ data.price - data.delivery.price }}р </b-td></b-tr>
          <b-tr
            ><b-td>Доставка: {{ data.delivery.price }} р </b-td></b-tr>
          <b-tr><b-td>Итого: {{data.price}} р</b-td></b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
    <!--  компонент -->
  </div>
</template>

<script>
export default {
  computed: {
    MyOrder() {
      return this.$store.getters["MyOrder/GetMyOrder"];
    },
  },
};
</script>

<style>
</style>