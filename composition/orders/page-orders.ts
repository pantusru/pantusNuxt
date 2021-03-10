import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
export function PageOrders() {
  const { store } = useContext()
  useFetch(async () => {
    await store.dispatch('orders/actionsOrder')
  })

  const getOrder = computed(() => {
    return store.getters['orders/getOrder']
  })

  return { getOrder }
}
