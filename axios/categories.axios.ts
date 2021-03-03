import axios from 'axios'
import {
  CategoriesInterface,
  CategoriesInterfaceApi,
} from '@/interface/categories.interface'
export const categoriesAxios = async (): Promise<CategoriesInterface[]> => {
  const { data } = await axios.get(
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
