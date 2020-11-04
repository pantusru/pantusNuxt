export const actions = {
  _check_change_password({}, query){
     if(query === "121"){
        return true;
     }else {
       return false;
     }
  }
}
