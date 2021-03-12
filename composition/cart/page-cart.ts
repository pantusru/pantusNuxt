import { computed, useContext } from '@nuxtjs/composition-api'
export function PageCart() {
  const { store } = useContext()
  // useFetch(async () => {
  //   await store.dispatch('cart/actionsCart')
  // })

  const getCart = computed(() => {
    return store.getters['cart/getCart']
  })

  return { getCart }
}
