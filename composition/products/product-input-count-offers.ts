import { ssrRef } from '@nuxtjs/composition-api'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export function ProductInputCountOffers() {
  const count = ssrRef(1)
  const error = ssrRef({
    check: false,
    text: 'Не валидное кол-во товара',
  })
  const lengthCount = (count: number): number => {
    if (count.toString().length >= 8) {
      return Number(count.toString().slice(0, 8))
    }
    return count
  }
  const nullCount = (offer: CartOfferInterface, count: number) => {
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

  const countOffers = (offer: CartOfferInterface, count: string) => {
    error.value.check = false
    let countNumber = Number(count.replace(/[^\d]/g, ''))
    countNumber = lengthCount(countNumber)
    countNumber = multiplicityCount(offer, countNumber)
    return nullCount(offer, countNumber)
  }

  const errorFalse = (offer: CartOfferInterface, count: number): number => {
    let countNumber = multiplicityCount(offer, count)
    countNumber = lengthCount(count)
    error.value.check = false
    return nullCount(offer, countNumber)
  }
  return {
    lengthCount,
    nullCount,
    multiplicityCount,
    countOffers,
    errorFalse,
    error,
    count,
  }
}
