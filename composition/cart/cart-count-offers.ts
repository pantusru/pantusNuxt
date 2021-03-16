import { useContext, ssrRef } from '@nuxtjs/composition-api'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export function CartCountOffers() {
  const { store } = useContext()
  const error = ssrRef({
    check: false,
    text: 'Не валидное кол-во товара',
  })
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
  const lengthCount = (offer: CartOfferInterface, count: number): number => {
    if (count.toString().length >= 8) {
      return Number(count.toString().slice(0, 8))
    }
    return count
  }
  const nullCount = (offer: CartOfferInterface, count: number): number => {
    if (count <= 0 || !count) {
      error.value.check = true
      return offer.multiplicity
    }
    return count
  }
  const multiplicityCount = (
    offer: CartOfferInterface,
    count: number
  ): number => {
    const ost = count % offer.multiplicity
    if (ost > 0) {
      count = count - ost
      error.value.check = true
    }
    return count
  }
  const cartCountOffers = async (offer: CartOfferInterface, count: string) => {
    error.value.check = false
    let countNumber = Number(count.replace(/[^\d]/g, ''))
    countNumber = lengthCount(offer, countNumber)
    const check = multiplicityCount(offer, countNumber)
    nullCount(offer, check)
    await commitCount(offer, countNumber)
  }
  const errorFalse = async (offer: CartOfferInterface, count: number) => {
    count = multiplicityCount(offer, count)
    count = lengthCount(offer, count)
    count = nullCount(offer, count)
    await commitCount(offer, Number(count))
    error.value.check = false
  }

  return { cartCountOffers, error, errorFalse }
}
