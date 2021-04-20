import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { brandInterface } from '~/interface/brand.interface'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'

export interface SearchDataInterface {
  categories: SearchCategoriesInterface[]
  brands: brandInterface[]
  carbrands: SearchApplicabilitiesInterface[]
}
