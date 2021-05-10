import { computed, useFetch, useRoute, useStore } from '@nuxtjs/composition-api'
export function PageNewsId() {
  const store = useStore()
  const route = useRoute()

  useFetch(async () => {
    const id = route.value.params.id
    await Promise.all([
      store.dispatch('news/actionsNewsId', id),
      store.dispatch('news/actionsNewsPopular'),
    ])
  })
  const newsId = computed(() => {
    return store.getters['news/getNewsId']
  })
  const newsPopular = computed(() => {
    return store.getters['news/getNewsPopular'].slice(0, 3)
  })
  return { newsId, newsPopular }
}
