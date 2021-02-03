import {
  required,
  minLength,
  between,
  maxLength,
  alphaNum,
  email,
  sameAs,
} from "vuelidate/lib/validators";
const name = {
  required,
};
const surname = {
  required,
};
const patronymic = {};
const login = {
  // required,
  // email,
};
const password = {
  // required,
  // minLength: minLength(8),
  // maxLength: maxLength(25),
  // alphaNum,
};
const password2 = {
  // required,
  // sameAsPassword: sameAs("password"),
};
const telephone = {
  // required,
  minLength: minLength(17),
};

// let all поля которые есть в 2 формах
const all = {
  name,
  surname,
  login,
  telephone,
  password,
  password2,
  patronymic,
};

export default {
  data() {
    return {
      Form: {
        name: "",
        surname: "",
        login: "",
        password: "",
        password2: "",
        telephone: "",
        patronymic: "",
      },
    };
  },
  validations() {
    return {
      Form: {
        ...all,
      },
    };
  },
};
