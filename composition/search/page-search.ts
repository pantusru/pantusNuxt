import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
import { FilterMap } from '~/composition/search/filter-map'
import { FilterCategoriesSetUrl } from '~/composition/search/filter-set-url/filter-categories-set-url'
import { FilterApplicabilitiesSetUrl } from '~/composition/search/filter-set-url/filter-applicabilities-set-url'

export function PageSearch() {
  const { store, route } = useContext()

  const filterStart = async () => {
    const filter = FilterMap().queryToVuex(route)
    store.commit('search/form/setForm', filter)
    await Promise.all([
      store.dispatch('search/data/actionsFilter'),
      store.dispatch('product/filter/actionsProductFilter'),
    ])
    FilterCategoriesSetUrl(store).filterCategoriesSetUrl()
    FilterApplicabilitiesSetUrl(store).setUrlApplicabilities()
  }
  useFetch(async () => {
    await filterStart()
  })
  // onMounted(async () => {
  //   await filterStart()
  // })
  const productFilter = computed(() => {
    return store.getters['product/filter/getProductFilter']
  })
  return { productFilter }
}
