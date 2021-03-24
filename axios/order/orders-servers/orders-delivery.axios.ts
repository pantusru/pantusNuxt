import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  OrdersDeliveryInterface,
  OrdersDeliveryInterfaceApi,
} from '~/interface/orders/orders-servers/orders-delivery.interface'

export const orderDeliveryAxios = async (
  $axios: NuxtAxiosInstance
): Promise<OrdersDeliveryInterface[] | null> => {
  const { data }: { data: OrdersDeliveryInterfaceApi[] } = await $axios.get(
    `${process.env.api}/orders/delivery_services`
  )
  return orderDelivery(data)
}

const orderDelivery = (
  data: OrdersDeliveryInterfaceApi[]
): OrdersDeliveryInterface[] | null => {
  const orderDelivery: OrdersDeliveryInterface[] = []
  data.forEach((array) => {
    orderDelivery.push({
      active: true,
      city: array.default_city,
      defaultDescription: array.description,
      description: array.description,
      defaultPrice: array.default_price,
      price: array.default_price,
      extra: array.extra,
      id: array.id,
      name: array.name,
      zip: array.zip,
    })
  })
  if (orderDelivery.length === 0) {
    return null
  }
  return orderDelivery
}
