import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
export function PageProductsId() {
  const { store, route } = useContext()
  useFetch(async () => {
    const id = route.value.params.id
    await store.dispatch('product/id/actionsProductId', id)
  })

  const getProductId = computed(() => {
    return store.getters['product/id/getProductId']
  })

  return { getProductId }
}
