<template>
  <b-table-simple class="text-center fz-5_5">
    <PanelVid :CheckAnalogs="CheckAnalogs" />
    <b-tbody>
      <template v-for="table in array">
        <b-tr :key="table.ProductCard.id" class="hover-true">
          <b-td
            :rowspan="table.productOffer.length + 1"
            :class="{ 'd-none d-sm-table-cell': CheckAnalogs }"
          >
            <nuxt-link
              class="text-576b77 link-danger font-weight-bold"
              :to="
                'search?filter_brands=' + table.ProductCard.brand.id.toString()
              "
              >{{ table.ProductCard.brand.name }}
            </nuxt-link>
          </b-td>
          <b-td :rowspan="table.productOffer.length + 1" class="w-15">
            <nuxt-link
              class="text-576b77 link-danger reset-title"
              :to="'product/' + table.ProductCard.id.toString()"
            >
              {{ table.ProductCard.sku.original }}
            </nuxt-link>
          </b-td>
          <b-td
            :rowspan="table.productOffer.length + 1"
            v-if="CheckAnalogs === false"
            class="d-none d-md-table-cell"
          >
            <div class="w-50px">
              <ImgGetModal :product="table" />
            </div>
          </b-td>
          <!--          <b-td class="position-absolute border-0 p-0 pt-3">-->
          <!--            <Chosen-->
          <!--              v-if="CheckAnalogs === false && CheckUser === true"-->
          <!--              :link="table"-->
          <!--              :id="table.ProductCard.id"-->
          <!--            />-->
          <!--          </b-td>-->
          <b-td
            class="w-15"
            :rowspan="table.productOffer.length + 1"
            :class="{ 'd-none d-sm-table-cell': CheckAnalogs }"
          >
            <nuxt-link
              :title="table.ProductCard.name"
              class="text-576b77 link-danger reset-title"
              :to="'product/' + table.ProductCard.id.toString()"
            >
              {{ table.ProductCard.name }}
            </nuxt-link>
          </b-td>
        </b-tr>
        <template v-if="table.productOffer.length !== 0">
          <b-tr
            class="hover-true border-bottom"
            v-for="offer in table.productOffer"
            :key="offer.id"
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
            <b-td class="border-top-0 text-555 fz-5 font-weight-bold"
              >{{ offer.prices }} Р</b-td
            >
            <b-td class="border-top-0">
              <BuyButton :LinkOffer="offer" :LinkProduct="table.ProductCard" />
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
import AvailabilityOffers from "@/components/products/product/element/availability-offers"; // Кнопка открыть модалку купить товар
export default {
  components: {
    AvailabilityOffers,
    BuyButton,
    Chosen,
    PanelVid,
    ImgGetModal
  },
  props: {
    array: {},
    CheckAnalogs: {
      default: false
    }
  },
  computed: {
    CheckUser() {
      return this.$store.getters["User/CheckUser"];
    }
  }
};
</script>

<style>
.hover-true:hover .d-none-chosen {
  display: block !important;
}
</style>
