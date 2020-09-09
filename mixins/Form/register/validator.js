import { required, minLength, between,  alphaNum ,email} from 'vuelidate/lib/validators'
let name = {
    required
}
let surname = {
    required
}
let Myemail = {
    required,
    email
}
let password = {
    required
}
let password2 = {
    required
}
let telephone = {
    required
}
let inn = {
    required
}
let organization = {
    required
}
let country = {
    required
}
let address = {
    required
}


// let all поля которые есть в 2 формах
let all  = {
    name:name,
    surname:surname,
    email:Myemail,
    password:password,
    password2:password2,
    telephone:telephone
}
let Wholesale = {
    inn:inn,
    organization:organization,
    country:country,
    address:address
}

export default {
    data() {
        return {
            Form: {
                name:'',
                surname:'',
                email: '',
                password: '',
                password2: '',
                telephone: '',
                country: '',
                address: '',
                organization: '',
                inn: '',    
            }
        }
    },
    validations(){
        if(this.buyer === "Retail"){
            return{
                Form:{
                    ... all
                }
            }
        }
        else{
            return {
                Form:{
                    ... all,
                    ... Wholesale
                }
            }
        }
    }
}