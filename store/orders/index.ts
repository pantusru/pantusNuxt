import { ActionTree, MutationTree } from 'vuex'
import {
  orderAxios,
  orderCountAxios,
  orderIdAxios,
} from '@/axios/order/order.axios'
import {
  OrdersInterface,
  OrdersInterfaceStore,
} from '~/interface/orders/orders.interface'
import { OrdersIdInterface } from '~/interface/orders/orders-id.interface'
export const state = (): OrdersInterfaceStore => ({
  orders: [],
  countOrders: 0,
  limit: 15,
  orderId: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setOrders(store: OrdersInterfaceStore, orders: OrdersInterface[]) {
    store.orders = orders
  },
  setCountOrders(store: OrdersInterfaceStore, count: number) {
    store.countOrders = count
  },
  setOrderId(store: OrdersInterfaceStore, data: OrdersIdInterface) {
    store.orderId = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsOrder({ commit }, page: number) {
    const data: OrdersInterface[] = await orderAxios(
      this.$axios,
      state().limit,
      page
    )
    const count: number = await orderCountAxios(this.$axios)
    commit('setOrders', data)
    commit('setCountOrders', count)
  },
  async actionsOrderId({ commit }, id: number) {
    const data: OrdersIdInterface = await orderIdAxios(this.$axios, id)
    commit('setOrderId', data)
  },
}
export const getters = {
  getOrder: (s: OrdersInterfaceStore) => s.orders,
  getOrderId: (s: OrdersInterfaceStore) => s.orderId,
  getOrderLimit: (s: OrdersInterfaceStore) => s.limit,
  getCountOrders: (s: OrdersInterfaceStore) => s.countOrders,
}
