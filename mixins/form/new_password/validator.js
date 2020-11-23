import {
  required,
  minLength,
  maxLength,
  alphaNum,
  sameAs
} from "vuelidate/lib/validators";
let str_password = {
  required,
  minLength: minLength(8),
  maxLength: maxLength(25),
  alphaNum
};
let password = {
  required,
  minLength: minLength(8),
  maxLength: maxLength(25),
  alphaNum
};
let password2 = {
  required,
  sameAsPassword: sameAs("password")
};

export default {
  data() {
    return {
      Form: {
        password2: "",
        password: "",
        str_password: ""
      }
    };
  },
  validations() {
    return {
      Form: {
        str_password: str_password,
        password: password,
        password2: password2
      }
    };
  }
};
