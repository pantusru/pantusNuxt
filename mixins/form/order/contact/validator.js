import {
  required,
  minLength,
  between,
  maxLength,
  alphaNum,
  email,
  sameAs,
} from "vuelidate/lib/validators";
const Name = {
  required,
};
const Comments = {};
const Surname = {
  required,
};
const Telephone = {
  required,
  minLength: minLength(17),
};
const Town = {
  required,
};

const dostavka = {
  required,
};
const sistemPay = {
  required,
};
const companyAddress = {};
// let all поля которые есть в 2 формах
const all = {
  name: Name,
  surname: Surname,
  telephone: Telephone,
  Town,
  dostavka,
  sistemPay,
  Comments,
  companyAddress,
};

const companyName = {
  required,
};

const companyCountry = {};
const company = {
  companyName,
  companyCountry,
};
export default {
  computed: {
    UserStatus() {
      return this.$store.getters["User/FormData"].type;
    },
  },
  validations() {
    if (this.UserStatus === "retail") {
      return {
        Form: {
          ...all,
        },
      };
    } else if (this.UserStatus === "wholesale") {
      return {
        Form: {
          ...all,
          ...company,
        },
      };
    }
  },
  data() {
    return {
      Form: {
        name: this.$store.getters["User/FormData"].name,
        surname: this.$store.getters["User/FormData"].surname,
        telephone: this.$store.getters["User/FormData"].telephone,
        Town: this.$store.getters["User/FormData"].Town,
        companyName: "",
        companyAddress: "",
        companyCountry: "",
        dostavka: undefined,
        sistemPay: undefined,
        Comments: undefined,
      },
    };
  },
};
