const surname = [
  {
    ifv: "required",
    text: "Укажите вашу фамилию",
  },
];
const name = [
  {
    ifv: "required",
    text: "Укажите ваше Имя",
  },
];
const password = [
  {
    ifv: "required",
    text: "Укажите ваш пароль",
  },
  {
    ifv: "alphaNum",
    text: "Пароль состоит только из латинских символов и цифр",
  },
  {
    ifv: "minLength",
    text: "Пароль должен состоять не менее 8",
  },
  {
    ifv: "maxLength",
    text: "Пароль должен состоять не более 25 символов ",
  },
];
const password2 = [
  {
    ifv: "required",
    text: "Укажите пароль еще раз",
  },
  {
    ifv: "sameAsPassword",
    text: "Пароли не совпадают",
  },
];
const email = [
  {
    ifv: "required",
    text: "Укажите ваш email",
  },
  {
    ifv: "email",
    text: "Укажите корректный email",
  },
];
const inn = [
  {
    ifv: "required",
    text: "Укажите ваш ИНН",
  },
  {
    ifv: "minLength",
    text: "Укажите корректный ИНН",
  },
];
const organization = [
  {
    ifv: "required",
    text: "Укажите название вашей организации",
  },
];
const country = [
  {
    ifv: "required",
    text: "Укажите название вашей страны",
  },
];
const telephone = [
  {
    ifv: "required",
    text: "Укажите ваш номер телефона",
  },
  {
    ifv: "minLength",
    text: "Укажите корректный номер телефона",
  },
];
const address = [
  {
    ifv: "required",
    text: "Укажите ваш адрес",
  },
];
const checbox = [
  {
    ifv: "required",
    text: "Подтвердите ваше согласие на обработку персональных данных",
  },
];
export default {
  data() {
    return {
      error: {
        surname,
        name,
        password,
        password2,
        email,
        inn,
        organization,
        country,
        telephone,
        address,
        checbox,
      },
    };
  },
};
