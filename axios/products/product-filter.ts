// import { TypeProductApi } from '@/interface/products/products-api.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'
import { SearchFormInterface } from '~/interface/search/search-form.interface'
import { InterfaceFilterProductMap } from '~/store/product/filter'

export const ProductFilterAxios = async (
  $axios: NuxtAxiosInstance,
  searchFilter: SearchFormInterface,
  limit: number
): Promise<InterfaceFilterProductMap> => {
  const { data } = await $axios.get(`${process.env.api}/products_filter`, {
    params: {
      filter_categories: searchFilter.categoriesChecked.join(),
      filter_brands: searchFilter.brandChecked.join(),
      filter_applicabilities: searchFilter.applicabilitiesChecked.join(),
      page_number: searchFilter.page,
      filter_substr: searchFilter.search,
      page_size: limit,
    },
  })
  return { data: ProductsMap(data.data), count: data.meta.count }
}
