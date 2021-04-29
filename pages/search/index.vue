<template>
  <section class="section">
    <div class="container">
      <filter-applicabilities />
      <div class="search-row">
        <filter-product class="filter-product-col" />
        <div class="product-view-blog__filter">
          <div class="search-query-count">По запросу найдено:</div>
          <filter-marks />
          <products-view-blog
            v-if="productFilter.length > 0"
            :product="productFilter"
          />
          <div v-else>Товара нет!</div>
        </div>
        <base-pagination
          v-if="getProductCount > 0 && getProductCount > getProductLimit"
          class="search-pagination"
          :limit-element="getProductLimit"
          :count-element="getProductCount"
          @click="pageSet"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import FilterApplicabilities from '~/components/search/filter-applicabilities/filter-applicabilities.vue'
import { PageSearch } from '~/composition/search/page-search'
import FilterProduct from '~/components/search/filter-product/blog/filter-product.vue'

import FilterMarks from '~/components/search/filter-mark/filter-marks.vue'
export default {
  name: 'PageSearch',
  components: {
    BasePagination: () =>
      import('~/components/base/pagination/base-pagination.vue'),
    FilterMarks,
    ProductsViewBlog: () =>
      import('~/components/products/view/products-view-blog.vue'),
    FilterProduct,
    FilterApplicabilities,
  },
  setup() {
    return { ...PageSearch() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/search/page-search"
</style>
