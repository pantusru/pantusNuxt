var Surname = [
    {
        ifv: "required",
        text:"Укажите вашу фамилию",
    },
]
var Name = [
    {
        ifv: "required",
        text:"Укажите ваше Имя",
    },
]
var Telephone = [
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
                Surname: Surname,
                Name: Name,
                Telephone:Telephone,
            }
         }
     },
}