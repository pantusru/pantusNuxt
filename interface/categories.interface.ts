export interface CategoriesInterface {
  id: number
  name: string
  code: string
  children: CategoriesInterface[]
  parentId: number
}
export interface CategoriesInterfaceApi {
  id: number
  name: string
  code: string
  depthLevel: number
  childs: CategoriesInterfaceApi[]
}
export interface CategoriesInterfaceStore {
  categories: CategoriesInterface[] | []
}
