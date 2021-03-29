<template>
  <div class="container">
    <h1 class="h1">Все бренды автозапчастей</h1>
    <template v-if="getBrandActive">
      <div class="row row-catalog-brand">
        <brand-id-catalog
          v-for="brand in getBrandPage"
          :key="brand.id"
          :brand="brand"
        />
      </div>
      <error404
        v-if="getBrandPage.length < 0"
        text="Бредны на этой странице не найдены"
      />
      <base-pagination
        v-if="getBrandPage.length > 0"
        :count-element="getBrand.length"
        :limit-element="getLimitPage"
        :limit-pagination="5"
      />
    </template>
  </div>
</template>

<script>
import { PageBrand } from '@/composition/brand/page-brand'
import BasePagination from '@/components/base/pagination/base-pagination'
import BrandIdCatalog from '@/components/brand/brand-id-catalog'
import Error404 from '~/components/base/error/404'

export default {
  name: 'PagesBrands',
  components: { Error404, BrandIdCatalog, BasePagination },
  setup() {
    return { ...PageBrand() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/brand/brand-catalog"
</style>
