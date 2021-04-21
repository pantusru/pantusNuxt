import { computed, Ref } from '@nuxtjs/composition-api'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { FilterCategoriesChecked } from '~/composition/search/filter-categories/filter-categories-checked'
export function FilterCategoriesSetUrl(store: any) {
  const dataset: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['search/data/getCategories']
  )
  const categoriesId: Ref<number[]> = computed(
    () => store.getters['search/form/getCategoriesChecked']
  )
  const filterCategoriesSetUrl = (data = dataset.value) => {
    data.forEach((elem) => {
      checkCategories(elem)
    })
  }
  const checkCategories = (elem: SearchCategoriesInterface) => {
    if (categoriesId.value.includes(elem.id)) {
      FilterCategoriesChecked(store).CategoriesCheckedClick(elem, true)
      return
    }
    if (elem.children.length > 0) {
      elem.children.forEach((children) => {
        checkCategories(children)
      })
    }
  }
  return { filterCategoriesSetUrl }
}
