import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  CategoriesInterface,
  CategoriesInterfaceApi,
} from '@/interface/categories.interface'
export const categoriesAxios = async (
  $axios: NuxtAxiosInstance
): Promise<CategoriesInterface[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/product_categories?view=tree`
  )
  return categoriesMap(data)
}

const categoriesMainMap = (
  data: CategoriesInterfaceApi,
  result: CategoriesInterface[]
) => {
  result.push({
    name: data.name,
    code: data.code,
    id: data.id,
    children: [],
  })
}

const categoriesMap = (
  data: CategoriesInterfaceApi[]
): CategoriesInterface[] => {
  const categories: CategoriesInterface[] = []
  data.forEach((array) => {
    categoriesMainMap(array, categories)
    array.childs.forEach((children) => {
      categoriesMainMap(children, categories[categories.length - 1].children)
    })
  })
  return categories
}

export const categoriesFilterAxios = async (
  $axios: NuxtAxiosInstance
): Promise<CategoriesInterface[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/product_categories?view=tree`
  )
  return categoriesFilterMap(data, [], undefined)
}

const categoriesFilterMap = (
  data: CategoriesInterfaceApi[],
  dataset: any = [],
  topParent: number | undefined
) => {
  data.forEach((array, index) => {
    if (array.parentId !== null && topParent === undefined) {
      topParent = array.parentId
    }
    dataset.push({
      id: array.id,
      parentId: array.parentId,
      name: array.name,
      level: array.depthLevel,
      children: [],
      visible: true,
      topParent,
      checkedType: false,
      indeterminate: false,
    })
    if (array.childs.length > 0) {
      categoriesFilterMap(array.childs, dataset[index].children, topParent)
    }
  })
  return dataset
}
