import { ActionTree, MutationTree } from 'vuex'
import { CartAxios } from '@/axios/cart/cart.axios'
import {
  CartInterfaceStore,
  CartInterface,
} from '~/interface/cart/cart.interface'
export const state = (): CartInterfaceStore => ({
  cart: [],
  loaderCart: false,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setCart(store: CartInterfaceStore, cart: CartInterface[]) {
    store.cart = cart
  },
  setLoaderCart(store: CartInterfaceStore, loader: boolean) {
    store.loaderCart = loader
  },

  resetCart(store: CartInterfaceStore) {
    store.cart = []
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsCart({ commit }) {
    if (!state().loaderCart) {
      const data: CartInterface[] = await CartAxios(this.$axios)
      commit('setCart', data)
      commit('setLoaderCart', true)
    }
  },
}
export const getters = {
  getCart: (s: CartInterfaceStore) => s.cart,
}
