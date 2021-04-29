<template>
  <div class="filter-catalog-wrapper">
    <div class="filter-title filter-catalog-get-row" @click="toggleClick">
      <span>Бренд</span>
      <filter-button-get :toggle="toggle" />
    </div>
    <div v-show="toggle">
      <filter-brand-search :dataset.sync="brandView" />
      <div class="filter-overflow">
        <filter-brand-checked
          v-for="brand in brandView"
          :key="brand.id"
          :brand="brand"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FilterBrandSearch from '@/components/search/filter-product/element/brand/filter-brand-search.vue'
import FilterBrandChecked from '@/components/search/filter-product/element/brand/filter-brand-checked.vue'
import { ToggleClick } from '~/composition/_toggle/toggle-click'
import FilterButtonGet from '~/components/search/filter-button/filter-button-get.vue'
import { FilterBrand } from '~/composition/search/filter-brand/filter-brand'

export default {
  name: 'FilterProductBrand',
  components: { FilterButtonGet, FilterBrandChecked, FilterBrandSearch },
  setup() {
    return { ...FilterBrand(), ...ToggleClick() }
  },
}
</script>
