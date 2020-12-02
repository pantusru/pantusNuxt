import {
  required,
  minLength,
  between,
  maxLength,
  alphaNum,
  email,
  sameAs,
} from "vuelidate/lib/validators";
let Myemail = {
  required,
  email,
};

export default {
  data() {
    return {
      Form: {
        Email: "",
      },
    };
  },
  validations() {
    return {
      Form: {
        Email: Myemail,
      },
    };
  },
};
