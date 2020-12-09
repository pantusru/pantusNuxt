/***
 *  @interface catalogProduct - Каталог для продукта
 */
export interface interfaceCatalogProduct {
  id: number;
  name: string;
}
/***
 *  @interface paramsProduct - параметры для продукта
 */
export interface interfaceParamsProduct {
  measure: string;
}
/***
 *  @interface brandProduct - Бренд для продукта
 */
export interface interfaceBrandProduct {
  id: number;
  name: string;
  deliveryDelay: string;
}
/***
 *  @interface skuProduct - артикуль для продукта
 */
export interface interfaceSkuProduct {
  normalized: string;
  original: string;
}
/***
 *  @interface interfaceSupplier - поставщик продуктов
 */
export interface interfaceSupplier {
  deliveryDelay: number;
  deliveryDelayView: string;
  name: string;
}
/***
 *  @interface cartProduct - карточка для продукта
 */

export interface interfaceCartProduct {
  id: number;
  name: string;
  sku: interfaceSkuProduct;
  productCardImage: {
    url: string;
  };
  params: interfaceParamsProduct;
  productCardOem: string[];
  album: string[];
  applicability: interfaceCatalogProduct[];
  categories: interfaceCatalogProduct[];
  brand: interfaceBrandProduct;
}
/***
 *  @interface offerProduct - предложения для продукта
 */
export interface interfaceOfferProduct {
  id: number;
  multiplicity: number;
  prices: number;
  quantity: number;
  supplier: interfaceSupplier;
}
/***
 *  @interface product - единица продукта
 */
export interface interfaceProduct {
  productCard: interfaceCartProduct;
  productOffer: interfaceOfferProduct[];
}
