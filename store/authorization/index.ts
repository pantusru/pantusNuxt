import {
  AuthorizationInterface,
  AuthorizationInterfaceStore,
} from '@/interface/authorization.interface'
import { ActionTree, MutationTree } from 'vuex'
import { AuthorizationAxios } from '@/axios/authorization.axios'

export const state = (): AuthorizationInterfaceStore => ({
  loaderUser: false,
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setLoaderUser(store: AuthorizationInterfaceStore, data: boolean) {
    store.loaderUser = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async actionsAuthorization({ commit }): Promise<void> {
    const data: AuthorizationInterface = await AuthorizationAxios(this.$axios)
    this.app.$cookies.set('Authorization', data.token)
    commit('setLoaderUser')
    if (data.id) {
      // Запрос на получение user
    }
  },
}
export const getters = {
  getLoaderUser: (s: AuthorizationInterfaceStore) => s.loaderUser,
}
