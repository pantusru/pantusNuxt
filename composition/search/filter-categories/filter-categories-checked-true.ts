import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
export function CategoriesCheckedTrue(store: any) {
  const CategoriesCheckedTrue = (dataset: SearchCategoriesInterface) => {
    if (dataset.checkedType || dataset.indeterminate) {
      if (dataset.checkedType) {
        store.commit('search/form/pushCategoriesChecked', dataset.id)
      }
      dataset.children.forEach((element) => {
        CategoriesCheckedTrue(element)
      })
    }
  }
  const CategoriesCheckedTrueAll = (dataset: SearchCategoriesInterface[]) => {
    store.commit('search/form/onlyResetCategories')
    dataset.forEach((data) => {
      CategoriesCheckedTrue(data)
    })
  }
  return { CategoriesCheckedTrueAll }
}
