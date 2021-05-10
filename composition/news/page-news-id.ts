import { computed, useFetch, useRoute, useStore } from '@nuxtjs/composition-api'
export function PageNewsId() {
  const store = useStore()
  const route = useRoute()

  useFetch(async () => {
    const id = route.value.params.id
    await store.dispatch('news/actionsNewsId', id)
  })
  const newsId = computed(() => {
    return store.getters['news/getNewsId']
  })
  return { newsId }
}
