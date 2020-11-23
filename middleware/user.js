export default async ({ route, store, getters, dispatch }) => {
  if (store.getters["User/Loader"] === false) {
    await Promise.all([
      store.dispatch("User/_User", {}, { root: true }),
      store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true })
    ]);
  } else if (store.getters["Cart/CartAll/GetCartActual"] === false) {
    await store.dispatch("Cart/CartAll/_CartProduct", {}, { root: true });
  }
};
