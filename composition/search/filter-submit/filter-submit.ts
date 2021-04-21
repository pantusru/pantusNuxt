import { useContext, computed, useRouter } from '@nuxtjs/composition-api'
import { CategoriesCheckedTrue } from '~/composition/search/filter-categories/filter-categories-checked-true'
import { ApplicabilitiesCheckedTrue } from '~/composition/search/filter-applicabilities/filter-appicabilites-checked-true'
import { FilterMap } from '~/composition/search/filter-map'
export function FilterSubmit() {
  const { store } = useContext()
  const router = useRouter()
  const panelApplicabilities = computed(() => {
    return store.getters['search/panel/getSearchApplicabilitiesPanel']
  })
  const categories = computed(() => {
    return store.getters['search/data/getCategories']
  })
  const routerPush = async () => {
    const filter = FilterMap().vuexToQuery(store.getters['search/form/getForm'])
    await router.push({
      name: 'search',
      query: { ...filter },
    })
  }
  const FilterSubmit = async () => {
    CategoriesCheckedTrue(store).CategoriesCheckedTrueAll(categories.value)
    ApplicabilitiesCheckedTrue(store).ApplicabilitiesCheckedTrueAll(
      panelApplicabilities.value
    )
    store.commit('search/form/setPage', 1)
    await store.dispatch('product/filter/actionsProductFilter')
    await routerPush()
  }
  return { FilterSubmit }
}
