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
let email = [
    {
        ifv: "required",
        text:"Укажите ваш email",
    },
    {
        ifv: "email",
        text:"Укажите корректный email",
    },
]
let inn = [
    {
        ifv: "required",
        text:"Укажите ваш ИНН",
    },
    {
        ifv: "minLength",
        text:"Укажите корректный ИНН",
    },
]
let organization = [
    {
        ifv: "required",
        text:"Укажите название вашей организации",
    },
]
let country = [
    {
        ifv: "required",
        text:"Укажите название вашей страны",
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
let address = [
    {
        ifv: "required",
        text:"Укажите ваш адрес",
    },
]
let  checbox = [
    {
        ifv: "required",
        text:"Подтвердите ваше согласие на обработку персональных данных",  
    }
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
                address: address,
                checbox:checbox,
            }
         }
     },
}