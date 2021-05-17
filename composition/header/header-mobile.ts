import { computed, useStore } from '@nuxtjs/composition-api'

export function HeaderMobile() {
  const store = useStore()
  const activeNav = computed(() => {
    return store.getters['nav-mobile/getActive']
  })
  const setActiveMav = (name: string) => {
    store.commit('nav-mobile/setActive', name)
  }
  const setStart = () => {
    if (activeNav.value !== null) {
      store.commit('nav-mobile/setActive', null)
    } else {
      store.commit('nav-mobile/setActive', 'index')
    }
  }
  return { activeNav, setActiveMav, setStart }
}
