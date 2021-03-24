import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  OrdersPaymentInterface,
  OrdersPaymentInterfaceApi,
} from '~/interface/orders/orders-servers/orders-payment.interface'

export const orderPaymentAxios = async (
  $axios: NuxtAxiosInstance
): Promise<OrdersPaymentInterface[] | null> => {
  const { data }: { data: OrdersPaymentInterfaceApi[] } = await $axios.get(
    `${process.env.api}/orders/payment_services`
  )
  return orderPayment(data)
}

const orderPayment = (
  data: OrdersPaymentInterfaceApi[]
): OrdersPaymentInterface[] | null => {
  const orderPayment: OrdersPaymentInterface[] = []
  data.forEach((array) => {
    orderPayment.push({
      active: true,
      description: array.description,
      id: array.id,
      name: array.name,
    })
  })
  if (orderPayment.length === 0) {
    return null
  }
  return orderPayment
}
