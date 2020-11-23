export default async ({ route, store, getters, dispatch, redirect }) => {
  if (store.getters["User/CheckUser"] === true) {
    redirect({ path: "/" });
  }
};
