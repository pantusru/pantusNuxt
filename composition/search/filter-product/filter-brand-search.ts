import { useContext, computed, ref } from '@nuxtjs/composition-api'
export function FilterSearch() {
  const { store } = useContext()
  const BrandChecked = computed(
    () => store.getters['brands/brands-index/GetBrands']
  )
  const GetBrand = ref()

  const SearchBrand = (search: string) => {
    if (search.length !== 0) {
      GetBrand.value = BrandChecked.value.filter(
        (data: { name: string }) => data.name === search
      )
    } else {
      GetBrand.value = BrandChecked
    }
  }

  return { GetBrand, SearchBrand }
}
