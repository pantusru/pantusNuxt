<template>
  <section class="section">
    <div class="container">
      <filter-applicabilities />
      <div class="search-row">
        <filter-product class="filter-product-col" />
        <div class="product-view-blog__filter">
          <SearchQuery />
          <filter-marks />
          <products-view-blog
            v-if="productFilter.length > 0"
            :product="productFilter"
          />
          <product404 v-else-if="getFlagProduct" />
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
import SearchQuery from '~/components/search/search-query.vue'
export default {
  name: 'PageSearch',
  components: {
    SearchQuery,
    Product404: () => import('~/components/products/element/product-404.vue'),
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
