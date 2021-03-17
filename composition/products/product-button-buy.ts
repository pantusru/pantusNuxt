import {
  computed,
  useContext,
  useFetch,
  ssrRef,
  watch,
} from '@nuxtjs/composition-api'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export function ProductButtonBuy(id: number) {
  const { store } = useContext()
  const activeButton = ssrRef<boolean>(false)

  const getCart = computed(() => {
    return store.getters['cart/getCart']
  })
  const checkProduct = () => {
    activeButton.value = false
    for (const keyCart in getCart.value) {
      const checkProduct = getCart.value[keyCart].productOffer.filter(
        (elem: CartOfferInterface) => elem.id === id
      )
      if (checkProduct.length > 0) {
        activeButton.value = true
      }
    }
  }
  watch(
    () => getCart.value,
    () => {
      checkProduct()
    }
  )

  useFetch(() => {
    checkProduct()
  })

  return { activeButton }
}
