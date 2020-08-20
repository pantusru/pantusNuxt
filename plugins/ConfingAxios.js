export default function ({ $axios, redirect }) { // ПЕРЕХВАТЧИК ЗАПРОСА
  $axios.onRequest(config => {
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