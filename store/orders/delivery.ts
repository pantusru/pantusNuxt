import { ActionTree, MutationTree } from 'vuex'
import { orderDeliveryAxios } from '@/axios/order/orders-servers/orders-delivery.axios'
import {
  OrdersDeliveryInterface,
  OrdersDeliveryInterfaceStore,
} from '~/interface/orders/orders-servers/orders-delivery.interface'

export const state = (): OrdersDeliveryInterfaceStore => ({
  orderDelivery: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setOrderDelivery(
    store: OrdersDeliveryInterfaceStore,
    data: OrdersDeliveryInterface[]
  ) {
    store.orderDelivery = data
  },
  activeOrderDelivery(
    store: OrdersDeliveryInterfaceStore,
    data: { index: number; check: boolean }
  ) {
    if (store.orderDelivery) {
      store.orderDelivery[data.index].active = data.check
    }
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsOrder({ commit }) {
    const data: OrdersDeliveryInterface[] | null = await orderDeliveryAxios(
      this.$axios
    )
    commit('setOrderDelivery', data)
  },
}
export const getters = {
  getOrderDelivery: (s: OrdersDeliveryInterfaceStore) => s.orderDelivery,
}
