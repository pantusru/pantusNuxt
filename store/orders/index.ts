import {
  OrdersInterface,
  OrdersInterfaceStore,
} from '@/interface/orders.interface'
import { ActionTree, MutationTree } from 'vuex'
import { orderAxios, orderCountAxios } from '@/axios/order/order.axios'
export const state = (): OrdersInterfaceStore => ({
  orders: [],
  countOrders: 0,
  limit: 15,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setOrders(store: OrdersInterfaceStore, orders: OrdersInterface[]) {
    store.orders = orders
  },
  setCountOrders(store: OrdersInterfaceStore, count: number) {
    store.countOrders = count
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
}
export const getters = {
  getOrder: (s: OrdersInterfaceStore) => s.orders,
  getOrderLimit: (s: OrdersInterfaceStore) => s.limit,
  getCountOrders: (s: OrdersInterfaceStore) => s.countOrders,
}
