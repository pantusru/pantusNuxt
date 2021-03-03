<template>
  <div class="container">
    <h1 class="h1 catalog-title">Все категории автозапчастей</h1>
    <div v-if="getCategories.length > 0" class="row-catalog-categories">
      <categories-id-catalog
        v-for="data in getCategories"
        :key="data.id"
        :categories="data"
      />
    </div>
  </div>
</template>

<script>
import { PageCategories } from '@/composition/categories/pageCategories'

export default {
  name: 'PagesCategories',
  setup() {
    return { ...PageCategories() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/categories/categories-catalog"
@import "assets/sass/catalog/catalog"
</style>
