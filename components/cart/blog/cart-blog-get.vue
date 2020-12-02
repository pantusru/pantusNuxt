<template>
  <b-card
    class="h-100 justify-content-between"
    header-class="d-flex justify-content-between"
  >
    <template #header>
      <h6 class="mb-0">
        <nuxt-link
          class="text-dark"
          :to="'/product/' + datasetProduct.ProductCard.id"
        >
          {{ datasetProduct.ProductCard.name }}
        </nuxt-link>
      </h6>
      <div class="text-right">
        <DeleteCart :index="index" />
      </div>
    </template>
    <div>
      <ImgGetModal :product="datasetProduct" />
    </div>
    <div class="mt-3">
      <product-element-row-get
        name="Бренд:"
        :dataset="datasetProduct.ProductCard.brand.name"
      />
      <product-element-row-get
        name="Артикуль:"
        :dataset="datasetProduct.ProductCard.sku.original"
      />
      <product-element-row-get
        name="В наличии:"
        :dataset="datasetProduct.ProductOffer.quantity"
      />
      <product-element-row-get
        name="Поставщик:"
        :dataset="datasetProduct.ProductOffer.supplier.name"
      />
    </div>
    <template #footer>
      <b-row align-h="between" class="mt-1">
        <b-col>
          <div class="mb-2">
            <span class="mb-3">Цена:</span>
            <b>{{ datasetProduct.ProductOffer.prices }} Р</b>
          </div>
          <div class="d-flex align-items-start justify-content-between">
            <vInput
              :AddClassInput="'col-5 col-sm-6 col-md-4'"
              :multiplicity="datasetProduct.ProductOffer.multiplicity"
              :CountProps="datasetProduct.Count"
              :array="datasetProduct"
              @Count="SetCount($event, index)"
            />
            <cart-button-update-product
              v-if="datasetProduct.checkCount"
              :index="index"
            />
          </div>
          <div class="mt-3">
            Стоимость:<b
              >{{
                datasetProduct.ProductOffer.prices * datasetProduct.Count
              }}р</b
            >
          </div>
        </b-col>
      </b-row>
    </template>
  </b-card>
</template>

<script>
import mixit from "@/mixins/input/count-product/emit";
import vInput from "@/components/products/input/product-input-count";
import DeleteCart from "@/components/cart/button/cart-button-delete";
import ImgGetModal from "@/components/products/product/element/img";
import ProductElementRowGet from "@/components/products/product/element/product-element-row-get";
import CartButtonUpdateProduct from "@/components/cart/button/cart-button-update-product";

export default {
  name: "cart-blog-get",
  components: {
    CartButtonUpdateProduct,
    ImgGetModal,
    DeleteCart,
    vInput,
    ProductElementRowGet,
  },
  mixins: [mixit],
  props: {
    /***
     * data корзины 1 товара
     */
    datasetProduct: {
      type: Object,
    },
    /***
     * index корзины 1 товара
     */
    index: {
      type: String | Number,
    },
  },
};
</script>
