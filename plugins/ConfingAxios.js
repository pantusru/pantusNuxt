export default function ({ $axios, redirect, app, request }) {
  $axios.onRequest(config => {
    // ПЕРЕХВАТЧИК ЗАПРОСА
    if (app.$cookies.get("Authorization") !== undefined) {
      console.log(app.$cookies.get("Authorization"));
      $axios.defaults.headers.common["Authorization"] = app.$cookies.get(
        "Authorization"
      ); // Передача токена в каждом запросе
    }
    console.log("Making request to " + config);
    console.log(config);
  });
  // $axios.onResponse(res => {
  //   // ПЕРЕХВАТЧИК ОТВЕТА
  //   if (res.data !== undefined) {
  //     return res;
  //   } else {
  //     return false;
  //   }
  // });

  $axios.onError(() => {
    // ПЕРЕХВАТЧИК ОШИБКИ
    redirect("/505");
  });
}
