import { TypeProductVuex } from '@/interface/products/products.interface'
import { ActionTree, MutationTree } from 'vuex'
import {
  FavoritesAxios,
  FavoritesDeleteAxios,
  FavoritesPutAxios,
  FavoritesAxiosId,
} from '~/axios/favorites/favorites.axios'

interface favoritesStore {
  favoritesId: number[]
  favorites: TypeProductVuex[]
  loader: boolean
}

export const state = (): favoritesStore => ({
  favorites: [],
  favoritesId: [],
  loader: false,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setFavorites(store: favoritesStore, data: TypeProductVuex[]) {
    store.favorites = data
  },
  setFavoritesId(store: favoritesStore, data: number[]) {
    store.favoritesId = data
    store.loader = true
  },
  deleteFavorites(store: favoritesStore, id: number) {
    const index = store.favoritesId.findIndex((elem) => elem === id)
    store.favoritesId.splice(index, 1)
  },
  pushFavorites(store: favoritesStore, index: number) {
    store.favoritesId.push(index)
  },
  resetFavorites(store: favoritesStore) {
    store.favorites = []
    store.loader = false
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsFavorites({ commit }) {
    const data: TypeProductVuex[] = await FavoritesAxios(this.$axios)
    commit('setFavorites', data)
  },
  async actionsFavoritesId({ commit, getters }) {
    if (!getters.getFavoritesLoader) {
      const data: number[] = await FavoritesAxiosId(this.$axios)
      commit('setFavoritesId', data)
    }
  },
  async actionsDeleteFavorites({ commit }, id: number) {
    const dataset = await FavoritesDeleteAxios(this.$axios, id)
    if (!dataset.errors) {
      commit('deleteFavorites', id)
      return true
    }
  },
  async actionsPutFavorites({ commit }, id: number) {
    const dataset = await FavoritesPutAxios(this.$axios, id)
    if (!dataset.errors) {
      commit('pushFavorites', id)
      return true
    }
  },
}
export const getters = {
  getFavorites: (s: favoritesStore): TypeProductVuex[] => s.favorites,
  getFavoritesId: (s: favoritesStore): number[] => s.favoritesId,
  getFavoritesLoader: (s: favoritesStore): boolean => s.loader,
}
