import { computed, Ref, ref, useContext } from '@nuxtjs/composition-api'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'

export function FilterCategoriesSearch() {
  const { store } = useContext()
  const categoriesVuex: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['search/data/getCategories']
  )
  const value = ref('')

  const searchCategories = () => {
    if (value.value.length === 0) {
      categoriesActiveAll(categoriesVuex.value, true)
      return
    }
    if (value.value.length > 3) {
      categoriesVuex.value.forEach((elem) => {
        forCategoriesAll(elem)
      })
    }
  }
  const searchCategoriesName = (elem: SearchCategoriesInterface) => {
    return elem.name.toLowerCase().search(value.value.toLowerCase()) !== -1
  }
  const forCategoriesAll = (data: SearchCategoriesInterface): boolean => {
    let checkParent = false
    if (searchCategoriesName(data)) {
      checkParent = true
      categoriesActive(data, true)
    } else if (data.children.length !== 0) {
      for (const elem of data.children) {
        let check = false
        check = forCategoriesAll(elem)
        if (check) {
          checkParent = true
        }
      }
      if (checkParent) {
        categoriesActive(data, true)
      } else {
        categoriesActive(data, searchCategoriesName(data))
      }
    } else {
      categoriesActive(data, checkParent)
    }
    return checkParent
    // for (const elem of data) {
    //   if (searchCategoriesName(elem)) {
    //     checkParent = true
    //     check = true
    //     categoriesActive(elem, checkParent)
    //   } else {
    //     if (elem.children.length > 0) {
    //       check = forCategoriesAll(elem.children, check)
    //     }
    //     categoriesActive(elem, check)
    //   }
    // }
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
  const categoriesActiveAll = (
    data: SearchCategoriesInterface[],
    visible: boolean
  ) => {
    data.forEach((elem) => {
      categoriesActive(elem, visible)
    })
  }
  return { value, searchCategories }
}
