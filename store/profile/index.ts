import {
  ProfileInterface,
  ProfileInterfaceStore,
} from '@/interface/profile.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ProfileAxios } from '@/axios/profile/profile.axios'
export const state = (): ProfileInterfaceStore => ({
  profile: undefined,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setProfile(store: ProfileInterfaceStore, profile: ProfileInterface) {
    store.profile = profile
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsProfile({ commit }) {
    const data: ProfileInterface | undefined = await ProfileAxios(this.$axios)
    if (data !== undefined) {
      commit('setProfile', data)
    }
  },
}
export const getters = {
  getProfile: (s: ProfileInterfaceStore) => s.profile,
}
