import { useContext } from '@nuxtjs/composition-api'
import { ProductInputCountOffers } from '@/composition/products/product-input-count-offers'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export function CartCountOffers() {
  const { error, errorFalse, countOffers } = ProductInputCountOffers()
  const { store } = useContext()
  const commitCount = async (offer: CartOfferInterface, count: number) => {
    store.commit('cart/count/setCountOfferCart', {
      offer,
      count: 0,
    })
    await store.dispatch('cart/count/actionsSetCountOfferCart', {
      offer,
      count,
    })
  }

  const cartCountOffers = async (offer: CartOfferInterface, count: string) => {
    const countNumber = countOffers(offer, count)
    await commitCount(offer, countNumber)
  }

  const cartErrorFalse = async (offer: CartOfferInterface, count: number) => {
    const countNumber = errorFalse(offer, count)
    await commitCount(offer, countNumber)
  }

  return { cartCountOffers, error, cartErrorFalse }
}
