var surname = [
    {
        ifv: "required",
        text:"Укажите вашу фамилию",
    },
]
var name = [
    {
        ifv: "required",
        text:"Укажите ваше Имя",
    },
]
var password = [
    {
        ifv: "required",
        text:"Укажите ваш пароль",
    },
    {
        ifv: "alphaNum",
        text:"Пароль состоит только из латинских символов и цифр",
    }, 
    {
        ifv: "between",
        text:"Пароль должен состоять от 8 до 25 символов",
    }, 
]
var password2 = [
    {
        ifv: "required",
        text:"Укажите пароль еще раз",
    },
    {
        ifv: "sameAsPassword",
        text:"Пароли не совпадают",
    }, 
]
var email = [
    {
        ifv: "required",
        text:"Укажите ваш email",
    },
    {
        ifv: "email",
        text:"Укажите корректный email",
    },
]
var inn = [

]
var organization = [

]
var country = [

]
var telephone = [

]
var address = [

]

export default {
     data() {   
         return {
            error:{
                surname: surname,
                name: name,
                password: password,
                password2: password2,
                email:email,
                inn:inn,
                organization:organization,
                country:country,
                telephone:telephone,
            }
         }
     },
}