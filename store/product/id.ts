import { TypeProductVuex } from '@/interface/products/products.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ProductIdAxios } from '~/axios/products/product-id.axios'
import { ProductIdInterface } from '~/interface/products/product-id.interface'

export const state = (): ProductIdInterface => ({
  productId: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setProductId(store: ProductIdInterface, data: TypeProductVuex) {
    store.productId = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsProductId({ commit }, id: number) {
    const data: TypeProductVuex | null = await ProductIdAxios(this.$axios, id)
    commit('setProductId', data)
  },
}
export const getters = {
  getProductId: (s: ProductIdInterface): TypeProductVuex | null => s.productId,
}
