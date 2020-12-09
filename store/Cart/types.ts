import {
  interfaceCartProduct,
  interfaceOfferProduct,
} from "@/store/Products/types";
export interface interfaceCart {
  cartProduct: interfaceCartProduct;
  offerProduct: interfaceOfferProduct;
  count: number;
  checkCount: boolean;
}
