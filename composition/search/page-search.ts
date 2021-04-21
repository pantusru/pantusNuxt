import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
import { FilterMap } from '~/composition/search/filter-map'
import { FilterCategoriesSetUrl } from '~/composition/search/filter-set-url/filter-categories-set-url'

export function PageSearch() {
  const { store, route } = useContext()

  const filter = FilterMap().queryToVuex(route)
  useFetch(async () => {
    store.commit('search/form/setForm', filter)
    await Promise.all([
      store.dispatch('search/data/actionsFilter'),
      store.dispatch('product/filter/actionsProductFilter'),
    ])
    FilterCategoriesSetUrl(store).filterCategoriesSetUrl()
  })
  const productFilter = computed(() => {
    return store.getters['product/filter/getProductFilter']
  })
  return { productFilter }
}
