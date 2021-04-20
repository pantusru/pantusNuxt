<template>
  <div class="filter-input-wrapper" @click="ClickBrandChecked">
    <div class="filter-input">
      <font-awesome v-if="Checked === false" unicode="&#xf096;" />
      <font-awesome v-if="Checked === true" unicode="&#xf14a;" />
      <!--    <font-awesome unicode="&#xf146;" />-->
      <span class="filter-input-name">{{ brand.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import { brandInterface } from '~/interface/brand.interface'
import { FilterBrandChecked } from '~/composition/search/filter-product/filter-brand-checked.ts'
export default {
  name: 'FilterBrandChecked',
  components: { FontAwesome },
  props: {
    brand: {
      type: Object as () => PropType<brandInterface>,
    },
  },
  setup(props: any) {
    return { ...FilterBrandChecked(props.brand.id) }
  },
}
</script>
