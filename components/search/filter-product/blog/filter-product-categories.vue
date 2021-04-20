<template>
  <div class="filter-catalog-wrapper">
    <div class="filter-title">Категории</div>
    <filter-categories-search />
    <div class="filter-overflow">
      <filter-categories-checked
        v-for="categories in CategoriesFilterVuex"
        :key="categories.id"
        :categories="categories"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, useContext } from '@nuxtjs/composition-api'
import FilterCategoriesSearch from '~/components/search/filter-product/element/categories/filter-categories-search.vue'
import FilterCategoriesChecked from '~/components/search/filter-product/element/categories/filter-categories-checked.vue'

export default {
  name: 'FilterProductCategories',
  components: { FilterCategoriesSearch, FilterCategoriesChecked },
  setup() {
    const { store } = useContext()
    const CategoriesFilterVuex = computed(
      () => store.getters['search/data/getCategories']
    )
    return {
      CategoriesFilterVuex,
    }
  },
}
</script>
