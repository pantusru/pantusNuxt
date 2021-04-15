import {
  computed,
  useContext,
  useFetch,
  onUnmounted,
} from '@nuxtjs/composition-api'
export function PageProductsId() {
  const { store, route, redirect } = useContext()
  const getProductId = computed(() => {
    return store.getters['product/id/getProductId']
  })

  useFetch(async () => {
    const id = route.value.params.id
    await store.dispatch('product/id/actionsProductId', id)
    if (getProductId.value) {
      const articul = `${getProductId.value.productCard.sku.normalized}-${getProductId.value.productCard.brand.code}`
      if (articul !== route.value.params.articul) {
        redirect(`/products/${getProductId.value.productCard.id}/${articul}`)
      }
    } else {
      redirect(404, `/404`)
    }
  })

  const getActiveProductId = computed(() => {
    return store.getters['product/id/getActiveProductId']
  })

  onUnmounted(() => {
    store.commit('product/id/resetProductId')
  })
  return { getProductId, getActiveProductId }
}