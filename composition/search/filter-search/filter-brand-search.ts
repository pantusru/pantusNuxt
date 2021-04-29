import { computed, ref, useContext } from '@nuxtjs/composition-api'
import { brandInterface } from '~/interface/brand.interface'

export function FilterBrandSearch(data: brandInterface[], emit: Function) {
  const { store } = useContext()
  const BrandVuex = computed(() => store.getters['search/data/getBrands'])
  const value = ref('')
  const searchBrand = () => {
    if (value.value !== '') {
      return data.filter((item) =>
        item.name.toLowerCase().includes(value.value.toLowerCase())
      )
    }
    return BrandVuex.value
  }
  const emitStart = () => {
    emit('update:dataset', searchBrand())
  }
  return { value, emitStart }
}
