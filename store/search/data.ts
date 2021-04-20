import { ActionTree, MutationTree } from 'vuex'
import vue from 'Vue'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { SearchDataInterface } from '~/interface/search/data/search-data.interface'
import { brandInterface } from '~/interface/brand.interface'

import { brandAxios } from '~/axios/brand.axios'
import { carbrandsFilterAxios } from '~/axios/carbrands.axios'
import { categoriesFilterAxios } from '~/axios/categories.axios'
export const state = (): SearchDataInterface => ({
  brands: [],
  carbrands: [],
  categories: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setFilterCarbrands(
    store: SearchDataInterface,
    data: SearchApplicabilitiesInterface[]
  ) {
    store.carbrands = data
  },

  setCarbrandsTopSelect(store: SearchDataInterface, index: number) {
    store.carbrands[index].selectCheck = !store.carbrands[index].selectCheck
  },

  setFilterCategories(
    store: SearchDataInterface,
    data: SearchCategoriesInterface[]
  ) {
    store.categories = data
  },
  setChecked(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store: SearchDataInterface,
    data: {
      data: SearchCategoriesInterface
      checkedType: boolean
      indeterminate: boolean
    }
  ) {
    data.data.indeterminate = data.indeterminate
    data.data.checkedType = data.checkedType
  },
  setFilterBrands(store: SearchDataInterface, data: brandInterface[]) {
    store.brands = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async actionsFilter({ commit }) {
    const data = await Promise.all([
      brandAxios(this.$axios),
      categoriesFilterAxios(this.$axios),
      carbrandsFilterAxios(this.$axios),
    ])
    commit('setFilterBrands', data[0])
    commit('setFilterCategories', data[1])
    commit('setFilterCarbrands', data[2])
  },
}

export const getters = {
  getCarbrands: (s: SearchDataInterface) => s.carbrands,
  getCategories: (s: SearchDataInterface) => s.categories,
  getBrands: (s: SearchDataInterface) => s.brands,
}
