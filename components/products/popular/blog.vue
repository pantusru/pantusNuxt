<template>
  <b-card
    class="h-100"
    header-class="bg-transparent border-0"
    footer-class="bg-transparent p-0 py-2 px-2"
    body-class="d-flex flex-column justify-content-between"
  >
    <template #header>
      <h6 class="mb-0">
        <nuxt-link
          :title="datasetProduct.ProductCard.name"
          class="text-436174 text-decoration-none reset-title"
          :to="'/product/' + datasetProduct.ProductCard.id"
        >
          {{ datasetProduct.ProductCard.name }}
        </nuxt-link>
      </h6>
    </template>
    <ImgGetModal :product="datasetProduct" />
    <div class="mt-3">
      <product-element-row-get
        name="Бренд"
        :dataset="datasetProduct.ProductCard.brand.name"
        :link="'/search?filter_brands=' + datasetProduct.ProductCard.brand.id"
      />
      <product-element-row-get
        name="Артикуль"
        :dataset="datasetProduct.ProductCard.sku.original"
        :link="
          '/search?filter_substr=' + datasetProduct.ProductCard.sku.original
        "
      />
      <product-element-row-get
        v-if="datasetProduct.ProductCard.ProductCardOem.length !== 0"
        name="OEM"
        :link="
          '/search?filter_substr=' +
          datasetProduct.ProductCard.ProductCardOem[0]
        "
        :dataset="datasetProduct.ProductCard.ProductCardOem[0]"
      />
      <product-element-row-get
        v-for="data in datasetProduct.ProductCard.ProductCardOem.slice(1, 4)"
        :key="data.id"
        :link="'/search?filter_substr=' + data"
        :dataset="data"
      />
    </div>
    <template v-if="datasetProduct.productOffer.length !== 0" #footer>
      <b-row no-gutters align-h="between" class="mt-1">
        <b-col>
          <div class="mb-3"><b class="fz-5">Цена</b></div>
          <div>
            <b class="fz-4">{{ datasetProduct.productOffer[0].prices }} Р</b>
          </div>
        </b-col>
        <b-col class="text-right">
          <availability-offers
            class="mb-2 fz-5_5"
            component="div"
            :link-offers="datasetProduct.productOffer[0]"
            :link-product="datasetProduct.ProductCard"
          />
          <BuyButton
            :link-offer="datasetProduct.productOffer[0]"
            :link-product="datasetProduct.ProductCard"
          />
        </b-col>
      </b-row>
    </template>
    <div v-else><h2 class="error">нет в продаже</h2></div>
  </b-card>
</template>

<script>
import ImgGetModal from "@/components/products/product/element/img";
import BuyButton from "@/components/products/button/buy-index";
import ProductElementRowGet from "@/components/products/product/element/product-element-row-get";
import AvailabilityOffers from "@/components/products/product/element/availability-offers";
export default {
  name: "BlogProduct",
  components: {
    AvailabilityOffers,
    ProductElementRowGet,
    BuyButton,
    ImgGetModal,
  },
  props: {
    datasetProduct: {},
  },
};
</script>
