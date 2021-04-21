<template>
  <section class="section">
    <div class="container">
      <filter-applicabilities />
      <div class="search-row">
        <filter-product />
        <products-view-blog
          class="product-view-blog__filter"
          :product="productFilter"
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
export default {
  name: 'PageSearch',
  components: { ProductsViewBlog, FilterProduct, FilterApplicabilities },
  setup() {
    return { ...PageSearch() }
  },
}
</script>
<style lang="sass">
@import "assets/sass-mixin/index"
.search-row
  +row-no-gutters()
  +justify-content-between()

.product-view-blog__filter
  +grid(9)
</style>
