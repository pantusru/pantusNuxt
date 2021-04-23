import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
import { FilterMap } from '~/composition/search/filter-map'
import { FilterCategoriesSetUrl } from '~/composition/search/filter-set-url/filter-categories-set-url'
import { FilterApplicabilitiesSetUrl } from '~/composition/search/filter-set-url/filter-applicabilities-set-url'
import {FilterBrandMark} from "~/composition/search/filter-brand/filter-brand-mark";

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
    FilterBrandMark(store).markBrand()
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
