let Surname = [
    {
        ifv: "required",
        text:"Укажите вашу фамилию",
    },
]
let Name = [
    {
        ifv: "required",
        text:"Укажите ваше Имя",
    },
]
let Telephone = [
    {
        ifv: "required",
        text:"Укажите ваш номер телефона",
    },
    {
        ifv: "minLength",
        text:"Укажите корректный номер телефона",
    },
]
let Town = [
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
                telephone:Telephone,
                Town:Town,
            }
         }
     },
}