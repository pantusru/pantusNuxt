import {
  MailRussiaInterfaceStore,
  MailRussiaInterface,
} from '@/interface/api/mail-russia-interface'
import { ActionTree, MutationTree } from 'vuex'
import { ApiMainRussiaAxios } from '~/axios/api/mail-russia.axios'

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
  async actionsMailRussia({ commit, rootGetters }, zip: string): Promise<void> {
    const summa = rootGetters['cart/getSumma']
    const weight = rootGetters['cart/getWeight']
    const data: MailRussiaInterface = await ApiMainRussiaAxios(
      this.$axios,
      summa,
      zip,
      weight
    )
    commit('setTown', data)
  },
}
export const getters = {
  getMailRussia: (s: MailRussiaInterfaceStore) => s.mailRussia,
}
