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
const name = [
  {
    ifv: "required",
    text: "Укажите ваше имя",
  },
];
const lastName = [
  {
    ifv: "required",
    text: "Укажите вашу фамилию",
  },
];
const message = [
  {
    ifv: "required",
    text: "Укажите ваше сообщение",
  },
];
const tlf = [];
export default {
  data() {
    return {
      error: {
        Email: email,
        name,
        lastName,
        message,
        tlf,
      },
    };
  },
};
