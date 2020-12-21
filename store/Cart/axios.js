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
    for (const key in data.dataCart) {
      data.dataCart[key].checkCount = false;

      if (data.dataCart[key].productOffer.length > 0) {
        for (const offer in data.dataApi) {
          data.dataCart[key].Count =
            data.dataApi[key].offers[offer].quantityInCart;
        }
      }
    }
    return data.dataCart;
  },
};
