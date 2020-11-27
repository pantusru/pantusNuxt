<template>
  <b-table-simple
    bordered
    class="text-center table-offset-get"
    v-if="Linkoffset.length !== 0"
  >
    <b-thead>
      <b-tr>
        <b-th>Поставщик</b-th>
        <b-th class="d-none d-lg-table-cell">Наличие</b-th>
        <b-th class="d-none d-sm-table-cell">Срок</b-th>
        <b-th>Цена</b-th>
        <b-th></b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <template v-for="data in Linkoffset">
        <tr :key="data.id">
          <td>{{ data.supplier.name }}</td>
          <availability-offers
            component="td"
            class="d-none d-lg-table-cell"
            :link-product="LinkProduct"
            :link-offers="data"
          />
          <td class="d-none d-sm-table-cell">
            {{ data.supplier.deliveryDelayView }}
          </td>
          <td>{{ data.prices }}Р</td>
          <td>
            <BuyButton :LinkProduct="LinkProduct" :LinkOffer="data" />
          </td>
        </tr>
      </template>
    </b-tbody>
  </b-table-simple>
</template>

<script>
import BuyButton from "@/components/products/button/buy-index";
import AvailabilityOffers from "@/components/products/product/element/availability-offers";
export default {
  props: {
    Linkoffset: {},
    LinkProduct: {}
  },
  components: {
    AvailabilityOffers,
    BuyButton
  }
};
</script>
<style>
.table-offset-get td {
  padding: 0.75rem 0.55rem;
}
</style>
