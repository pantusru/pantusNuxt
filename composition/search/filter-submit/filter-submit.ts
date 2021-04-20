import { useContext, computed } from '@nuxtjs/composition-api'
import { CategoriesCheckedTrue } from '~/composition/search/filter-categories/filter-categories-checked-true'
import { ApplicabilitiesCheckedTrue } from '~/composition/search/filter-applicabilities/filter-appicabilites-checked-true'
export function FilterSubmit() {
  const { store } = useContext()
  const panelApplicabilities = computed(() => {
    return store.getters['search/panel/getSearchApplicabilitiesPanel']
  })
  const categories = computed(() => {
    return store.getters['search/data/getCategories']
  })
  const FilterSubmit = () => {
    CategoriesCheckedTrue(store).CategoriesCheckedTrueAll(categories.value)
    ApplicabilitiesCheckedTrue(store).ApplicabilitiesCheckedTrueAll(
      panelApplicabilities.value
    )
  }
  return { FilterSubmit }
}
