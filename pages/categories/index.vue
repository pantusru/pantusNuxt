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
import CategoriesIdCatalog from '@/components/categories/categories-id-catalog'

export default {
  name: 'PagesCategories',
  components: { CategoriesIdCatalog },
  setup() {
    return { ...PageCategories() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/categories/categories-catalog"
@import "assets/sass/catalog/catalog"
</style>
