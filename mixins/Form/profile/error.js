let surname = [
    {
        ifv: "required",
        text:"Укажите вашу фамилию",
    },
]
let name = [
    {
        ifv: "required",
        text:"Укажите ваше Имя",
    },
]
 
let password = [
    {
        ifv: "required",
        text:"Укажите ваш пароль",
    },
    {
        ifv: "alphaNum",
        text:"Пароль состоит только из латинских символов и цифр",
    }, 
    {
        ifv: "minLength",
        text:"Пароль должен состоять не менее 8",
    }, 
    {
        ifv: "maxLength",
        text:"Пароль должен состоять не более 25 символов ",
    },
]
let password2 = [
    {
        ifv: "required",
        text:"Укажите пароль еще раз",
    },
    {
        ifv: "sameAsPassword",
        text:"Пароли не совпадают",
    }, 
]
let login = [
    {
        ifv: "required",
        text:"Укажите ваш email",
    },
    {
        ifv: "email",
        text:"Укажите корректный email",
    },
]

let telephone = [
    {
        ifv: "required",
        text:"Укажите ваш номер телефона",
    },
    {
        ifv: "minLength",
        text:"Укажите корректный номер телефона",
    },
]

export default {
     data() {   
         return {
            error:{
                login:login,
                surname: surname,
                name: name,
                telephone:telephone,
                password: password,
                password2: password2, 
            }
         }
     },
}