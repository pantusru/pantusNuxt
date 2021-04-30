import { computed, Ref, ref, useContext } from '@nuxtjs/composition-api'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'

export function FilterCategoriesSearch() {
  const { store } = useContext()
  const categoriesVuex: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['search/data/getCategories']
  )
  const value = ref('')
  const searchCategories = () => {
    forCategoriesAll(categoriesVuex.value)
  }
  const searchCategoriesName = (elem: SearchCategoriesInterface) => {
    return elem.name.toLowerCase().search(value.value.toLowerCase()) !== -1
  }
  const forCategoriesAll = (data: SearchCategoriesInterface[]): boolean => {
    let checkParent = false
    for (const elem of data) {
      if (searchCategoriesName(elem)) {
        checkParent = true
        categoriesActive(elem, checkParent)
      } else {
        if (elem.children.length > 0) {
          checkParent = forCategoriesAll(elem.children)
        }
        categoriesActive(elem, checkParent)
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
  // const categoriesActiveAll = (
  //   data: SearchCategoriesInterface,
  //   value: boolean
  // ) => {
  //   categoriesActive(data, value)
  //   if (data.children.length > 0) {
  //     for (const children of data.children) {
  //       categoriesActiveAll(children, value)
  //     }
  //   }
  // }
  // data.forEach((elem) => {
  //   if (elem.children.length !== 0) {
  //     checkParent = search(elem.children)
  //   }
  //   if (elem.name.toLowerCase().search(value.value.toLowerCase()) !== -1) {
  //     checkParent = true
  //   }
  //   store.commit('search/data/setCategoriesActive', {
  //     data: elem,
  //     visible: checkParent,
  //   })
  // })
  // return checkParent

  return { value, searchCategories }
}
