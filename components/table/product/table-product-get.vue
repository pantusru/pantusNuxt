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
                '/search?filter_brands=' + table.ProductCard.brand.id.toString()
              "
              >{{ table.ProductCard.brand.name }}
            </nuxt-link>
          </table-product-cart-td>

          <table-product-cart-td
            class="w-15"
            :length-offer="table.productOffer.length"
          >
            <nuxt-link
              :title="table.ProductCard.sku.original"
              class="text-576b77 link-danger reset-title"
              :to="
                '/products/' +
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
            class="w-15 pr-2 position-relative"
            :class="{ 'd-none d-sm-table-cell': CheckAnalogs }"
            :length-offer="table.productOffer.length"
          >
            <nuxt-link
              :title="table.ProductCard.name"
              class="text-576b77 link-danger reset-title"
              :to="
                '/products/' +
                table.ProductCard.id.toString() +
                '/' +
                table.ProductCard.sku.normalized +
                '-' +
                table.ProductCard.brand.code
              "
            >
              {{ table.ProductCard.name }}
            </nuxt-link>
            <Chosen :id="table.ProductCard.id" :link="table" />
          </table-product-cart-td>
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
            <b-td class="border-top-0 text-555 d-none d-md-table-cell"
              >{{ offer.supplier.deliveryDelayView }}
            </b-td>
            <b-td
              class="border-top-0 text-555 fz-5 font-weight-bold text-nowrap"
              >{{ offer.prices }} Р
            </b-td>
            <b-td class="border-top-0 w-30px">
              <BuyButton
                :link-offer="offer"
                :link-product="table.ProductCard"
                class="text-nowrap"
              />
            </b-td>
          </b-tr>
        </template>
        <template v-else>
          <b-tr class="hover-true border-bottom">
            <b-td class="border-top-0 text-555">
              <span class="pl-2 text-offers-none">Нет в продаже</span>
            </b-td>

            <b-td class="border-top-0 text-555"> - </b-td>

            <b-td class="border-top-0 text-555 d-none d-md-table-cell">
              -
            </b-td>
            <b-td class="border-top-0 text-555"> - </b-td>
            <b-td class="border-top-0 w-30px">
              <div class="d-lg-flex d-none justify-content-end">
                <!--                    <base-button text="Купить"  class="btn-outline-secondary btn-secondary bg-secondary py-1 px-2 "/>-->
                <b-button disabled variant="danger" class="_baseBnt py-1 px-2"
                  >Купить</b-button
                >
              </div>
            </b-td>
          </b-tr>
        </template>
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
import BaseButton from "@/components/base/button/base-button";
export default {
  components: {
    BaseButton,
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
.w-30px {
  width: 30px;
}

.table th,
.table td {
  vertical-align: middle;
  padding: 3px 0;
}

.table thead th {
  vertical-align: middle;
}

.text-offers-none {
  color: #8e8f9a;
}

.box-offers-none {
  position: relative;
  top: -16px;
}
</style>
