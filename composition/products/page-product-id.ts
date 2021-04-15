import {
  computed,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
import { TypeProductVuex } from '~/interface/products/products.interface'
export function PageProductsId() {
  const { store, route, redirect } = useContext()
  useFetch(async () => {
    const id = route.value.params.id
    await store.dispatch('product/id/actionsProductId', id)
    const ProductId: TypeProductVuex = store.getters['product/id/getProductId']
    if (ProductId) {
      const articul = `${ProductId.productCard.sku.original}-${ProductId.productCard.brand.name}`
      if (articul !== route.value.params.articul) {
        // redirect(`/products/${ProductId.productCard.id}/${articul}`)
      }
    } else {
      redirect(404, `/404`)
    }
  })

  const getProductId = computed(() => {
    return store.getters['product/id/getProductId']
  })

  return { getProductId }
}
