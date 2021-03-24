import { ActionTree, MutationTree } from 'vuex'
import { orderRulesAxios } from '@/axios/order/orders-servers/orders-rules.axios'
import {
  OrdersRulesInterface,
  OrdersRulesInterfaceStore,
} from '~/interface/orders/orders-servers/orders-rules.interface'

export const state = (): OrdersRulesInterfaceStore => ({
  orderRules: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setOrderRules(
    store: OrdersRulesInterfaceStore,
    data: OrdersRulesInterface[]
  ) {
    store.orderRules = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsOrder({ commit }) {
    const data: OrdersRulesInterface[] | null = await orderRulesAxios(
      this.$axios
    )
    commit('setOrderRules', data)
  },
}
export const getters = {
  getOrderRules: (s: OrdersRulesInterfaceStore) => s.orderRules,
}
