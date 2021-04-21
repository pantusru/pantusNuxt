import { useStore } from '@nuxtjs/composition-api'
import { FilterCategoriesChecked } from '~/composition/search/filter-categories/filter-categories-checked'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
export function ResetCategories() {
  const store = useStore()
  const { CategoriesCheckedClick } = FilterCategoriesChecked(store)
  const resetCategories = () => {
    const data: SearchCategoriesInterface[] =
      store.getters['search/data/getCategories']
    data.forEach((elem) => {
      CategoriesCheckedClick(elem, false)
    })
    store.commit('search/form/resetProduct')
  }
  return { resetCategories }
}
