import { useContext, ssrRef } from '@nuxtjs/composition-api'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export function CartCountOffers(offer: CartOfferInterface) {
  const { store } = useContext()
  const error = ssrRef({
    check: false,
    text: 'Не валидное кол-во товара',
  })
  const commitCount = (count: number) => {
    store.commit('cart/setCountOfferCart', {
      offer,
      count: 0,
    })
    store.commit('cart/setCountOfferCart', {
      offer,
       count,
    })
  }
  const lengthCount = (count: number): number => {
    if (count.toString().length >= 8) {
      return Number(count.toString().slice(0, 8))
    }
    return count
  }
  const nullCount = (count: number): number => {
    if (count <= 0 || !count) {
      error.value.check = true
      return offer.multiplicity
    }
    return count
  }
  const multiplicityCount = (count: number): number => {
    const ost = count % offer.multiplicity
    if (ost > 0) {
      count = count - ost
      error.value.check = true
    }
    return count
  }
  const cartCountOffers = (count: string) => {
    offer.multiplicity = 3
    error.value.check = false
    let countNumber = Number(count.replace(/[^\d]/g, ''))
    countNumber = lengthCount(countNumber)
    const check = multiplicityCount(countNumber)
    nullCount(check)
    commitCount(countNumber)
  }
  const errorFalse = (count: number) => {
    count = multiplicityCount(count)
    count = lengthCount(count)
    count = nullCount(count)
    commitCount(count)
    error.value.check = false
  }

  return { cartCountOffers, error, errorFalse }
}
