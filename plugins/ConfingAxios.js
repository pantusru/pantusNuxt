export default function ({ $axios, redirect, app, request, store }) {
  $axios.onRequest(config => {
    // ПЕРЕХВАТЧИК ЗАПРОСА
    store.commit("SetShow", true);
    // console.log("Bearer " + app.$cookies.get("Authorization"));
    console.log(app.$cookies.get("Authorization") !== undefined);
    if (app.$cookies.get("Authorization") !== undefined) {
      $axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${app.$cookies.get("Authorization")}`; // Передача токена в каждом запросе
    }
    console.log("Making request to " + config.url);
  });
  $axios.onResponse(res => {
    store.commit("SetShow", false);
    //  ПЕРЕХВАТЧИК ОТВЕТА
    // if (res.data !== undefined) {
    //   return res;
    // } else {
    //   return false;
    // }
  });

  $axios.onError(() => {
    store.commit("SetShow", false);
    // ПЕРЕХВАТЧИК ОШИБКИ
    redirect("/404");
  });
}
