export const actions = {
  async validateCart({ dispatch }, data) {
    if (data.error === undefined) {
      const dataCart = await dispatch("Products/axios/_init_Product", data, {
        root: true,
      });
      return await dispatch("MapCart", { dataCart, dataApi: data });
    } else {
      return [];
    }
  },
  async _CartProduct({ rootGetters, dispatch }) {
    const data = await this.$axios.$get(`${process.env.api}/personal/cart`, {
      headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
    });
    return await dispatch("validateCart", data);
    // console.log(data);
    // let dataCart = await dispatch("Products/axios/_init_Product", data, {
    //   root: true,
    // });
    // if (dataCart.length !== 0) {
    //   dataCart = await dispatch("MapCart", { dataCart, dataApi: data });
    //   return dataCart;
    // }
  },
  async _CartProductDelete({ rootGetters, dispatch, commit }, id) {
    const data = await this.$axios.$delete(
      `${process.env.api}/personal/cart/${id}`,
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    return await dispatch("validateCart", data);
    // let dataCart = await dispatch("Products/axios/_init_Product", data, {
    //   root: true,
    // });
    // if (dataCart.length !== 0) {
    //   dataCart = await dispatch("MapCart", { dataCart, dataApi: data });
    //   return dataCart;
    // } else {
    //   return [];
    // }
  },
  async _CartProductPut({ rootGetters, dispatch, commit }, data) {
    const dataset = await this.$axios.$put(
      `${process.env.api}/personal/cart/${data.id}`,
      {
        quantity: data.quantity,
      },
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    return await dispatch("validateCart", dataset);
    // let dataCart = await dispatch("Products/axios/_init_Product", dataset, {
    //   root: true,
    // });
    // if (dataCart.length !== 0) {
    //   dataCart = await dispatch("MapCart", { dataCart, dataApi: dataset });
    //   return dataCart;
    // } else {
    //   return [];
    // }
  },
  async _CartProductPutAll({ rootGetters, dispatch, commit }, data) {
    const dataset = await this.$axios.$put(
      `${process.env.api}/personal/cart`,
      {
        ...data,
      },
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    return await dispatch("validateCart", dataset);
    // if (dataset.length !== 0) {
    //   const dataCart = await dispatch("Products/axios/_init_Product", dataset, {
    //     root: true,
    //   });
    //   if (dataCart.length !== 0) {
    //     return await dispatch("MapCart", { dataCart, dataApi: dataset });
    //   }
    // }
  },
  MapCart({ commit }, data) {
    let cartActiveAll = true;
    if (data.dataCart.length > 0) {
      for (const keyCart in data.dataApi) {
        if (data.dataCart[keyCart].productOffer.length !== 0) {
          for (const keyOffer in data.dataApi[keyCart].offers) {
            data.dataCart[keyCart].productOffer[keyOffer].Count =
              data.dataApi[keyCart].offers[keyOffer].quantityInCart;
            data.dataCart[keyCart].productOffer[keyOffer].checkCount = false;
            data.dataCart[keyCart].productOffer[keyOffer].active =
              data.dataApi[keyCart].offers[keyOffer].activity;
            if (!data.dataApi[keyCart].offers[keyOffer].activity) {
              cartActiveAll = false;
            }
          }
        }
      }
      // return data.dataCart;
      commit("Cart/CartAll/setCartActiveAll", cartActiveAll, { root: true });
      return data.dataCart.sort(a => {
        for (const offers of a.productOffer) {
          if (offers.active) {
            return 1;
          }
        }
        return -1;
      });
    } else {
      return [];
    }
  },
};
