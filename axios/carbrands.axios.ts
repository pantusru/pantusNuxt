import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  CarbrandsInterface,
  CarbrandsInterfaceApi,
} from '@/interface/carbrands.interface'

import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'

export const carbrandsAxios = async (
  $axios: NuxtAxiosInstance
): Promise<CarbrandsInterface[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/product_applicabilities?view=tree`
  )
  return carbrandsMap(data)
}
const carbrandsMainMap = (
  data: CarbrandsInterfaceApi,
  result: CarbrandsInterface[]
) => {
  result.push({
    name: data.name,
    code: data.code,
    id: data.id,
    children: [],
  })
}

const carbrandsMap = (data: CarbrandsInterfaceApi[]): CarbrandsInterface[] => {
  const carbrands: CarbrandsInterface[] = []
  data.forEach((array) => {
    carbrandsMainMap(array, carbrands)
  })
  return carbrands
}

// filter
export const carbrandsFilterAxios = async (
  $axios: NuxtAxiosInstance
): Promise<CarbrandsInterface[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/product_applicabilities?view=tree`
  )
  const dataset: SearchApplicabilitiesInterface[] = []
  carbrandsFilterMap(data, dataset)
  return dataset
}

const carbrandsFilterMap = (
  data: CarbrandsInterfaceApi[],
  res?: SearchApplicabilitiesInterface[]
): void => {
  data.forEach((array, index) => {
    res?.push({
      id: array.id,
      code: array.code,
      name: array.name,
      level: array.depthLevel,
      children: [],
      parentId: array.parentId,
      visible: true,
      selectCheck: false,
    })
    if (array.childs.length > 0) {
      carbrandsFilterMap(array.childs, res?.[index].children)
    }
  })
}
