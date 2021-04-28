<template>
  <div class="filter-catalog-wrapper">
    <div class="filter-title filter-catalog-get-row" @click="toggleClick">
      <span>Бренд</span>
      <filter-button-get :toggle="toggle" />
    </div>
    <div v-show="toggle">
      <filter-brand-search />
      <div class="filter-overflow">
        <filter-brand-checked
          v-for="brand in BrandVuex"
          :key="brand.id"
          :brand="brand"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useContext, computed } from '@nuxtjs/composition-api'
import FilterBrandSearch from '@/components/search/filter-product/element/brand/filter-brand-search.vue'
import FilterBrandChecked from '@/components/search/filter-product/element/brand/filter-brand-checked.vue'
import { ToggleClick } from '~/composition/_toggle/toggle-click'
import FilterButtonGet from '~/components/search/filter-button/filter-button-get.vue'
export default {
  name: 'FilterProductBrand',
  components: { FilterButtonGet, FilterBrandChecked, FilterBrandSearch },
  setup() {
    const { store } = useContext()
    const BrandVuex = computed(() => store.getters['search/data/getBrands'])
    return { BrandVuex, ...ToggleClick() }
  },
}
</script>
