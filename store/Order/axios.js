export const actions = {
  async _Payment({ dispatch }, check) {
    const payment = await this.$axios.get(
      `${process.env.api}/orders/payment_services`
    );
    return await dispatch("mapPayment", payment.data);
  },
  async _Dostavka({ dispatch }) {
    const dostavka = await this.$axios.get(
      `${process.env.api}/orders/delivery_services`
    );
    return await dispatch("mapDostavka", dostavka.data);
    // return [
    //   {
    //     id: "31",
    //     name: "Самовывоз - Балаково",
    //     cost: 0,
    //     description: "Бесплатно",
    //     adress: "г. Балаково, ул. Транспортная, д. 11",
    //     TownId: "6400000400000",
    //     Town: "Балаково",
    //   },
    //   {
    //     id: "36",
    //     name: "Самовывоз Тольятти",
    //     adress: "г. Тольятти, ул. Новозаводская, 2б, рынок СТАВР (Пн, Вт)",
    //     description: "Бесплатно",
    //     cost: 0,
    //     TownId: "6300000700000",
    //     Town: "Тольятти",
    //   },
    //   {
    //     id: "55",
    //     name: "Shiptor (агрегатор служб доставки)",
    //     adress: "dpd, pickpoint, boxberry и прочее",
    //     description: "Рассчитать стоимость",
    //     nameWidget: "shiptor_widget_show",
    //   },
    //   {
    //     id: "15",
    //     name: "СДЭК",
    //     description: "Рассчитать стоимость",
    //     nameWidget: "",
    //   },
    //   { id: "59", name: "Почта России", description: "Не указан Город" },
    //   {
    //     id: "61",
    //     name: "Другие транспортные компании",
    //     description: "От 350 руб.",
    //     cost: 350,
    //   },
    // ];
  },

  CheckUser({ rootGetters }) {
    const typeUser = rootGetters["User/FormData"].type;
    if (typeUser === "retail") {
      return 1;
    } else if (typeUser === "wholesale") {
      return 2;
    }
  },

  async _Payment_Dostavka({ dispatch }) {
    const res = await this.$axios.get(
      `${process.env.api}/orders/user_to_delivery_to_paysystem_map`
    );
    const TypeUser = await dispatch("CheckUser");
    return res.data.filter(dataset => dataset.user_type_id === TypeUser);
  },

  async mapPayment({ dispatch }, data) {
    const TypeUser = await dispatch("CheckUser");
    const payment = [];
    data.forEach(elem => {
      const check = elem.available_for_user_types.filter(
        type => type === TypeUser
      );
      if (check.length !== 0) {
        payment.push({
          id: elem.id,
          name: elem.name,
          description: elem.description,
          active: true,
        });
      }
    });
    return payment;
  },

  async mapDostavka({ dispatch }, data) {
    const TypeUser = await dispatch("CheckUser");
    const dostavka = [];

    data.forEach(elem => {
      const check = elem.available_for_user_types.filter(
        type => type === TypeUser
      );
      if (check.length !== 0) {
        dostavka.push({
          id: elem.id,
          name: elem.name,
          adress: elem.description,
          description: elem.extra,
          active: true,
          city: elem.default_city,
          price: elem.default_price,
        });
      }
    });
    return dostavka;
  },
};
