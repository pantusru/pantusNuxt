import {
  CatalogInterface,
  CatalogInterfaceApi,
} from '@/interface/catalog/catalog.interface'

export interface CategoriesInterface extends CatalogInterface {}
export interface CategoriesInterfaceApi extends CatalogInterfaceApi {}
export interface CategoriesInterfaceStore {
  categories: CategoriesInterface[] | []
}
