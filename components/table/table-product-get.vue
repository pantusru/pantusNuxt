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
              :to="'search?brand=' + table.ProductCard.brand.id.toString()"
              >{{ table.ProductCard.brand.name }}
            </nuxt-link>
          </b-td>
          <b-td :rowspan="table.productOffer.length + 1">
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
          <b-td
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
          <b-td class="position-absolute border-0 left-30">
            <Chosen
              v-if="CheckAnalogs === false && CheckUser === true"
              :link="table"
              :id="table.ProductCard.id"
            />
          </b-td>
        </b-tr>
        <b-tr
          class="hover-true border-bottom"
          v-for="offer in table.productOffer"
          :key="offer.id"
        >
          <b-td class="border-top-0 text-555">{{ offer.supplier.name }}</b-td>
          <b-td
            class="border-top-0 text-00b91e"
            :class="{ 'd-none d-md-table-cell': CheckAnalogs }"
            >{{ offer.quantity }}
          </b-td>
          <b-td class="border-top-0 text-555 d-none d-md-table-cell">{{
            offer.supplier.deliveryDelay
          }}</b-td>
          <b-td class="border-top-0 text-555 fz-5 font-weight-bold"
            >{{ offer.prices }} Р</b-td
          >
          <b-td class="border-top-0">
            <BuyButton :LinkOffer="offer" :LinkProduct="table.ProductCard" />
          </b-td>
        </b-tr>
      </template>
    </b-tbody>
  </b-table-simple>
</template>

<script>
import ImgGetModal from "@/components/products/product/element/img";
import PanelVid from "@/components/search/product-panel/product-thead-get"; // Панель
import Chosen from "@/components/metka/chosen"; // Метка избранный товар
import BuyButton from "@/components/products/button/buy-index"; // Кнопка открыть модалку купить товар
export default {
  components: {
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
