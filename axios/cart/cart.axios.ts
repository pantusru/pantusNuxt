import { CartInterface } from '@/interface/cart/cart.interface'
import { CartInterfaceApi } from '@/interface/cart/cart-api.interface'
import { TypeProductVuex } from '@/interface/products/products.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'

export const CartAxios = async (
  $axios: NuxtAxiosInstance
): Promise<CartInterface[]> => {
  const { data } = await $axios.get(`${process.env.api}/personal/cart`)
  const product = ProductsMap(data)
  return CartMap(product, data)
}

const CartMap = (
  data: TypeProductVuex[],
  api: CartInterfaceApi[]
): CartInterface[] => {
  const result: CartInterface[] = data
  api.forEach((elem, index) => {
    elem.offers.forEach((elemOffers, indexOffers) => {
      result[index].productOffer[indexOffers].count = elemOffers.quantityInCart
    })
  })
  return result
}
