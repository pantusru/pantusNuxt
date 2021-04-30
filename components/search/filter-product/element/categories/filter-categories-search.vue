<template>
  <input
    v-model="value"
    class="filter-search"
    type="text"
    placeholder="Поиск по списку"
    @input="searchCategories()"
  />
</template>

<script lang="ts">
import { FilterCategoriesSearch } from '~/composition/search/filter-search/filter-categories-search'

export default {
  name: 'FilterCategoriesSearch',
  setup() {
    return { ...FilterCategoriesSearch() }
  },
}
</script>
