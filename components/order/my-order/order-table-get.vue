<template>
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
    <template v-if="data">
      <b-tbody>
        <b-tr v-for="offer in data.offers" :key="offer.id">
          <b-td class="w-15">{{ offer.guid }}</b-td>
          <b-td class="d-none d-md-table-cell width-td-name">{{
            offer.name
          }}</b-td>
          <b-td>{{ offer.price }} </b-td>
          <b-td> {{ offer.quantity }}</b-td>
          <b-td>{{ (offer.price * offer.quantity).toFixed(2) }} р </b-td>
        </b-tr>
        <b-tr>
          <b-td :colspan="5" class="text-right">
            Стоимость товаров:
            {{ (data.price - data.service.price).toFixed(2) }}р
          </b-td>
        </b-tr>
        <b-tr
          ><b-td :colspan="5" class="text-right"
            >Доставка: {{ data.service.price }} р
          </b-td></b-tr
        >
        <b-tr
          ><b-td :colspan="5" class="text-right"
            >Итого: {{ data.price }} р</b-td
          ></b-tr
        >
      </b-tbody>
    </template>
  </b-table-simple>
</template>

<script>
export default {
  name: "OrderTableGet",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
