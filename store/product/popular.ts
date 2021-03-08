import { ProductsPopularInterface } from '@/interface/products/products-popular.interface'
import { TypeProductVuex } from '@/interface/products/products.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ProductPopularAxios } from '~/axios/products/product-popular.axios'

export const state = (): ProductsPopularInterface => ({
  popular: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setProductPopular(
    store: ProductsPopularInterface,
    categories: TypeProductVuex[]
  ) {
    store.popular = categories
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsCategories({ commit }) {
    const data: TypeProductVuex[] = await ProductPopularAxios(this.$axios)
    commit('setProductPopular', data)
  },
}
export const getters = {
  getProductPopular: (s: ProductsPopularInterface) => s.popular,
}
