<template>
  <div>
    <b-table-simple
      v-if="Linkoffset.length !== 0"
      bordered
      class="text-center table-offset-get"
    >
      <b-thead>
        <b-tr>
          <b-th>Поставщик</b-th>
          <b-th class="d-none d-lg-table-cell">Наличие</b-th>
          <b-th class="d-none d-sm-table-cell">Срок</b-th>
          <b-th v-if="TypeUser">Цена</b-th>
          <b-th />
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
            <td v-if="TypeUser">{{ data.prices }}Р</td>
            <td>
              <BuyButton :link-product="LinkProduct" :link-offer="data" />
            </td>
          </tr>
        </template>
      </b-tbody>
    </b-table-simple>
    <div v-else><span class="error fz-4">нет в продаже</span></div>
  </div>
</template>

<script>
import typeUser from "~/mixins/typeUser";
import BuyButton from "@/components/products/button/buy-index";
import AvailabilityOffers from "@/components/products/product/element/availability-offers";
export default {
  mixins: [typeUser],
  components: {
    AvailabilityOffers,
    BuyButton,
  },
  props: {
    Linkoffset: {},
    LinkProduct: {},
  },
};
</script>
<style>
.table-offset-get td {
  padding: 0.75rem 0.55rem;
}
</style>
