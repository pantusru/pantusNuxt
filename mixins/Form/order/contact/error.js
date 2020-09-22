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
var Town = [
    {
        ifv: "required",
        text:"Укажите  город доставки",
    },
]
export default {
     data() {   
         return {
            error:{
                surname: Surname,
                name: Name,
                tlf:Telephone,
                Town:Town,
            }
         }
     },
}