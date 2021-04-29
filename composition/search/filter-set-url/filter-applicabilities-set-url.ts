import { computed, Ref } from '@nuxtjs/composition-api'
import { SearchApplicabilitiesPanelInterface } from '~/interface/search/search-applicabilities-panel.interface'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
import { FilterApplicabilitiesSetAll } from '~/composition/search/filter-applicabilities/set-vuex/filter-applicabilities-set-all'

export function FilterApplicabilitiesSetUrl(store: any) {
  const panel: Ref<SearchApplicabilitiesPanelInterface[]> = computed(
    () => store.getters['search/panel/getSearchApplicabilitiesPanel']
  )
  const carbrands: Ref<SearchApplicabilitiesInterface[]> = computed(
    () => store.getters['search/data/getCarbrands']
  )
  const carbrandsFilter: Ref<number[]> = computed(
    () => store.getters['search/form/getApplicabilitiesChecked']
  )
  const setUrlApplicabilities = () => {
    for (const keyData of carbrands.value) {
      const index = panel.value.length - 1
      checkUrlApplicabilities(keyData, index)
    }
  }
  const checkUrlApplicabilities = (
    carbrands: SearchApplicabilitiesInterface,
    index: number
  ) => {
    const carbrandsElem = carbrandsFilter.value.filter(
      (elem) => elem === carbrands.id
    )[0]
    if (carbrandsElem) {
      if (carbrands.level === 1) {
        store.commit('search/panel/setNewPanel')
        index++
      }
      // мы находим и сохраняем
      FilterApplicabilitiesSetAll(index, carbrands, true, store)
    }
    if (carbrands.children.length > 0) {
      // прогон потомков
      for (const keyData of carbrands.children) {
        checkUrlApplicabilities(keyData, index)
      }
    }
  }
  return { setUrlApplicabilities }
}
