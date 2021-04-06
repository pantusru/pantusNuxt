export default async ({ route, store, getters, dispatch, app }) => {
  if (!app.$cookies.get("Authorization")) {
    console.log("user all");
    // если нету токена
    const token = await store.dispatch(
      "User/axios/getToken",
      {},
      { root: true }
    );
    app.$cookies.set("Authorization", token);
    store.commit("SetCookie", token);
    await store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true });
  } else if (store.getters["User/Loader"] === false) {
    // если пользователь не загружен
    store.commit("SetCookie", app.$cookies.get("Authorization"));
    await store.dispatch("User/_User", {}, { root: true });
    // await store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true });
  }
  if (store.getters["Cart/CartAll/GetCartActual"] === false) {
    // если корзина не обновилась
    store.commit("SetCookie", app.$cookies.get("Authorization"));
    await store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true });
  }
};
