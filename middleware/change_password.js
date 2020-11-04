export default  async({route, store, getters , dispatch, redirect}) => {
  if(route.query.check_user === undefined){
    redirect("/");
  }else{
    let check =  await store.dispatch("change_password/axios/_check_change_password",route.query.check_user);
    if(check === false){
      redirect("/");
    }
  }
}
