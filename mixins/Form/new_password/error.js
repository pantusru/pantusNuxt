let str_password = [
  {
    ifv: "required",
    text: "Укажите ваш старый пароль",
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
]
let password = [
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
]
let password2 = [
  {
    ifv: "required",
    text: "Укажите пароль еще раз",
  },
  {
    ifv: "sameAsPassword",
    text: "Пароли не совпадают",
  },
]


export default {
  data() {
    return {
      error: {
        str_password: str_password,
        password: password,
        password2: password2,
      }
    }
  },
}
