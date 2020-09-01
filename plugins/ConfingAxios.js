
export default function ({ $axios, redirect ,app, request}) {  
  $axios.onRequest(config => {// ПЕРЕХВАТЧИК ЗАПРОСА
    if (app.$cookies.get("IdUser")  !== undefined) {
      $axios.defaults.headers.common['Authorization'] = app.$cookies.get("IdUser"); // Передача токена в каждом запросе
    }
    console.log('Making request to ' + config.url)
  })
  $axios.onResponse(res  => { // ПЕРЕХВАТЧИК ОТВЕТА
    if(res.data != undefined){
      return  res 
    }
    else{
      return false
    }
  })

  $axios.onError(error => { // ПЕРЕХВАТЧИК ОШИБКИ
    redirect("/505");
  }) 
} 