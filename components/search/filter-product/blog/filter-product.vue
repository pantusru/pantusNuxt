<template>
  <div class="filter-product-wrapper">
    <div class="filter-product__get" @click="toggleClick"><span>Все фильтры</span></div>
    <div v-show="toggle" class="filter-product-catalog-wrapper">
      <filter-product-brand />
      <filter-product-categories />
      <div class="row-gutters filter-product-buttons-wrapper">
        <button class="button link-hover-button" @click="FilterSubmit()">
          Отправить
        </button>
        <button
          class="button filter-product-button__reset"
          @click="resetCategories()"
        >
          Сбросить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FilterProductBrand from '~/components/search/filter-product/blog/filter-product-brand.vue'
import FilterProductCategories from '~/components/search/filter-product/blog/filter-product-categories.vue'
import { FilterSubmit } from '~/composition/search/filter-submit/filter-submit'
import { ResetCategories } from '~/composition/search/filter-categories/filter-categories-reset'
import { ToggleClick } from '~/composition/_toggle/toggle-click'

export default {
  name: 'FilterProduct',
  components: {
    FilterProductCategories,
    FilterProductBrand,
  },
  setup() {
    return { ...FilterSubmit(), ...ResetCategories(), ...ToggleClick() }
  },
}
</script>
<style lang="sass">
@import "assets/sass-mixin/index"
@import "assets/sass/search/filter-product/filter-product"
@import "assets/sass/search/filter-product/filter-product-element.sass"
@import "assets/sass/search/filter-product/filter-product-children.sass"
</style>
