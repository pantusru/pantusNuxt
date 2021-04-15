<template>
  <div class="container">
    <div v-if="getActiveProductId" class="product_id row">
      <div class="product_id-img col">
        <img
          class="img"
          :src="getProductId.productCard.productCardImage.url"
          :alt="getProductId.productCard.name"
        />
      </div>
      <div class="product_id-data col">
        <h1 class="h1">{{ getProductId.productCard.name }}</h1>
        <div class="product_id-params_all">
          <div class="product_id-params">
            <div class="product_id-params_name">Производитель:</div>
            <nuxt-link
              :to="'/search?filter_brands=' + getProductId.productCard.brand.id"
              class="product_id-params_value link link-hover-main"
            >
              {{ getProductId.productCard.brand.name }}
            </nuxt-link>
          </div>
          <div class="product_id-params">
            <div class="product_id-params_name">Артикул:</div>
            <div class="product_id-params_value">
              {{ getProductId.productCard.sku.original }}
            </div>
          </div>
          <div
            v-if="getProductId.productCard.categories.length > 0"
            class="product_id-params"
          >
            <div class="product_id-params_name">Категория:</div>
            <nuxt-link
              v-for="categories in getProductId.productCard.categories"
              :key="categories.id"
              :to="'/search?filter_categories' + categories.id"
              class="product_id-params_value link link-hover-main"
            >
              {{ categories.name }}
            </nuxt-link>
          </div>
          <div
            v-if="getProductId.productCard.applicabilities.length > 0"
            class="product_id-params"
          >
            <div class="product_id-params_name">Применяемость (для а/м):</div>
            <nuxt-link
              v-for="applicabilities in getProductId.productCard
                .applicabilities"
              :key="applicabilities.id"
              :to="'/search?filter_applicabilities' + applicabilities.id"
              class="product_id-params_value link link-hover-main"
            >
              {{ applicabilities.name }}
            </nuxt-link>
            <product-offer-id />
          </div>
        </div>
        <div class="row-gutters product_id-row_offers">
          <h2 class="h2">Предложение</h2>
          <div>Уровень цен: Розничный</div>
        </div>
        <product-offer-id
          v-if="getProductId.productOffer.length > 0"
          :product="getProductId"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PageProductsId } from '~/composition/products/page-product-id'

export default {
  name: 'PageProductsId',
  components: {
    ProductOfferId: () =>
      import('~/components/products/offers/product-offer-id.vue'),
  },
  setup() {
    return { ...PageProductsId() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/products/product-element"
@import "assets/sass/products/product-id"
</style>
