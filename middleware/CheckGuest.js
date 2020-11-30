export default async ({ route, store, getters, dispatch, redirect }) => {
  console.log("middleware - CheckGuest");
  if (store.getters["User/CheckUser"] === false) {
    redirect({ path: "/" });
  }
};
