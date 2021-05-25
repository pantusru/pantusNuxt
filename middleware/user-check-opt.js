export default ({ route, store, getters, dispatch, app, redirect }) => {
  if (!store.getters["User/TypeUser"] !== "wholesale") {
    redirect("/");
  }
};
