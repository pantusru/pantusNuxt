export default async ({ route, store, getters, dispatch, app }) => {
  if (store.getters["User/Loader"] === false) {
    console.log(app.$cookies.get("Authorization"));
    store.commit("SetCookie", app.$cookies.get("Authorization"));
    console.log("GetCookie" + store.getters["GetCookie"]);
    await Promise.all([
      store.dispatch("User/_User", {}, { root: true }),
      store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true }),
    ]);
  } else if (store.getters["Cart/CartAll/GetCartActual"] === false) {
    await store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true });
  }
};
