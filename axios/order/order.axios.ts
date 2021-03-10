import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  OrdersInterface,
  OrdersInterfaceApi,
} from '~/interface/orders.interface.ts'

export const orderAxios = async (
  $axios: NuxtAxiosInstance,
  limit: number = 15,
  page: number = 1
): Promise<OrdersInterface[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/personal/orders?sort_order=desc&page_size=${limit}&page_number=${page}`
  )
  return orderMap(data)
}

const orderMap = (data: OrdersInterfaceApi[]): OrdersInterface[] => {
  const order: OrdersInterface[] = []
  data.forEach((array) => {
    order.push({
      date: array.dates.created,
      id: array.id,
      status: {
        code: array.status.code,
        name: array.status.name,
      },
    })
  })
  return order
}
