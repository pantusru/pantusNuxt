import { computed, useContext } from '@nuxtjs/composition-api'
export function CartGroupButton() {
  const { store } = useContext()
  const getUserAuthorization = computed(() => {
    return store.getters['authorization/getUserAuthorization']
  })
  const getCartAxios = computed(() => {
    return store.getters['cart/getCartAxios']
  })
  return { getCartAxios, getUserAuthorization }
}
