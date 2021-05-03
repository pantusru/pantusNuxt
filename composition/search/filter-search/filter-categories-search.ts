import { computed, Ref, ref, useContext } from '@nuxtjs/composition-api'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'

export function FilterCategoriesSearch() {
  const { store } = useContext()
  const categoriesVuex: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['search/data/getCategories']
  )
  const value = ref('')

  const searchCategories = () => {
    if (value.value.length < 3) {
      return
    }
    forCategoriesAll(categoriesVuex.value, false)
  }
  const searchCategoriesName = (elem: SearchCategoriesInterface) => {
    return elem.name.toLowerCase().search(value.value.toLowerCase()) !== -1
  }
  const forCategoriesAll = (
    data: SearchCategoriesInterface[],
    check: boolean
  ): boolean => {
    let checkParent = false
    for (const elem of data) {
      if (searchCategoriesName(elem)) {
        checkParent = true
        check = true
        categoriesActive(elem, checkParent)
      } else {
        if (elem.children.length > 0) {
          check = forCategoriesAll(elem.children, check)
        }
        categoriesActive(elem, check)
      }
    }
    return checkParent
  }
  const categoriesActive = (
    data: SearchCategoriesInterface,
    value: boolean
  ) => {
    if (data.visible !== value) {
      store.commit('search/data/setCategoriesActive', {
        data,
        visible: value,
      })
    }
  }
  return { value, searchCategories }
}
