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
let patronymic = {};
let login = {
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

// let all поля которые есть в 2 формах
let all = {
  name: name,
  surname: surname,
  login: login,
  telephone: telephone,
  password: password,
  password2: password2,
  patronymic: patronymic,
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
