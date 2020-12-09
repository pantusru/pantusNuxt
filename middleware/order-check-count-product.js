export default ({ route, store, getters, dispatch, redirect }) => {
  if (store.getters["Cart/CartAll/GetLength"] === 0) {
    redirect({ path: "/" });
  }
};
