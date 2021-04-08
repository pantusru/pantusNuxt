export default function ({ $axios, redirect, app, request, store }) {
  $axios.onRequest(config => {
    // ПЕРЕХВАТЧИК ЗАПРОСА

    // store.commit("SetShow", true);

    // app.$cookies.remove();
    if (app.$cookies.get("Authorization") !== undefined) {
      store.commit("SetCookie", app.$cookies.get("Authorization"));
      // $axios.setHeader("Authorization", `${store.getters[""]}`);
      $axios.defaults.headers.Authorization = `Bearer ${app.$cookies.get(
        "Authorization"
      )}`; // Передача токена в каждом запросе
    }
    console.log("Making request to " + config.url);
  });
  $axios.onResponse(res => {
    // store.commit("SetShow", false);
    // ПЕРЕХВАТЧИК ОТВЕТА
    if (res.data !== undefined) {
      return res;
    } else {
      return false;
    }
  });

  $axios.onError(() => {
    store.commit("SetShow", false);
    // console.log()
    // ПЕРЕХВАТЧИК ОШИБКИ
    redirect("/404");
  });
}
