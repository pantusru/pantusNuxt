import {
  required,
  minLength,
  between,
  maxLength,
  alphaNum,
  email,
  sameAs,
} from "vuelidate/lib/validators";
let name = {
  required,
};
let surname = {
  required,
};
let Myemail = {
  required,
  email,
};
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
let telephone = {
  required,
  minLength: minLength(17),
};
let inn = {
  required,
  minLength: minLength(12),
};
let organization = {
  required,
};
let country = {
  required,
};
let address = {
  required,
};
let checbox = {
  required: value => value === true,
};

// let all поля которые есть в 2 формах
let all = {
  name: name,
  surname: surname,
  email: Myemail,
  password: password,
  password2: password2,
  telephone: telephone,
  checbox: checbox,
};
let Wholesale = {
  inn: inn,
  organization: organization,
  country: country,
  address: address,
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
    if (this.buyer === "Retail") {
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
