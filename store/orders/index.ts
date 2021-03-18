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
  orders: null,
  countOrders: 0,
  limit: 15,
  orderId: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  resetOrders(store: OrdersInterfaceStore) {
    store.orderId = null
    store.orders = null
    store.countOrders = 0
  },
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
    const data: OrdersInterface[] | null = await orderAxios(
      this.$axios,
      state().limit,
      page
    )
    const count: number = await orderCountAxios(this.$axios)
    commit('setOrders', data)
    commit('setCountOrders', count)
  },
  async actionsOrderId({ commit }, id: number) {
    const data: OrdersIdInterface | null = await orderIdAxios(this.$axios, id)
    commit('setOrderId', data)
  },
}
export const getters = {
  getOrder: (s: OrdersInterfaceStore) => s.orders,
  getOrderId: (s: OrdersInterfaceStore) => s.orderId,
  getOrderLimit: (s: OrdersInterfaceStore) => s.limit,
  getCountOrders: (s: OrdersInterfaceStore) => s.countOrders,
}
