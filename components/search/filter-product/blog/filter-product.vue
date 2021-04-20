<template>
  <div class="filter-product-wrapper">
    <filter-product-brand />
    <filter-product-categories />
    <button @click="FilterSubmit()">Отправить</button>
  </div>
</template>

<script lang="ts">
import FilterProductBrand from '~/components/search/filter-product/blog/filter-product-brand.vue'
import FilterProductCategories from '~/components/search/filter-product/blog/filter-product-categories.vue'
import { FilterSubmit } from '~/composition/search/filter-submit/filter-submit'

export default {
  name: 'FilterProduct',
  components: {
    FilterProductCategories,
    FilterProductBrand,
  },
  setup() {
    return { ...FilterSubmit() }
  },
}
</script>
<style lang="sass">
@import "assets/sass-mixin/index"
@import "assets/sass/search/filter-product/filter-product"
@import "assets/sass/search/filter-product/filter-product-element.sass"
@import "assets/sass/search/filter-product/filter-product-children.sass"
</style>
