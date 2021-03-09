<template>
  <div class="container">
    <h1 class="h1">Запчасти для автомобилей по их маркам</h1>
    <div class="row">
      <carbrands-id-catalog
        v-for="data in getCarbrands"
        :key="data.id"
        :carbrands="data"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PageCarbrands } from '@/composition/carbrands/page-carbrands'
import CarbrandsIdCatalog from '~/components/carbrands/carbrands-id-catalog.vue'

export default Vue.extend({
  name: 'PagesCarbrands',
  components: { CarbrandsIdCatalog },
  setup() {
    return { ...PageCarbrands() }
  },
})
</script>
<style lang="sass">
@import "assets/sass/carbrands/carbrands-catalog"
</style>
