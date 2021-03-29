import {
  MailRussiaInterfaceStore,
  MailRussiaInterface,
} from '@/interface/api/mail-russia-interface'
import { ActionTree, MutationTree } from 'vuex'
import { ApiTownAxios } from '~/axios/api/town.axios'

export const state = (): MailRussiaInterfaceStore => ({
  mailRussia: null,
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setMailRussia(store: MailRussiaInterfaceStore, data: MailRussiaInterface) {
    store.mailRussia = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async actionsMailRussia({ commit }, search: string): Promise<void> {
    const data: MailRussiaInterface = await ApiTownAxios(this.$axios, search)
    commit('setTown', data)
  },
}
export const getters = {
  getMailRussia: (s: MailRussiaInterfaceStore) => s.mailRussia,
}
