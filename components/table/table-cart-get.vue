<template>
  <div>
    <ImgModal />
    <b-table
      class="mt-4 text-center"
      :fields="fields"
      :items="CartProduct"
      bordered
      hover
      thead-class="bg-light"
    >
      <template #cell(brand)="data">
        <template v-if="data.item !== undefined">{{
          data.item.ProductCard.brand.name
        }}</template>
      </template>
      <template #cell(sku)="data">
        <template v-if="data.item !== undefined">{{
          data.item.ProductCard.sku.original
        }}</template>
      </template>
      <template #cell(name)="data">
        {{ data.item.ProductCard.name }}
      </template>
      <template #cell(img)="data">
        <div v-if="data.item.ProductCard.ProductCardImage.url">
          <b-icon-camera-fill
            class="cursor-pointer"
            @click="ModalImg(data.item)"
          ></b-icon-camera-fill>
        </div>
      </template>
      <template #cell(price)="data">
        {{ data.item.ProductOffer.prices }} Р
      </template>
      <template #cell(supplier)="data">
        {{ data.item.ProductOffer.supplier.name }}
      </template>
      <template #cell(quantity)="data">
        <span class="text-00b91e" v-if="data.item.ProductOffer.quantity !== 0">
          {{ data.item.ProductOffer.quantity }}
          {{ data.item.ProductCard.params.measure }}
        </span>
        <span
          class="text-d2b77e"
          v-else-if="data.item.ProductCard.brand.deliveryDelay !== null"
        >
          Под заказ:
          {{ data.item.ProductCard.brand.deliveryDelay }} дней
        </span>
        <span v-else class="text-d2b77e">По запросу</span>
      </template>
      <template #cell(count)="data">
        <vInput
          :multiplicity="data.item.ProductOffer.multiplicity"
          :AddClassInput="'p-0 col-12 col-lg-4'"
          :AddClassForm="'justify-content-center'"
          :CountProps="data.item.Count"
          :showIcon="true"
          :array="data.item"
          @Count="SetCount($event, data.index)"
        />
      </template>
      <template #cell(symma)="data">
        {{ Number(data.item.Count) * data.item.ProductOffer.prices }} Р
      </template>
      <template #cell(Delete)="data">
        <DeleteCart :index="data.index" />
      </template>
      <template #cell(Update)="data">
        <cart-button-update-product
          :index="data.index"
          v-if="data.item.checkCount"
        ></cart-button-update-product>
      </template>
    </b-table>
  </div>
</template>

<script>
import DeleteCart from "@/components/cart/button/cart-button-delete";
import ImgModal from "@/components/modal/product-img";
import vInput from "@/components/products/input/product-input-count";
import mixinsEmit from "@/mixins/input/count-product/emit";
import mixinsImg from "@/mixins/modal/product-img";
import CartButtonUpdateProduct from "@/components/cart/button/cart-button-update-product";
export default {
  mixins: [mixinsEmit, mixinsImg],
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
        { key: "Update", label: "" }
      ]
    };
  },
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    }
  },
  components: {
    CartButtonUpdateProduct,
    vInput,
    ImgModal,
    DeleteCart
  }
};
</script>
