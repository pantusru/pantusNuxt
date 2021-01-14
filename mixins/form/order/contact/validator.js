import {
  required,
  minLength,
  between,
  maxLength,
  alphaNum,
  email,
  sameAs,
} from "vuelidate/lib/validators";
let Name = {
  required,
};
let Surname = {
  required,
};
let Telephone = {
  required,
  minLength: minLength(17),
};
let Town = {
  required,
};
// let all поля которые есть в 2 формах
let all = {
  name: Name,
  surname: Surname,
  telephone: Telephone,
  Town: Town,
};

export default {
  validations() {
    return {
      Form: {
        ...all,
      },
    };
  },
  data() {
    return {
      Form: {
        name: this.$store.getters["User/FormData"]["name"],
        surname: this.$store.getters["User/FormData"]["surname"],
        telephone: this.$store.getters["User/FormData"]["telephone"],
        Town: this.$store.getters["User/FormData"]["Town"],
      },
    };
  },
};
