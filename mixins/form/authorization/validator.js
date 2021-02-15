import {
  required,
  minLength,
  between,
  maxLength,
  alphaNum,
  email,
  sameAs,
} from "vuelidate/lib/validators";

const Myemail = {
  required,
};
const password = {
  required,
};

export default {
  data() {
    return {
      Form: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      Form: {
        email: Myemail,
        password,
      },
    };
  },
};
