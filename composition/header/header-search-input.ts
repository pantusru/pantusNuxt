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
      await router.push(`/search?filter_substr=${search.value}`)
    } else {

    }
  }
  return { pushSearch, search }
}
