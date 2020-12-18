export default async ({ route, store, getters, dispatch, app }) => {
  if (store.getters["User/Loader"] === false) {
    store.commit("SetCookie", app.$cookies.get("Authorization"));
    await Promise.all([
      store.dispatch("User/_User", {}, { root: true }),
      store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true }),
    ]);
  } else if (store.getters["Cart/CartAll/GetCartActual"] === false) {
    store.commit("SetCookie", app.$cookies.get("Authorization"));
    await store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true });
  }
};
