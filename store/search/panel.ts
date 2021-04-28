import Vue from 'vue'
import { MutationTree } from 'vuex'
import { SearchApplicabilitiesPanelStore } from '~/interface/search/search-applicabilities-panel.interface'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'

export const state = (): SearchApplicabilitiesPanelStore => ({
  searchApplicabilitiesPanel: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setNewPanel(store: SearchApplicabilitiesPanelStore) {
    store.searchApplicabilitiesPanel.push({
      selectedMarka: null,
      selectedModel: [],
      selectedGenerations: [],
      dataModel: [],
      dataGenerations: [],
    })
  },
  setLinkPanel(
    store: SearchApplicabilitiesPanelStore,
    data: { index: number; value: SearchApplicabilitiesInterface }
  ) {
    Vue.set(store.searchApplicabilitiesPanel, data.index, data.value)
  },
  deleteIndexPanel(state: SearchApplicabilitiesPanelStore, index: number) {
    state.searchApplicabilitiesPanel.splice(index, 1)
  },
  deletePanel(state: SearchApplicabilitiesPanelStore) {
    state.searchApplicabilitiesPanel = []
  },
  resetPanel(state: SearchApplicabilitiesPanelStore) {
    state.searchApplicabilitiesPanel = [
      {
        selectedMarka: null,
        selectedModel: [],
        selectedGenerations: [],
        dataModel: [],
        dataGenerations: [],
      },
    ]
  },
}

export const getters = {
  getSearchApplicabilitiesPanel: (s: SearchApplicabilitiesPanelStore) =>
    s.searchApplicabilitiesPanel,
}
