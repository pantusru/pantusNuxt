import {
  OrdersInterface,
  OrdersInterfaceApi,
} from '@/interface/orders.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const orderAxios = async (
  $axios: NuxtAxiosInstance
): Promise<OrdersInterface[]> => {
  const { data } = await $axios.get(`${process.env.api}/product_orders`)
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
