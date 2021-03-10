import {
  computed,
  useContext,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
export function PageOrdersId() {
  const { store } = useContext()
  const route = useRoute()
  useFetch(async () => {
    await store.dispatch('orders/actionsOrderId', route.value.params.id)
  })
  const getOrderId = computed(() => {
    return store.getters['orders/getOrderId']
  })
  return { getOrderId }
}
