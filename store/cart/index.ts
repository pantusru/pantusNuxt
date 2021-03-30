import { ActionTree, MutationTree } from 'vuex'
import { CartAxios, CartDeleteAxios } from '@/axios/cart/cart.axios'
import {
  CartInterfaceStore,
  CartInterface,
} from '~/interface/cart/cart.interface'
export const state = (): CartInterfaceStore => ({
  cart: [],
  loaderCart: false,
  cartAxios: false,
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
  setCartAxios(store: CartInterfaceStore, check: boolean) {
    store.cartAxios = check
  },
  deleteOfferCart(store, data: { indexOffer: number; indexProduct: number }) {
    store.cart[data.indexProduct].productOffer.splice(data.indexOffer, 1)
    if (store.cart[data.indexProduct].productOffer.length === 0) {
      store.cart.splice(data.indexProduct, 1)
    }
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsCart({ state, commit }) {
    if (!state.loaderCart) {
      const data: CartInterface[] = await CartAxios(this.$axios)
      commit('setCart', data)
      commit('setLoaderCart', true)
    }
  },
  async actionsDeleteCart({ state, commit, dispatch }, id: number) {
    const data: object = await CartDeleteAxios(this.$axios, id)
    if (!data) {
      state.cart.forEach((product, indexProduct) => {
        const indexOffer = product.productOffer.findIndex(
          (offer) => offer.id === id
        )
        if (indexOffer !== -1) {
          commit('deleteOfferCart', { indexOffer, indexProduct })
        }
      })
      await dispatch('count/actionsResetOfferCart')
    }
  },
}
export const getters = {
  getCart: (s: CartInterfaceStore) => s.cart,
  getCartAxios: (s: CartInterfaceStore): boolean => s.cartAxios,
  getSumma: (s: CartInterfaceStore) => {
    let summa = 0
    s.cart.forEach((elem) => {
      elem.productOffer.forEach((offers) => {
        if (offers.count) {
          summa += offers.count * offers.prices
        }
      })
    })
    return summa
  },
  getWeight: (s: CartInterfaceStore) => {
    let weight = 0
    s.cart.forEach((elem) => {
      weight += elem.productCard.params.weight
    })
    return weight
  }
}
