import { computed, useContext, useFetch } from '@nuxtjs/composition-api'

export function PageSearch() {
  const { store } = useContext()
  useFetch(async () => {
    await store.dispatch('search/data/actionsFilter')
  })
  const pageSearch = () => {
    const { store } = useContext()
    const ApplicabilitiesFilterVuex = computed(() => {
      return store.getters['search/data/getCarbrands']
    })
    const BrandVuex = computed(() => {
      return store.getters['search/data/getBrands']
    })
    const CategoriesFilterVuex = computed(() => {
      return store.getters['search/data/getCategories']
    })
    return { ApplicabilitiesFilterVuex, BrandVuex, CategoriesFilterVuex }
  }
  return { pageSearch }
}
