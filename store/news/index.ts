import { ActionTree, MutationTree } from 'vuex'
import { NewsInterface } from '~/interface/news/news.interface'
import { CategoriesInterface } from '~/interface/categories.interface'
import {
  ResultNewsInterface,
  newsAxios,
  newsIdAxios,
} from '~/axios/news/news.axios'
import { NewsCategoriesAxios } from '~/axios/news/news-categories.axios'
export interface NewsInterfaceStore {
  count: number
  news: NewsInterface[]
  newsId: NewsInterface | null
  categories: CategoriesInterface[]
  newsPopular: NewsInterface[]
  limit: number
}
export const state = (): NewsInterfaceStore => ({
  categories: [],
  count: 0,
  news: [],
  newsId: null,
  newsPopular: [],
  limit: 12,
})
export type RootState = ReturnType<typeof state>
export const mutations: MutationTree<RootState> = {
  setNews(store: NewsInterfaceStore, data: ResultNewsInterface) {
    store.news = data.data
    store.count = data.count
  },
  setCategories(store: NewsInterfaceStore, data: CategoriesInterface[]) {
    store.categories = data
  },
  setNewsPopular(store: NewsInterfaceStore, data: NewsInterface[]) {
    store.newsPopular = data
  },
  setNewsId(store: NewsInterfaceStore, data: NewsInterface) {
    store.newsId = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsNews(
    { commit, state },
    params: { offers: number; categories?: number }
  ) {
    const data = await newsAxios(this.$axios, {
      categories: params.categories,
      offers: params.offers,
      limit: state.limit,
    })
    commit('setNews', data)
  },
  async actionsNewsId({ commit }, id: number) {
    const data = await newsIdAxios(this.$axios, id)
    commit('setNewsId', data)
  },
  async actionsNewsPopular({ commit }) {
    const data = await newsAxios(this.$axios, { limit: 9, offers: 0 })
    commit('setNewsPopular', data)
  },
  async actionsNewsCategories({ commit }) {
    const data = await NewsCategoriesAxios(this.$axios)
    commit('setCategories', data)
  },
}
