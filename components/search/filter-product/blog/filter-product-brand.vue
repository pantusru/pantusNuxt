<template>
  <div class="filter-catalog-wrapper">
    <div class="filter-title" @click="toggleClick">Бренд</div>
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
export default {
  name: 'FilterProductBrand',
  components: { FilterBrandChecked, FilterBrandSearch },
  setup() {
    const { store } = useContext()
    const BrandVuex = computed(() => store.getters['search/data/getBrands'])
    return { BrandVuex, ...ToggleClick() }
  },
}
</script>
