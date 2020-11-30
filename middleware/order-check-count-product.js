export default ({ route, store, getters, dispatch, redirect }) => {
  console.log("middleware - order-check-count-product");
  if (store.getters["Cart/CartAll/GetLength"] === 0) {
    redirect({ path: "/" });
  }
};
