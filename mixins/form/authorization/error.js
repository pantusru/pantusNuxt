const password = [
  {
    ifv: "required",
    text: "Укажите ваш пароль",
  },
];
const email = [
  {
    ifv: "required",
    text: "Укажите ваш логин",
  },
];

export default {
  data() {
    return {
      error: {
        password,
        email,
      },
    };
  },
};
