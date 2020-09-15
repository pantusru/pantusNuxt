import { required, minLength, between, maxLength , alphaNum ,email, sameAs} from 'vuelidate/lib/validators'
let Name = {
    required
}
let Surname = {
    required
}
let Telephone = {
    required,
    minLength: minLength(17)
}
let Town = {
    required
}
// let all поля которые есть в 2 формах
let all  = {
    Name:Name,
    Surname:Surname,
    Telephone:Telephone,
    Town:Town,
}

export default {
    validations(){
        return{
            Form:{
                ... all
            }
        }
    }
}