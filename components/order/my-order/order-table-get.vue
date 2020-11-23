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
    <b-tbody>
      <b-tr v-for="offer in data.offers" :key="offer.id">
        <b-td>{{ offer.guid }}</b-td>
        <b-td class="d-none d-md-table-cell width-td-name">{{
          offer.name
        }}</b-td>
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
</template>

<script>
export default {
  name: "order-table-get",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
