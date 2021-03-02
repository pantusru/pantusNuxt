<template>
  <div class="brand-id-catalog">
    <h3 class="h3 brand-id-title">{{ brand.name }}</h3>
    <div class="brand-id-catalog-item_link">
      <nuxt-link
        :to="'search?filter_brands=' + brand.id"
        class="link brand-id-catalog-link"
      >
        Перейти к товарам
      </nuxt-link>
      <nuxt-link class="link brand-id-catalog-link" :to="'brand/' + brand.code"
        >Информация</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { brandInterface } from '@/interface/brand.interface'

export default {
  name: 'BrandIdCatalog',
  props: {
    brand: {
      default: [],
      type: Object as () => PropType<brandInterface>,
    },
  },
}
</script>
<style lang="sass">
@import "assets/sass/brand/brand-catalog"
</style>
