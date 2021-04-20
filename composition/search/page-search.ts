import {
  computed,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'

export function PageSearch() {
  const { store, route } = useContext()
  useFetch(async () => {
    const filter = {
      brandChecked: route.value.params?.filter_brands?.split(',') ?? [],
      categoriesChecked:
        route.value.params?.filter_applicabilities?.split(',') ?? [],
      applicabilitiesChecked:
        route.value.params?.filter_categories?.split(',') ?? [],
      page: route.value.params.page ?? 1,
      search: route.value.params.filter_substr ?? '',
    }
    store.commit('search/form/setForm', filter)
    await Promise.all([
      store.dispatch('search/data/actionsFilter'),
      store.dispatch('product/filter/actionsProductFilter'),
    ])
  })
  const productFilter = computed(() => {
    return store.getters['product/filter/getProductFilter']
  })
  return { productFilter }
}
