import {
  TypeCartProduct,
  TypeOfferProduct,
} from '~/interface/products/products.interface'

export interface CartOfferInterface extends TypeOfferProduct {
  count?: number
}

export interface CartCartInterface extends TypeCartProduct {

}

export interface CartInterface {
  productCard: CartCartInterface
  productOffer: CartOfferInterface[]
}
export interface CartInterfaceStore {
  cart: CartInterface[] | []
}
