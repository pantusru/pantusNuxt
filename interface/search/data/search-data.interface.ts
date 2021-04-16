import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { brandInterface } from '~/interface/brand.interface'
import { CarbrandsInterface } from '~/interface/carbrands.interface'

export interface SearchDataInterface {
  categories: SearchCategoriesInterface
  brands: brandInterface
  carbrands: CarbrandsInterface
}
