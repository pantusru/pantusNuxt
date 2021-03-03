import {
  brandInterfaceStore,
  brandInterface,
} from '@/interface/brand.interface'
import { BrandAxios } from '@/axios/brand.axios'
import { ActionTree, MutationTree } from 'vuex'
export const state = (): brandInterfaceStore => ({
  brand: [],
  limitPage: 50,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setBrand(store: brandInterfaceStore, brand: brandInterface[]) {
    store.brand = brand
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsBrand({ commit }) {
    const data: brandInterface[] = await BrandAxios(this.$axios)
    commit('setBrand', data)
  },
}
export const getters = {
  getBrand: (s: brandInterfaceStore) => s.brand,
  getBrandPage: (s: brandInterfaceStore) => (id: number) => {
    if (isNaN(id)) {
      id = 1
    }
    return s.brand.slice((id - 1) * s.limitPage, s.limitPage * id)
  },
  getLimitPage: (s: brandInterfaceStore) => s.limitPage,
}
