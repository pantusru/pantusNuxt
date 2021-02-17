<template>
  <div>
    <!--          :fields="fields"
      :items="CartProduct"
      bordered
      hover
      thead-class="bg-light"-->
    <ImgModal />
    <b-table-simple class="mt-4 text-center">
      <b-thead>
        <b-tr>
          <b-th>Брэнд</b-th>
          <b-th>Артикул</b-th>
          <b-th>Название товара</b-th>
          <b-th />
          <b-th>Поставщик</b-th>
          <b-th>Цена</b-th>
          <b-th>Остаток, шт</b-th>
          <b-th>Количество, шт</b-th>
          <b-th>Сумма</b-th>
          <b-th />
        </b-tr>
      </b-thead>
      <b-tbody>
        <template v-for="(table, index) in CartProduct">
          <b-tr :key="table.ProductCard.id" class="hover-true">
            <table-product-cart-td
              class="w-15 border-bottom"
              :length-offer="table.productOffer.length"
            >
              <span class="text-576b77 font-weight-bold"
                >{{ table.ProductCard.brand.name }}
              </span>
            </table-product-cart-td>

            <table-product-cart-td
              class="w-15 border-bottom"
              :length-offer="table.productOffer.length"
            >
              <span class="text-576b77 reset-title">
                {{ table.ProductCard.sku.original }}
              </span>
            </table-product-cart-td>

            <table-product-cart-td
              class="w-15 border-bottom"
              :length-offer="table.productOffer.length"
            >
              <span
                :title="table.ProductCard.name"
                class="text-576b77 reset-title"
              >
                {{ table.ProductCard.name }}
              </span>
            </table-product-cart-td>

            <table-product-cart-td
              class="border-bottom"
              :length-offer="table.productOffer.length"
            >
              <b-icon-camera-fill
                v-if="table.ProductCard.ProductCardImage.url"
                class="cursor-pointer"
                @click="ModalImg(table)"
              />
            </table-product-cart-td>
          </b-tr>
          <template v-if="table.productOffer.length !== 0">
            <b-tr
              v-for="(offer, indexOffer) in table.productOffer"
              :key="offer.id"
              class="hover-true border-bottom"
            >
              <b-td class="border-top-0 text-555">{{
                offer.supplier.name
              }}</b-td>
              <b-td
                class="border-top-0 text-555 fz-5 font-weight-bold text-nowrap"
                >{{ offer.prices }} Р</b-td
              >
              <availability-offers
                class="border-top-0"
                component="b-td"
                :link-offers="offer"
                :link-product="table.ProductCard"
              />
              <b-td class="border-top-0 w-15">
                <vInput
                  :multiplicity="offer.multiplicity"
                  :add-class-input="'p-0'"
                  :add-class-form="'justify-content-center'"
                  :count-props="offer.Count"
                  :show-icon="true"
                  :array="offer"
                  @Count="SetCount($event, offer)"
                />
              </b-td>
              <b-td class="border-top-0">
                {{ (Number(offer.Count) * offer.prices).toFixed(2) }}
                Р
              </b-td>
              <b-td class="border-top-0">
                <DeleteCart
                  :id="offer.id"
                  :index="indexOffer"
                  :cart-product="table.productOffer"
                />
              </b-td>
              <!--              <b-td class="border-top-0">-->
              <!--                <cart-button-update-product-->
              <!--                  v-if="offer.checkCount"-->
              <!--                  :linkOffer="offer"-->
              <!--                />-->
              <!--              </b-td>-->
            </b-tr>
          </template>
        </template>
      </b-tbody>
    </b-table-simple>
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
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
};
</script>
<style>
.w-15 {
  width: 15%;
}
</style>
