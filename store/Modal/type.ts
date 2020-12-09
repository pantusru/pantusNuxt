import { interfaceOfferProduct, interfaceCartProduct } from "../Products/types";
export interface interfaceModalProduct {
  linkProduct: interfaceCartProduct;
  linkOffer: interfaceOfferProduct;
  checkCart: boolean;
}
export interface interfaceModalImg {
  linkProduct: interfaceCartProduct;
}
