<template>
  <div class="product-view-table">
    <div class="row product-table-thead">
      <div class="col product-table-th">Бренд</div>
      <div class="col product-table-th product-table-sku">Артикуль</div>
      <div class="col product-table-th">Фото</div>
      <div class="col product-table-th product-table-name">Название</div>
      <div class="col product-table-th">Поставщик</div>
      <div class="col product-table-th">Наличие</div>
      <div class="col product-table-th">Срок</div>
      <div class="col product-table-th">Цена</div>
    </div>
    <div class="product-table-body">
      <div v-for="elem in product" :key="elem.productCard.id" class="row">
        <nuxt-link
          :to="'/search/?filter_brands=' + elem.productCard.brand.id"
          class="link-hover-main link product-table-td"
        >
          {{ elem.productCard.brand.name }}
        </nuxt-link>
        <nuxt-link
          :to="'/search/?filter_substr=' + elem.productCard.sku.normalized"
          class="link-hover-main link product-table-td product-table-sku"
        >
          {{ elem.productCard.sku.original }}
        </nuxt-link>
        <product-img
          :src="elem.productCard.productCardImage.url"
          class-img="product-table-img"
        />
        <product-link-id :product="elem" class="product-table-name" />
        <div v-if="elem.productOffer" class="product-view-table-offers">
          <div v-for="offer in elem.productOffer" :key="offer.id" class="row">
            <div class="product-table-td">{{ offer.supplier.name }}</div>
            <product-offer-quantity
              :link-product="elem.productCard"
              :link-offers="offer"
              :component="'div'"
            />
            <div class="product-offer-price">{{ offer.prices }}</div>
            <ProductButtonBuy
              :link-offers="offer"
              :link-product="elem.productCard"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { TypeProductVuex } from '~/interface/products/products.interface'
import ProductImg from '~/components/products/element/product-img.vue'
import ProductLinkId from '~/components/products/element/product-link-id.vue'
import ProductOfferQuantity from '~/components/products/element/offer/product-offer-quantity.vue'
import ProductButtonBuy from '~/components/products/element/product-button.vue'

export default {
  name: 'ProductsViewTable',
  components: {
    ProductButtonBuy,
    ProductOfferQuantity,
    ProductLinkId,
    ProductImg,
  },
  props: {
    product: {
      type: Array as () => PropType<TypeProductVuex[]>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/products/product-view-table"
</style>
