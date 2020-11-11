import { required, minLength, between, maxLength , alphaNum ,email, sameAs} from 'vuelidate/lib/validators'

let Myemail = {
    required,
}
let password = {
    required,
}

export default {
    data() {
        return {
            Form: {
                email: '',
                password: '',  
            }
        }
    },
    validations(){
        return {
            Form:{
                email:Myemail,
                password:password
            }
        }
    }
}
