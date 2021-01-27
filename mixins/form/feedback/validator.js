import {
  required,
  // minLength,
  // between,
  // maxLength,
  // alphaNum,
  email,
  // sameAs,
} from "vuelidate/lib/validators";
const Myemail = {
  required,
  email,
};
const message = {
  required,
};
const name = {
  required,
};
const lastName = {
  required,
};
const tlf = {};
export default {
  data() {
    return {
      Form: {
        Email: "",
        message: "",
        name: "",
        lastName: "",
        tlf: "",
      },
    };
  },
  validations() {
    return {
      Form: {
        Email: Myemail,
        message,
        name,
        lastName,
        tlf,
      },
    };
  },
};
