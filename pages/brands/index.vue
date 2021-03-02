<template>
  <div class="container">
    <h1 class="h1 brand-catalog-title">Все бренды автозапчастей</h1>
    <div v-if="getBrandPage.length > 0" class="row row-catalog-brand">
      <brand-id-catalog
        v-for="brand in getBrandPage"
        :key="brand.id"
        :brand="brand"
      />
    </div>
    <base-pagination
      :count-element="getBrand.length"
      :limit-element="getLimitPage"
      :limit-pagination="5"
    />
  </div>
</template>

<script>
import { PageBrand } from '@/composition/brand/pageBrand'
import BasePagination from '~/components/base/pagination/base-pagination'

export default {
  name: 'PagesBrands',
  components: { BasePagination },
  setup() {
    return { ...PageBrand() }
  },
}
</script>
