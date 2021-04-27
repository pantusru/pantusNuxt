import { computed, Ref, useContext, useRouter } from '@nuxtjs/composition-api'
import { SearchMarkInterface } from '~/interface/search/data/search-metks.interface'
import { TypeBrandProduct } from '~/interface/products/products.interface'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { FilterRouter } from '~/composition/search/filter-router'
export function FilterMark() {
  const { store } = useContext()
  const router = useRouter()
  const getMark = computed(() => store.getters['search/data/getMark'])
  const getBrandChecked: Ref<TypeBrandProduct[]> = computed(
    () => store.getters['search/form/getBrandChecked']
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  const getCategoriesChecked: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['search/form/getCategoriesChecked']
  )
  const deleteMark = async (mark: SearchMarkInterface, index: number) => {
    store.commit('search/data/deleteMark', index)
    if (mark.type === 'brand') {
      const indexBrandChecked = getBrandChecked.value.findIndex(
        (elem) => elem.id === mark.id
      )
      store.commit('search/form/deleteBrandChecked', indexBrandChecked)
    }
    // eslint-disable-next-line no-empty
    if (mark.type === 'categories') {
    }
    await FilterRouter(store, router).routerPush()
  }
  return { getMark, deleteMark }
}
