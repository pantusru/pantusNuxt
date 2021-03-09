import {
  OrdersInterface,
  OrdersInterfaceStore,
} from '@/interface/Orders.interface'
import { ActionTree, MutationTree } from 'vuex'
import { orderAxios } from '@/axios/order/order.axios'
export const state = (): OrdersInterfaceStore => ({
  orders: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setOrders(store: OrdersInterfaceStore, orders: OrdersInterface[]) {
    store.orders = orders
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsOrder({ commit }) {
    const data: OrdersInterface[] = await orderAxios(this.$axios)
    commit('setOrders', data)
  },
}
export const getters = {
  getOrder: (s: OrdersInterfaceStore) => s.orders,
}
