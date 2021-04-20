// import { TypeProductApi } from '@/interface/products/products-api.interface'
import { TypeProductVuex } from '@/interface/products/products.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'
import { SearchFormInterface } from '~/interface/search/search-form.interface'

export const ProductFilterAxios = async (
  $axios: NuxtAxiosInstance,
  searchFilter: SearchFormInterface
): Promise<TypeProductVuex[]> => {
  console.log(searchFilter)
  const { data } = await $axios.get(`${process.env.api}/products_filter`, {
    params: {
      filter_categories: searchFilter.categoriesChecked,
      filter_brands: searchFilter.brandChecked,
      filter_applicabilities: searchFilter.applicabilitiesChecked,
      page_number: searchFilter.page,
      filter_substr: searchFilter.search,
      page_size: 50,
    },
  })
  return ProductsMap(data.data)
}
