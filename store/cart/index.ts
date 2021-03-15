import { ActionTree, MutationTree } from 'vuex'
import {
  CartAxios,
  CartDeleteAxios,
  CartUpdateOfferAxios,
} from '@/axios/cart/cart.axios'
import {
  CartInterfaceStore,
  CartInterface,
  CartOfferInterface,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCountOfferCart(store, data: { offer: CartOfferInterface; count: number }) {
    data.offer.count = data.count
  },
  updateCountOfferCart(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store,
    offer: CartOfferInterface
  ) {
    offer.defaultCount = offer.count
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
  async actionsDeleteCart({ commit }, id: number) {
    const data: CartInterface[] = await CartDeleteAxios(this.$axios, id)
    commit('setCart', data)
  },
  async actionsUpdateOfferCart({ commit }, offers: CartOfferInterface) {
    const data: { error: object } | undefined = await CartUpdateOfferAxios(
      this.$axios,
      offers.id,
      offers.count
    )
    if (!data) {
      commit('updateCountOfferCart', offers)
    }
  },
}
export const getters = {
  getCart: (s: CartInterfaceStore) => s.cart,
}
