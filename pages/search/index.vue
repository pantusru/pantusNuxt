<template>
  <section class="section">
    <div class="container">
      <filter-applicabilities />
      <div class="search-row">
        <filter-product class="filter-product-col" />
        <div class="product-view-blog__filter">
          <div class="search-query-count">По запросу найдено:</div>
          <filter-marks />
          <products-view-blog :product="productFilter" />
        </div>
        <base-pagination
          v-if="getProductCount > 0"
          class="search-pagination"
          :limit-element="getProductLimit"
          :count-element="getProductCount"
          @click="scrollTop"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import FilterApplicabilities from '~/components/search/filter-applicabilities/filter-applicabilities.vue'
import { PageSearch } from '~/composition/search/page-search'
import FilterProduct from '~/components/search/filter-product/blog/filter-product.vue'

import ProductsViewBlog from '~/components/products/view/products-view-blog.vue'
import FilterMarks from '~/components/search/filter-mark/filter-marks.vue'
import BasePagination from '~/components/base/pagination/base-pagination.vue'
export default {
  name: 'PageSearch',
  components: {
    BasePagination,
    FilterMarks,
    ProductsViewBlog,
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
