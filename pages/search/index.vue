<template>
  <section class="section">
    <div class="container">
      <filter-applicabilities />
      <div class="search-wrapper">
        <filter-product />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import FilterApplicabilities from '~/components/search/filter-applicabilities/filter-applicabilities.vue'
import { PageSearch } from '~/composition/search/page-search'
import FilterProduct from '~/components/search/filter-product/blog/filter-product.vue'
export default {
  name: 'PageSearch',
  components: { FilterProduct, FilterApplicabilities },
  setup() {
    return { ...PageSearch() }
  },
}
</script>
