import { brandInterface, brandInterfaceApi } from '@/interface/brand.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const BrandAxios = async (
  $axios: NuxtAxiosInstance
): Promise<brandInterface[]> => {
  const { data } = await $axios.get(`${process.env.api}/product_brands`)
  return brandMap(data)
}

const brandMap = (data: brandInterfaceApi[]): brandInterface[] => {
  const brand: brandInterface[] = []
  data.forEach((array) => {
    brand.push({
      name: array.name,
      code: array.code,
      id: array.id,
      active: array.contains_description,
    })
  })
  return brand
}
