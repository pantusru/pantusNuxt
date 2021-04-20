<template>
  <form
    class="filter-applicabilities-form"
    :class="{ 'filter-applicabilities-form-get': toggle }"
  >
    <h3 class="filter-applicabilities-title" @click="toggleClick">
      Укажите применяемости
    </h3>
    <div v-show="toggle" class="filter-applicabilities-wrapper-panel">
      <FilterAppicabilitiesPanel
        v-for="(data, index) in Panel"
        :key="data.id"
        :panel="data"
        :index="index"
      />
      <button @click.prevent="addPanel">Добавить применяемость</button>
      <button @click.prevent="resetPanel">Сбросить</button>
    </div>
  </form>
</template>

<script lang="ts">
import { ToggleClick } from '~/composition/_toggle/toggle-click'
import FilterAppicabilitiesPanel from '~/components/search/filter-applicabilities/filter-appicabilities-panel.vue'
import { FilterApplicabiliries } from '~/composition/search/filter-applicabilities/filter-applicabilities'
import { FilterApplicabiliriesButtonReset } from '~/composition/search/filter-applicabilities/filter-applicabilities-button-reset'
export default {
  name: 'FilterApplicabilities',
  components: { FilterAppicabilitiesPanel },
  setup() {
    return {
      ...ToggleClick(),
      ...FilterApplicabiliries(),
      ...FilterApplicabiliriesButtonReset(),
    }
  },
}
</script>

<style lang="sass">
@import "assets/sass-mixin/index"
@import "assets/sass/search/filter-applicabilities/filter-applicabilities"
</style>
