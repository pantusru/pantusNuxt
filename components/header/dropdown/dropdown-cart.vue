<template>
  <b-table
    v-if="CartProduct.length > 0"
    class="text-center dropdown-cart d-none d-md-table"
    :fields="fields"
    :items="CartProduct"
    hover
    thead-class=""
  >
    <template #cell(sku)="data">
      <div>
        {{ data.item.ProductCard.sku.original }}
      </div>
      <div>
        {{ data.item.ProductCard.name }}
      </div>
    </template>

    <template #cell(price)="data">
      {{ data.item.ProductOffer.prices }} Р
    </template>

    <template #cell(count)="data">
      <div>{{ data.item.Count }}</div>
    </template>
    <template #cell(Delete)="data">
      <DeleteCart :index="data.index" />
    </template>
  </b-table>
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
