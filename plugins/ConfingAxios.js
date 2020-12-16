export default function ({ $axios, redirect, app, request, store }) {
  $axios.onRequest(config => {
    // ПЕРЕХВАТЧИК ЗАПРОСА
    store.commit("SetShow", true);
    if (app.$cookies.get("PHPSESSID") !== undefined) {
      $axios.defaults.headers.common.Cookie =
        "PHPSESSID" + app.$cookies.get("PHPSESSID"); // Передача токена в каждом запросе
    }
    console.log("Making request to " + config.url);
  });
  $axios.onResponse(res => {
    store.commit("SetShow", false);
    //   // ПЕРЕХВАТЧИК ОТВЕТА
    //   if (res.data !== undefined) {
    //     return res;
    //   } else {
    //     return false;
    //   }
  });

  $axios.onError(() => {
    store.commit("SetShow", false);
    // ПЕРЕХВАТЧИК ОШИБКИ
    redirect("/404");
  });
}
