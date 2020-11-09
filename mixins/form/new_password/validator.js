import { required, minLength, between, maxLength , alphaNum ,email, sameAs} from 'vuelidate/lib/validators'

let password = {
    required,
    minLength: minLength(8),
    maxLength: maxLength(25),
    alphaNum
}
let password2 = {
    required,
    sameAsPassword: sameAs('password')
}

export default {
    data() {
        return {
            Form: {
              password2: '',
              password: '',
              str_password: '',
            }
        }
    },
    validations(){
        return {
            Form:{
              str_password: password,
              password:password,
              password2:password2
            }
        }
    }
}
