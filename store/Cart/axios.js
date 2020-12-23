export const actions = {
  async _CartProduct({ rootGetters, dispatch }) {
    const data = await this.$axios.$get(`${process.env.api}/personal/cart`, {
      headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
    });
    let dataCart = await dispatch("Products/axios/_init_Product", data, {
      root: true,
    });
    if (dataCart.length !== 0) {
      dataCart = await dispatch("MapCart", { dataCart, dataApi: data });
      return dataCart;
    } else {
      return [];
    }
  },
  async _CartProductDelete({ rootGetters, dispatch, commit }, id) {
    const data = await this.$axios.$delete(
      `${process.env.api}/personal/cart/${id}`,
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    let dataCart = await dispatch("Products/axios/_init_Product", data, {
      root: true,
    });
    if (dataCart.length !== 0) {
      dataCart = await dispatch("MapCart", { dataCart, dataApi: data });
      return dataCart;
    } else {
      return [];
    }
  },
  async _CartProductPut({ rootGetters, dispatch, commit }, data) {
    console.log(data);
    const dataset = await this.$axios.$put(
      `${process.env.api}/personal/cart/${data.id}`,
      {
        quantity: data.quantity,
      },
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    let dataCart = await dispatch("Products/axios/_init_Product", dataset, {
      root: true,
    });
    if (dataCart.length !== 0) {
      dataCart = await dispatch("MapCart", { dataCart, dataApi: dataset });
      return dataCart;
    } else {
      return [];
    }
  },
  MapCart({}, data) {
    if (data.dataCart.length > 0) {
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
    } else {
      return [];
    }
  },
};
