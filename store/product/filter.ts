import { TypeProductVuex } from '@/interface/products/products.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ProductFilterAxios } from '~/axios/products/product-filter'

interface InterfaceFilterProduct {
  filter: TypeProductVuex[]
  limit: number
  count: number
  searchStart: boolean
}
export interface InterfaceFilterProductMap {
  data: TypeProductVuex[]
  count: number
}

export const state = (): InterfaceFilterProduct => ({
  filter: [],
  limit: 50,
  count: 0,
  searchStart: true,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setProductFilter(
    store: InterfaceFilterProduct,
    data: InterfaceFilterProductMap
  ) {
    store.filter = data.data
    store.count = data.count
  },
  setSearchStart(store: InterfaceFilterProduct, data: boolean) {
    store.searchStart = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsProductFilter({ state, commit, rootGetters }) {
    const data: InterfaceFilterProductMap = await ProductFilterAxios(
      this.$axios,
      rootGetters['search/form/getForm'],
      state.limit
    )
    commit('setProductFilter', data)
  },
}
export const getters = {
  getProductFilter: (s: InterfaceFilterProduct) => s.filter,
  getProductLimit: (s: InterfaceFilterProduct) => s.limit,
  getProductCount: (s: InterfaceFilterProduct) => s.count,
  getSearchStart: (s: InterfaceFilterProduct) => s.searchStart,
}
