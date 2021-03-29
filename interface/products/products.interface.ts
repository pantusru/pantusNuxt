/***
 *  @type CatalogProductType - Каталог для продукта
 */
export type CatalogProductType = {
  id: number
  name: string
}
/***
 *  @type TypeParamsProduct - параметры для продукта
 */
export type TypeParamsProduct = {
  measure: string
  weight: number
}
/***
 *  @type brandProduct - Бренд для продукта
 */
export type TypeBrandProduct = {
  id: number
  name: string
  deliveryDelay: number
  code: string
}
/***
 *  @type skuProduct - артикуль для продукта
 */
export type TypeSkuProduct = {
  normalized: string
  original: string
}
/***
 *  @type TypeSupplier - поставщик продуктов
 */
export type TypeSupplier = {
  deliveryDelay: number
  name: string
}
/***
 *  @type cartProduct - карточка для продукта
 */

export type TypeCartProduct = {
  id: number
  name: string
  sku: TypeSkuProduct
  productCardImage: {
    url: string
  }
  params: TypeParamsProduct
  oem: string[]
  album: string[]
  applicability: CatalogProductType[]
  categories: CatalogProductType[]
  brand: TypeBrandProduct
}
/***
 *  @type offerProduct - предложения для продукта
 */
export type TypeOfferProduct = {
  id: number
  multiplicity: number
  prices: number
  quantity: number
  supplier: TypeSupplier
}
/***
 *  @type product - единица продукта
 */
export type TypeProductVuex = {
  productCard: TypeCartProduct
  productOffer: TypeOfferProduct[]
}
