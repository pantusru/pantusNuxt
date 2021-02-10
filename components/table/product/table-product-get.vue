<template>
  <b-table-simple class="text-center fz-5_5">
    <PanelVid :check-analogs="CheckAnalogs" />
    <b-tbody>
      <template v-for="table in array">
        <b-tr :key="table.ProductCard.id" class="hover-true">
          <table-product-cart-td
            :length-offer="table.productOffer.length"
            :class="{ 'd-none d-sm-table-cell': CheckAnalogs }"
          >
            <nuxt-link
              class="text-576b77 link-danger font-weight-bold"
              :to="
                'search?filter_brands=' + table.ProductCard.brand.id.toString()
              "
              >{{ table.ProductCard.brand.name }}
            </nuxt-link>
          </table-product-cart-td>

          <table-product-cart-td
            class="w-15"
            :length-offer="table.productOffer.length"
          >
            <nuxt-link
              class="text-576b77 link-danger reset-title"
              :to="
                'products/' +
                table.ProductCard.id.toString() +
                '/' +
                table.ProductCard.sku.normalized +
                '-' +
                table.ProductCard.brand.code
              "
            >
              {{ table.ProductCard.sku.original }}
            </nuxt-link>
          </table-product-cart-td>
          <table-product-cart-td
            v-if="CheckAnalogs === false"
            class="d-none d-md-table-cell"
            :length-offer="table.productOffer.length"
          >
            <div class="w-50px">
              <ImgGetModal :product="table" />
            </div>
          </table-product-cart-td>
          <table-product-cart-td
            class="w-15"
            :class="{ 'd-none d-sm-table-cell': CheckAnalogs }"
            :length-offer="table.productOffer.length"
          >
            <nuxt-link
              :title="table.ProductCard.name"
              class="text-576b77 link-danger reset-title"
              :to="
                'products/' +
                table.ProductCard.id.toString() +
                '/' +
                table.ProductCard.sku.normalized +
                '-' +
                table.ProductCard.brand.code
              "
            >
              {{ table.ProductCard.name }}
            </nuxt-link>
          </table-product-cart-td>
          <!--          <b-td class="position-absolute border-0 p-0 pt-3">-->
          <Chosen
            v-if="CheckAnalogs === false && CheckUser === true"
            :id="table.ProductCard.id"
            class="position-absolute border-0 p-0 pt-3"
            :link="table"
          />
          <!--          </b-td>-->
        </b-tr>
        <template v-if="table.productOffer.length !== 0">
          <b-tr
            v-for="offer in table.productOffer"
            :key="offer.id"
            class="hover-true border-bottom"
          >
            <b-td class="border-top-0 text-555">{{ offer.supplier.name }}</b-td>
            <availability-offers
              class="border-top-0"
              :class="{ 'd-none d-md-table-cell': CheckAnalogs }"
              component="b-td"
              :link-offers="offer"
              :link-product="table.ProductCard"
            />
            <b-td class="border-top-0 text-555 d-none d-md-table-cell">{{
              offer.supplier.deliveryDelayView
            }}</b-td>
            <b-td
              class="border-top-0 text-555 fz-5 font-weight-bold text-nowrap"
              >{{ offer.prices }} Р</b-td
            >
            <b-td class="border-top-0">
              <BuyButton
                :link-offer="offer"
                :link-product="table.ProductCard"
                class="text-nowrap"
              />
            </b-td>
          </b-tr>
        </template>
        <b-tr v-else>
          <td>
            <span class="error fz-4 pl-2">нет в продаже</span>
          </td>
        </b-tr>
      </template>
    </b-tbody>
  </b-table-simple>
</template>

<script>
import ImgGetModal from "@/components/products/product/element/img";
import PanelVid from "@/components/search/product-panel/product-thead-get"; // Панель
import Chosen from "@/components/metka/chosen"; // Метка избранный товар
import BuyButton from "@/components/products/button/buy-index";
import AvailabilityOffers from "@/components/products/product/element/availability-offers";
import TableProductCartTd from "@/components/table/product/components/table-product-cart-td";
export default {
  components: {
    TableProductCartTd,
    AvailabilityOffers,
    BuyButton,
    Chosen,
    PanelVid,
    ImgGetModal,
  },
  props: {
    array: {},
    CheckAnalogs: {
      default: false,
    },
  },
  computed: {
    CheckUser() {
      return this.$store.getters["User/CheckUser"];
    },
  },
};
</script>

<style>
.hover-true:hover .d-none-chosen {
  display: block !important;
}
tbody tr:last-child {
  border-bottom: 0 !important;
}
</style>
