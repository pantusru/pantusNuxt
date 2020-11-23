export default async ({ route, store, getters, dispatch, redirect }) => {
  if (store.getters["User/CheckUser"] === false) {
    redirect({ path: "/" });
  }
};
