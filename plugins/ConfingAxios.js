 export default function ({ $axios, redirect }) {  
  $axios.onRequest(config => {// ПЕРЕХВАТЧИК ЗАПРОСА
    // if (localStorage.getItem('Token')  !== undefined) {
    //   request.headers.common['Authorization'] = localStorage.getItem('Token'); // Передача токена в каждом запросе
    // }
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