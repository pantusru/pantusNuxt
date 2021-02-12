<template>
  <b-table-simple
    v-if="CartProduct.length > 0"
    class="text-center dropdown-cart d-none d-md-table"
  >
    <b-thead>
      <tr class="border-bottom">
        <th>
          Артикуль <br />
          Наименование
        </th>
        <th>Цена</th>
        <th>Кол-во</th>
        <th />
      </tr>
    </b-thead>
    <b-tbody>
      <template v-for="(dataset, index) in CartProduct.slice(0, 5)">
        <tr :key="dataset.id">
          <td class="w-50 border-0" :rowspan="dataset.productOffer.length + 1">
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
        </tr>
        <template v-for="offers in dataset.productOffer">
          <tr>
            <td class="border-0">{{ offers.prices }} Р</td>
            <td class="border-0">{{ offers.Count }}</td>
            <td class="border-0">
              <DeleteCart
                :id="offers.id"
                :cart-product="dataset.productOffer"
                :index="index"
              />
            </td>
          </tr>
        </template>
      </template>
    </b-tbody>
  </b-table-simple>
</template>

<script>
import DeleteCart from "@/components/cart/button/cart-button-delete";
export default {
  name: "DropdownCart",
  components: {
    DeleteCart,
  },
  data() {
    return {
      fields: [
        { key: "sku", label: "Артикуль" + "\r\n" + "Наименование" },
        { key: "price", label: "Цена" },
        { key: "count", label: "Кол-во, шт" },
        { key: "Delete", label: "" },
      ],
    };
  },
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
};
</script>

<style>
.dropdown-cart {
  padding: 20px;
  top: 30px;
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
