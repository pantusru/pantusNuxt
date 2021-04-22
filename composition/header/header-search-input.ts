import { useRouter, useContext, computed } from '@nuxtjs/composition-api'
export function HeaderSearchInput() {
  const { store, route } = useContext()
  const router = useRouter()
  const search = computed({
    get: () => store.getters['search/form/getSearch'],
    set: (value) => {
      store.commit('search/form/setSearch', value)
    },
  })
  const pushSearch = async () => {
    if (route.value.name !== 'search') {
      // вы не находитесь в фильрах
      if (search.value) {
        // поиск указан
        await router.push(`/search?filter_substr=${search.value}`)
        return
      }
      await router.push(`/search`)
    }
  }
  return { pushSearch, search }
}
