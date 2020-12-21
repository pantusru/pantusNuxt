export const actions = {
  async _CartProduct({ rootGetters, dispatch }) {
    const data = await this.$axios.$get(`${process.env.api}/personal/cart`, {
      headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
    });
    let dataCart = await dispatch("Products/axios/_init_Product", data, {
      root: true,
    });
    dataCart = await dispatch("MapCart", { dataCart, dataApi: data });
    return dataCart;
  },
  MapCart({}, data) {
    for (const keyCart in data.dataApi) {
      if (data.dataCart[keyCart].productOffer.length !== 0) {
        for (const keyOffer in data.dataApi[keyCart].offers) {
          data.dataCart[keyCart].productOffer[keyOffer].Count =
            data.dataApi[keyCart].offers[keyOffer].quantityInCart;
          data.dataCart[keyCart].productOffer[keyOffer].checkCount = false;
        }
      }
    }
    return data.dataCart;
  },
};
