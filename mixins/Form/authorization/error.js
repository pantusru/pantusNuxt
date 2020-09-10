


var password = [
    {
        ifv: "required",
        text:"Укажите ваш пароль",
    }
]
var email = [
    {
        ifv: "required",
        text:"Укажите ваш email",
    },
]



export default {
     data() {   
         return {
            error:{
                password: password,
                email:email,
            }
         }
     },
}