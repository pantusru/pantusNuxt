import {
  computed,
  useContext,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
export function PageOrders() {
  const { store } = useContext()
  const route = useRoute()
  useFetch(async () => {
    await paginationOrder()
  })
  const paginationOrder = async () => {
    let page = 1
    if (route.value.query.page && route.value.query) {
      page = Number(route.value.query.page)
    }
    await store.dispatch('orders/actionsOrder', page)
  }
  const getOrder = computed(() => {
    return store.getters['orders/getOrder']
  })
  const getLimit = computed(() => {
    return store.getters['orders/getOrderLimit']
  })
  const getCountOrders = computed(() => {
    return store.getters['orders/getCountOrders']
  })
  return { getOrder, getLimit, getCountOrders, paginationOrder }
}
