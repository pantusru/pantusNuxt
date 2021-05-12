import { computed, ref, useContext } from '@nuxtjs/composition-api'
import { brandInterface } from '~/interface/brands/brand.interface'
import { FilterSearchReg } from '~/composition/search/filter-search/filter-search-reg'
export function FilterBrandSearch(data: brandInterface[], emit: Function) {
  const { store } = useContext()
  const { checkSearchValue, errors } = FilterSearchReg()
  const BrandVuex = computed(() => store.getters['search/data/getBrands'])
  const value = ref('')
  const searchBrand = () => {
    if (checkSearchValue(value.value) && value.value !== '') {
      return data.filter((item) =>
        item.name.toLowerCase().includes(value.value.toLowerCase())
      )
    }
    return BrandVuex.value
  }
  const emitStart = () => {
    emit('update:dataset', searchBrand())
  }
  emitStart()
  return { value, emitStart, errors, searchBrand }
}
