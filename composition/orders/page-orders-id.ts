import {
  computed,
  useContext,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
export function PageOrdersId() {
  const { store, redirect } = useContext()
  const route = useRoute()
  const getOrderId = computed(() => {
    return store.getters['orders/getOrderId']
  })
  useFetch(async () => {
    await store.dispatch('orders/actionsOrderId', route.value.params.id)
    if (!getOrderId.value) {
      redirect('/404')
    }
  })

  return { getOrderId }
}
