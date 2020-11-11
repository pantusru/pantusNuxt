<template>
  <div>
    <ImgModal/>
    <b-table
      class="mt-4 text-center"
      :fields="fields"
      :items="CartProduct"
      bordered
      hover
      thead-class="bg-light"
    >
      <template v-slot:cell(brand)="data">
        {{ data.item.ProductCard.brand.name }}
      </template>
      <template v-slot:cell(sku)="data">
        {{ data.item.ProductCard.sku.original }}
      </template>
      <template v-slot:cell(name)="data">
        {{ data.item.ProductCard.name }}
      </template>
      <template v-slot:cell(img)="data">
        <div v-if="data.item.ProductCard.ProductCardImage.url">
          <b-icon-camera-fill
            class="cursor-pointer"
            @click="ModalImg(data.item)"
          ></b-icon-camera-fill>
        </div>
      </template>
      <template v-slot:cell(price)="data">
        {{ data.item.ProductOffer.prices }} Р
      </template>
      <template v-slot:cell(supplier)="data">
        {{ data.item.ProductOffer.supplier.name }}
      </template>
      <template v-slot:cell(quantity)="data">
        {{ data.item.ProductOffer.quantity }}
      </template>
      <template v-slot:cell(count)="data">
        <vInput :multiplicity="data.item.ProductOffer.multiplicity"
        :AddClassInput="'p-0 col-12 col-lg-4'"
        :AddClassForm="'justify-content-center'" :kolvoProps="data.item.kolvo"
        :showIcon="true"
        :array="data.item" @kolvo="Setkolvo" />
      </template>
      <template v-slot:cell(symma)="data">
        {{ Number(data.item.kolvo) * data.item.ProductOffer.prices }} Р
      </template>
      <template v-slot:cell(Delete)="data">
        <DeleteCart :index="data.index" />
      </template>
    </b-table>
  </div>
</template>

<script>
import DeleteCart from "@/components/cart/button/cart-button-delete";
import ImgModal from "@/components/modal/product-img";
import vInput from "@/components/products/input/kolvo";
import mixinsEmit from "@/mixins/input/count-product/emit"
import mixinsImg from "@/mixins/modal/product-img"
export default {
  mixins:[mixinsEmit,mixinsImg],
  data() {
    return {
      fields: [
        { key: "brand", label: "Брэнд" },
        { key: "sku", label: "Артикул" },
        { key: "name", label: "Название товара" },
        { key: "img", label: "" },
        { key: "supplier", label: "Поставщик" },
        { key: "price", label: "Цена" },
        { key: "quantity", label: "Остаток, шт" },
        { key: "count", label: "Кол-во, шт" },
        { key: "symma", label: "Сумма" },
        { key: "Delete", label: "" },
      ],
    };
  },
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
  components: {
    vInput,
    ImgModal,
    DeleteCart,

  },
};
</script>
