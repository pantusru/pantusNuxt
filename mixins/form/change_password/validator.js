import {
  required,
  minLength,
  between,
  maxLength,
  alphaNum,
  email,
  sameAs,
} from "vuelidate/lib/validators";

let password = {
  required,
  minLength: minLength(8),
  maxLength: maxLength(25),
  alphaNum,
};
let password2 = {
  required,
  sameAsPassword: sameAs("password"),
};

export default {
  data() {
    return {
      Form: {
        password2: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      Form: {
        password: password,
        password2: password2,
      },
    };
  },
};
