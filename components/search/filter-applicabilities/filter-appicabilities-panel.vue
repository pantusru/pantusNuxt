<template>
  <div class="filter-applicabilities-panel">
    <FilterAppicabilitiesInput
      :dataset="ApplicabilitiesVuex"
      :selected="[panel.selectedMarka]"
      :index-panel="index"
    />
    <FilterAppicabilitiesInput
      :dataset="panel.dataModel"
      :selected="panel.selectedModel"
      :index-panel="index"
    />
    <FilterAppicabilitiesInput
      :dataset="panel.dataGenerations"
      :selected="panel.selectedGenerations"
      :index-panel="index"
    />
    <button v-if="PanelAll.length > 1" @click.prevent="DeletePanel(index)">
      Удалить
    </button>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import FilterAppicabilitiesInput from '~/components/search/filter-applicabilities/filter-appicabilities-input.vue'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
import { FilterApplicabiliriesPanel } from '~/composition/search/filter-applicabilities/filter-applicabilities.ts'
export default {
  name: 'FilterAppicabilitiesPanel',
  components: { FilterAppicabilitiesInput },
  props: {
    panel: {
      type: Object as () => PropType<SearchApplicabilitiesInterface>,
    },
    index: {
      type: Number,
    },
  },
  setup() {
    return { ...FilterApplicabiliriesPanel() }
  },
}
</script>
