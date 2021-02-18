import { helpers } from "vuelidate/lib/validators";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";

const name = {
  required,
};
const surname = {
  required,
};
const Myemail = {
  required,
  email,
};
const password = {
  required,
  minLength: minLength(8),
  maxLength: maxLength(25),
  alphaNum: value => {
    return value.search(/[А-ЯёЁ]/gi) === -1;
  },
};
const password2 = {
  required,
  sameAsPassword: sameAs("password"),
};
const telephone = {
  required,
  minLength: minLength(17),
};
const inn = {
  // required,
  minLength: minLength(12),
};
const organization = {
  required,
};
const country = {
  // required,
};
const address = {
  // required,
};
const checbox = {
  required: value => value === true,
};

// let all поля которые есть в 2 формах
const all = {
  name,
  surname,
  email: Myemail,
  password,
  password2,
  telephone,
  checbox,
};
const Wholesale = {
  inn,
  organization,
  country,
  address,
};

export default {
  data() {
    return {
      Form: {
        name: "",
        surname: "",
        email: "",
        password: "",
        password2: "",
        telephone: "",
        country: "",
        address: "",
        organization: "",
        inn: "",
        checbox: false,
      },
    };
  },
  validations() {
    if (this.buyer === "retail") {
      return {
        Form: {
          ...all,
        },
      };
    } else {
      return {
        Form: {
          ...all,
          ...Wholesale,
        },
      };
    }
  },
};
