import { useContext, computed } from '@nuxtjs/composition-api'

export function FilterApplicabiliriesButtonReset() {
  const { store } = useContext()
  const PanelAll = computed(
    () => store.getters['search/panel/getSearchApplicabilitiesPanel']
  )
  const resetPanel = () => {
    store.commit('search/panel/deletePanel')
  }
  return { PanelAll, resetPanel }
}
