let password = [
  {
    ifv: "required",
    text: "Укажите ваш пароль"
  }
];
let email = [
  {
    ifv: "required",
    text: "Укажите ваш email"
  }
];

export default {
  data() {
    return {
      error: {
        password: password,
        email: email
      }
    };
  }
};
