export const actions = {
  async _MyOrder({ rootGetters, dispatch }, dataset) {
    const data = await this.$axios.$get(
      `${process.env.api}/personal/orders?sort_order=desc&page_size=${dataset.limit}&page_number=${dataset.page}`,
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    return await dispatch("MapMyOrder", data);
  },
  async _MyOrderCount({ rootGetters, dispatch }) {
    return await this.$axios.$get(`${process.env.api}/personal/orders/count`, {
      headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
    });
  },

  async _MyOrderId({ rootGetters, dispatch }, dataset) {
    const id = dataset.id;
    const check = dataset.check ?? false;
    const data = await this.$axios.$get(
      `${process.env.api}/personal/orders/${id}`,
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    let result;
    if (!check) {
      result = await dispatch("MapMyOrderId", data);
    } else {
      result = await dispatch("MapMyOrderOffer", data);
    }
    return result;
  },

  async _MyOrderOffer({ rootGetters, dispatch }, id) {
    const data = await this.$axios.$get(
      `${process.env.api}/personal/orders/${id}`,
      {
        headers: { Authorization: `Bearer ${rootGetters.GetCookie}` },
      }
    );
    return dispatch("MapMyOrderOffer", data);
  },

  MapMyOrder({}, data) {
    const dataset = [];
    data.forEach(order => {
      dataset.push({
        id: order.id,
        price: order.price,
        service: {
          price: order.delivery.price,
        },
        dates: {
          created: order.dates.created,
        },
        status: {
          name: order.status.name,
          code: order.status.code,
        },
      });
    });
    return dataset;
  },

  MapMyOrderId({ dispatch }, data) {
    const order = {
      id: data.id,
      price: data.price,
      dates: {
        created: data.dates.created,
      },
      user: {
        nameFirst: data.user.name.first,
        nameLast: data.user.name.last,
        phone: data.user.phone,
      },
      status: {
        code: data.status.code,
        name: data.status.name,
      },
      address: {
        city: data?.address?.city,
        detailed: data?.address?.detailed,
      },
      paysystem: {
        id: data?.paysystem?.id,
        name: data?.paysystem?.name,
      },
      service: {
        id: data?.delivery?.service?.id,
        name: data?.delivery.service?.name,
        price: data?.delivery.price,
      },
      payerType: {
        id: data.payerType.id,
        name: data.payerType.name,
      },
    };
    order.offers = dispatch("MapMyOrderOffer", data);
    if (data.offers.length !== 0) {
      data.offers.forEach(elem => {
        order.offers.push({
          guid: elem.sku,
          name: elem.name,
          price: elem.price,
          quantity: elem.quantity,
        });
      });
    }
    return order;
  },
  MapMyOrderOffer({}, data) {
    const offer = [];
    if (data.offers.length !== 0) {
      data.offers.forEach(elem => {
        offer.push({
          guid: elem.sku,
          name: elem.name,
          price: elem.price,
          quantity: elem.quantity,
        });
      });
    }
    return offer;
  },

  _CancelMyOrder() {
    // Запрос на отказ заказа
    // Временное решение
    if (false) {
      // УДачно
      return true;
    } else {
      // Не удачно
      return false;
    }
    // Временное решение
  },
};
