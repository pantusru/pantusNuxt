export const state = () => ({
  Payment: [],
  Dostavka: [],
  riles: [],
});
export const mutations = {
  SetPayment(store, data) {
    store.Payment = data;
  },
  SetDostavka(store, data) {
    store.Dostavka = data;
  },
  SetDostavkaExtra(store, data) {
    data.data.description = data.value + "руб.";
    data.data.price = Number(data.value);
  },
  SetActive(store, data) {
    data.data.active = data.value;
  },
  SetRiles(store, data) {
    store.riles = data;
  },
};
export const actions = {
  async _Payment({ dispatch, commit, getters, rootGetters }) {
    const userType = rootGetters["User/FormData"].type;
    const checkPayment = !(userType === "wholesale");
    if (getters.GetPayment.length === 0) {
      const data = await dispatch("Order/axios/_Payment", checkPayment, {
        root: true,
      });
      commit("SetPayment", data);
    }
  },
  async _Dostavka({ store, dispatch, commit, getters }) {
    if (getters.GetDostavka.length === 0) {
      const data = await dispatch("Order/axios/_Dostavka", {}, { root: true });
      commit("SetDostavka", data);
    }
  },
  SetDostavkaExtra({ store, rootGetters, commit }, value) {
    const email = rootGetters["Order/Payment/Index/GetCostDostavkaId"](4)[0];
    commit("SetDostavkaExtra", { data: email, value });
  },
  async ActionRiles({ store, commit, dispatch }) {
    const res = await dispatch(
      "Order/axios/_Payment_Dostavka",
      {},
      { root: true }
    );
    commit("SetRiles", res);
  },
};

export const getters = {
  GetPayment: s => s.Payment,
  GetDostavka: s => s.Dostavka,
  GetCostDostavkaId: s => id => s.Dostavka.filter(data => data.id === id),
  GetRiles: s => s.riles,
};
