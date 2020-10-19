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
        <nuxt-link class="text-my-body text-decoration-none" to=""
          >Скопировать заказ в корзину</nuxt-link
        >
      </b-col>
      <b-col>
        <div class="mb-2">
          <b>Статус заказа:</b><span> {{ data.status.name }} </span>
        </div>
        <nuxt-link to="">Отменить заказ</nuxt-link>
      </b-col>
    </b-row>
    <b-button class="bg-transparent text-e1002b border-0 mt-2 pl-0" v-b-toggle="'myOrder' + data.id">Подробнее</b-button>
    <b-collapse :id="'myOrder' + data.id">
      <b-table-simple class="mt-4">
        <b-thead>
          <b-tr class="bg-fafafa">
            <b-th class="w-1rem">Артикул</b-th>
            <b-th class="d-none d-md-table-cell">Наименование</b-th>
            <b-th>Цена</b-th>
            <b-th>Кол-во</b-th>
            <b-th>Сумма</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="offer in data.offers" :key="offer.id">
            <b-td>{{ offer.guid }}</b-td>
            <b-td class="d-none d-md-table-cell width-td-name">{{ offer.name }}</b-td>
            <b-td>{{ offer.price }} </b-td>
            <b-td> {{ offer.quantity }}</b-td>
            <b-td>{{ offer.price * offer.quantity }} </b-td>
          </b-tr>
          <b-tr
            ><b-td :colspan="5" class="text-right"
              >Стоимость товаров: {{ data.price - data.delivery.price }}р
            </b-td></b-tr
          >
          <b-tr
            ><b-td :colspan="5" class="text-right"
              >Доставка: {{ data.delivery.price }} р
            </b-td></b-tr
          >
          <b-tr
            ><b-td :colspan="5" class="text-right"
              >Итого: {{ data.price }} р</b-td
            ></b-tr
          >
        </b-tbody>
      </b-table-simple>
    </b-collapse>
  </div>
  <!--  компонент -->
</template>

<script>
export default {
  props: {
    data: {},
  },
};
</script>

<style>
.width-td-name{
  width: 24rem;
}
</style>