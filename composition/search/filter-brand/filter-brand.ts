import { ref, useContext } from '@nuxtjs/composition-api'

export function FilterBrand() {
  const { store } = useContext()
  const brandView = ref(store.getters['search/data/getBrands'])
  return { brandView }
}
