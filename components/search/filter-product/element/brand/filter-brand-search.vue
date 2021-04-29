<template>
  <input
    v-model="value"
    class="filter-search"
    type="text"
    placeholder="Поиск по списку"
    @input="emitStart"
  />
</template>

<script lang="ts">
import { PropType } from 'vue'
import { FilterBrandSearch } from '~/composition/search/filter-search/filter-brand-search'
import { brandInterface } from '~/interface/brand.interface'

export default {
  name: 'FilterBrandSearch',
  props: {
    dataset: {
      type: Array as PropType<brandInterface[]>,
    },
  },
  setup(props: any, { emit }: { emit: Function }) {
    return { ...FilterBrandSearch(props.dataset, emit) }
  },
}
</script>
