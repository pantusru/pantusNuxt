<template>
  <b-table-simple
    v-if="CartProduct.length > 0"
    class="text-center dropdown-cart d-none d-md-table"
  >
    <b-thead>
      <tr>
        <th>
          Артикуль <br />
          Наименование
        </th>
        <th>Цена</th>
        <th>Кол-во</th>
        <th></th>
      </tr>
    </b-thead>
    <b-tbody>
      <template v-for="(dataset, index) in CartProduct">
        <tr :key="dataset.id">
          <td class="w-50">
            <span
              class="reset-title reset-title-line-2 mb-1"
              :title="dataset.ProductCard.sku.original"
              >{{ dataset.ProductCard.sku.original }}</span
            >
            <span
              :title="dataset.ProductCard.name"
              class="reset-title reset-title-line-2"
              >{{ dataset.ProductCard.name }}</span
            >
          </td>
          <td>{{ dataset.ProductOffer.prices }} Р</td>
          <td>{{ dataset.Count }}</td>
          <td><DeleteCart :index="index" /></td>
        </tr>
      </template>
    </b-tbody>
  </b-table-simple>
  <!--  <b-table-->
  <!--    v-if="CartProduct.length > 0"-->
  <!--    class="text-center dropdown-cart d-none d-md-table" -->
  <!--    :fields="fields"-->
  <!--    :items="CartProduct"-->
  <!--    hover-->
  <!--    thead-class=""-->
  <!--  >-->
  <!--    <template #cell(sku)="data">-->
  <!--      <div class="w-15">-->
  <!--        <div class="reset-title">-->
  <!--          {{ data.item.ProductCard.sku.original }}-->
  <!--        </div>-->
  <!--        <div class="reset-title">-->
  <!--          {{ data.item.ProductCard.name }}-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </template>-->

  <!--    <template #cell(price)="data">-->
  <!--      {{ data.item.ProductOffer.prices }} Р  -->
  <!--    </template>-->

  <!--    <template #cell(count)="data">-->
  <!--      <div>{{ data.item.Count }}</div>-->
  <!--    </template>-->
  <!--    <template #cell(Delete)="data">-->
  <!--      <DeleteCart :index="data.index" />-->
  <!--    </template>-->
  <!--  </b-table>-->
</template>

<script>
import DeleteCart from "@/components/cart/button/cart-button-delete";
export default {
  name: "dropdown-cart",
  data() {
    return {
      fields: [
        { key: "sku", label: "Артикуль" + "\r\n" + "Наименование" },
        { key: "price", label: "Цена" },
        { key: "count", label: "Кол-во, шт" },
        { key: "Delete", label: "" }
      ]
    };
  },
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    }
  },
  components: {
    DeleteCart
  }
};
</script>

<style>
.dropdown-cart {
  padding: 20px;
  top: 43px;
  width: 400px;
  position: absolute;
  right: -69%;
  z-index: 10;
  background-color: #fff;
}
.dropdown-cart th {
  border-top: 0 !important;
  border-bottom: 0 !important;
}
</style>
