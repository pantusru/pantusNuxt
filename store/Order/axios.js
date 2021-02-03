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

  mapPayment({}, data) {
    const payment = [];
    data.forEach(elem => {
      payment.push({
        id: elem.id,
        name: elem.name,
        description: elem.description,
      });
    });
    return payment;
  },

  mapDostavka({}, data) {
    const dostavka = [];
    data.forEach(elem => {
      dostavka.push({
        id: elem.id,
        name: elem.name,
        adress: elem.description,
      });
    });
    return dostavka;
  },
};
