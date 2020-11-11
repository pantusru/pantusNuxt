<template>
  <b-card class="mb-3">
    <template v-slot:header>
      <h6 class="mb-0">
        <nuxt-link
          class="text-dark"
          :to="'/product/' + datasetProduct.ProductCard.id"
        >
          {{ datasetProduct.ProductCard.name }}
        </nuxt-link>
      </h6>
    </template>
    <div>
      <ImgGetModal :product="datasetProduct" />
    </div>
    <div class="mt-3">
      <div class="d-flex justify-content-between mb-1 border-bottom">
        <div>Бренд</div>
        <nuxt-link :to="'/search?brand=' + datasetProduct.ProductCard.brand.id">
          {{ datasetProduct.ProductCard.brand.name }}
        </nuxt-link>
      </div>
      <div class="d-flex justify-content-between mb-1 border-bottom">
        <div>Артикуль</div>
        <div>{{ datasetProduct.ProductCard.sku.original }}</div>
      </div>
       <div class="d-flex justify-content-between mb-1 border-bottom">
        <div>В наличии:</div>
        <div> {{ datasetProduct.ProductOffer.quantity }}</div>
      </div>
       <div class="d-flex justify-content-between mb-1 border-bottom">
        <div>В Поставщик:</div>
        <div> {{ datasetProduct.ProductOffer.supplier.name }}</div>
      </div>
    </div>
    <template v-slot:footer>
      <b-row align-h="between" class="mt-1">
        <b-col>
          <div class="mb-2">
            <span class="mb-3">Цена:</span>
            <b>{{ datasetProduct.ProductOffer.prices }} Р</b>
          </div>
          <div>
            <vInput
              :AddClassInput="'col-6 col-sm-9'"
              :multiplicity="datasetProduct.ProductOffer.multiplicity"
              :kolvoProps="datasetProduct.kolvo"
              :array="datasetProduct"
               @kolvo="Setkolvo"
            />
          </div>
          <div class="mt-3">Стоимость:<b>{{datasetProduct.ProductOffer.prices * datasetProduct.kolvo}}р</b></div>
        </b-col>
        <b-col class="text-right">
          <DeleteCart :index="index" />
        </b-col>
      </b-row>
    </template>
  </b-card>
</template>

<script>
import mixit from "@/mixins/input/count-product/emit"
import vInput from "@/components/products/input/kolvo";
import DeleteCart from "@/components/cart/button/cart-button-delete";
import ImgGetModal from "@/components/products/product/element/img";
import BuyButton from "@/components/products/button/buy-index";
export default {
  mixins:[mixit],
  name: "cart-blog-get",
  props: {
    datasetProduct: {},
    index: {},
  },
  components: {
    BuyButton,
    ImgGetModal,
    DeleteCart,
    vInput,
  },
};
</script>

