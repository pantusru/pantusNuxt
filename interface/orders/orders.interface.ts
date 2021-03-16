import { OrdersIdInterface } from '~/interface/orders/orders-id.interface'

export interface OrdersInterface {
  id: number
  date: string
  status: {
    name: string
    code: string
  }
}
export interface OrdersInterfaceApi {
  id: number
  offersCount: number
  price: number
  status: {
    code: string
    name: string
  }
  address: {
    city: string
    detailed: string
  }
  dates: {
    created: string
    modified: string
    statusUpdate: string
  }
  delivery: {
    allow: boolean
    price: number
    trackingCode: string
  }
}
export interface OrdersInterfaceStore {
  orders: OrdersInterface[] | null
  orderId: OrdersIdInterface | null
  countOrders: number
  limit: number
}