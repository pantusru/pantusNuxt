import {
  TypeCartProduct,
  TypeOfferProduct,
} from '~/interface/products/products.interface'

export interface CartOfferInterface extends TypeOfferProduct {}

export interface CartCartInterface extends TypeCartProduct {
  count?: number
}

export interface CartInterface {
  productCard: CartCartInterface
  productOffer: CartOfferInterface[]
}
export interface CartInterfaceStore {
  cart: CartInterface[] | []
}
