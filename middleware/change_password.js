export default async ({ route, store, getters, dispatch, redirect }) => {
  console.log(route.query);
  if (route.query.check_user === undefined) {
    redirect("/");
  } else {
    const check = await store.dispatch(
      "change_password/axios/_check_change_password",
      route.query.check_user
    );
    if (check === false) {
      redirect("/");
    }
  }
};
