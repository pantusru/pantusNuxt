import axios from 'axios'
import {
  CarbrandsInterface,
  CarbrandsInterfaceApi,
} from '@/interface/carbrands.interface'
export const carbrandsAxios = async (): Promise<CarbrandsInterface[]> => {
  const { data } = await axios.get(
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
