<template>
  <div class="base-pagination">
    <base-pagination-item
      v-for="data in arrayPagination"
      :key="data.text"
      :to="data.to"
      :text="data.text"
      v-on="$listeners"
      @click="setArrayPagination"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Pagination } from '~/composition/base/pagination'
import { paginationPropsInterface } from '~/interface/base/pagination-props.interface'

export default Vue.extend({
  name: 'BasePagination',
  props: {
    limitPagination: {
      default: 5,
      type: Number,
    },
    limitElement: {
      default: 1,
      type: Number,
    },
    countElement: {
      default: 1,
      type: Number,
    },
    name: {
      type: String,
      default: 'page',
    },
  },
  setup(props: paginationPropsInterface) {
    return { ...Pagination(props) }
  },
})
</script>
<style lang="sass">
@import "assets/sass/base/base-pagination"
</style>
