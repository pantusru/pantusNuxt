import { ProductsPopularInterface } from '@/interface/products/products-popular.interface'
import { TypeProductVuex } from '@/interface/products/products.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ProductFilterAxios } from '~/axios/products/product-filter'

interface FilterProduct {
  filter: TypeProductVuex[]
}

export const state = (): FilterProduct => ({
  filter: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setProductFilter(store: FilterProduct, data: TypeProductVuex[]) {
    store.filter = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsProductFilter({ commit, rootGetters }) {
    const data: TypeProductVuex[] = await ProductFilterAxios(
      this.$axios,
      rootGetters['search/form/getForm']
    )
    commit('setProductFilter', data)
  },
}
export const getters = {
  getProductFilter: (s: FilterProduct) => s.filter,
}
