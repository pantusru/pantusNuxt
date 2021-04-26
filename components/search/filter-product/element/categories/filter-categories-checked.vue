<template>
  <div class="filter-checked-wrapper">
    <div class="filter-input-wrapper">
      <div
        class="filter-input"
        @click="CategoriesCheckedClick(categories, !categories.checkedType)"
      >
        <font-awesome
          v-if="categories.checkedType === true"
          unicode="&#xf14a;"
        />
        <font-awesome v-else-if="categories.indeterminate" unicode="&#xf146;" />
        <font-awesome v-else class="" unicode="&#xf096;" />
        <span class="filter-input-name">{{ categories.name }}</span>
      </div>
      <font-awesome
        v-if="categories.children.length !== 0"
        class="filter-icons-dropdown"
        unicode="&#xf078;"
        @click="toggleClick"
      />
    </div>
    <div
      v-if="categories.children.length !== 0 && toggle === true"
      class="catalog-categories-children-wrapper"
    >
      <filter-categories-checked
        v-for="categoriesElem in categories.children"
        :key="categoriesElem.id"
        :categories="categoriesElem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { useContext } from '@nuxtjs/composition-api'
import { ToggleClick } from '~/composition/_toggle/toggle-click'
import { FilterCategoriesChecked } from '~/composition/search/filter-categories/filter-categories-checked.ts'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
export default {
  name: 'FilterCategoriesChecked',
  components: { FontAwesome },
  props: {
    categories: {
      type: Object as () => PropType<SearchCategoriesInterface>,
    },
  },
  setup() {
    return { ...ToggleClick(), ...FilterCategoriesChecked(useContext().store) }
  },
}
</script>
