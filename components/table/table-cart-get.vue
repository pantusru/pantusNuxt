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
        <template v-if="data.item !== undefined">
          <div>
            {{ data.item.ProductCard.brand.name }}
            <!--                         //data.item.ProductCard.brand.name-->
          </div>
        </template>
      </template>
      <template #cell(sku)="data">
        <template v-if="data.item !== undefined">
          <div class="reset-title">
            {{ data.item.ProductCard.sku.original }}
          </div>
        </template>
      </template>
      <template #cell(name)="data">
        {{ data.item.ProductCard.name }}
        <!--        data.item.ProductCard.name-->
      </template>
      <template #cell(img)="data">
        <div v-if="data.item.ProductCard.ProductCardImage.url">
          <b-icon-camera-fill
            class="cursor-pointer"
            @click="ModalImg(data.item)"
          />
        </div>
      </template>
      <template #cell(price)="data">
        {{ data.item.productOffer[0].prices }} Р
      </template>
      <template #cell(supplier)="data">
        {{ data.item.productOffer[0].supplier.name }}
        <!--                  //  -->
      </template>
      <template #cell(quantity)="data">
        <availability-offers
          component="div"
          :link-product="data.item.ProductCard"
          :link-offers="data.item.productOffer[0]"
        />
      </template>
      <template #cell(count)="data">
        <vInput
          :multiplicity="data.item.productOffer[0].multiplicity"
          :add-class-input="'p-0 col-12 col-lg-4'"
          :add-class-form="'justify-content-center'"
          :count-props="data.item.productOffer[0].Count"
          :show-icon="true"
          :array="data.item"
          @Count="SetCount($event, data.index)"
        />
      </template>
      <template #cell(symma)="data">
        {{
          (
            Number(data.item.productOffer[0].Count) *
            data.item.productOffer[0].prices
          ).toFixed(2)
        }}
        Р
      </template>
      <template #cell(Delete)="data">
        <DeleteCart :index="0" :cart-product="data.item.productOffer" />
      </template>
      <template #cell(Update)="data">
        <cart-button-update-product
          v-if="data.item.checkCount"
          :index="data.index"
        />
      </template>
    </b-table>
  </div>
  <!--  <div></div>-->
</template>

<script>
import DeleteCart from "@/components/cart/button/cart-button-delete";
import ImgModal from "@/components/modal/product-img";
import vInput from "@/components/products/input/product-input-count";
import mixinsEmit from "@/mixins/input/count-product/emit";
import mixinsImg from "@/mixins/modal/product-img";
import CartButtonUpdateProduct from "@/components/cart/button/cart-button-update-product";
import AvailabilityOffers from "@/components/products/product/element/availability-offers";
export default {
  components: {
    AvailabilityOffers,
    CartButtonUpdateProduct,
    vInput,
    ImgModal,
    DeleteCart,
  },
  mixins: [mixinsEmit, mixinsImg],
  data() {
    return {
      fields: [
        { key: "brand", label: "Брэнд", class: "w-15" },
        { key: "sku", label: "Артикул" },
        { key: "name", label: "Название товара", class: "w-15" },
        { key: "img", label: "" },
        { key: "supplier", label: "Поставщик" },
        { key: "price", label: "Цена", class: "text-nowrap" },
        { key: "quantity", label: "Остаток, шт" },
        { key: "count", label: "Кол-во, шт" },
        { key: "symma", label: "Сумма", class: "text-nowrap" },
        { key: "Delete", label: "" },
        { key: "Update", label: "" },
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
