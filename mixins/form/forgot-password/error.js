let email = [
  {
    ifv: "required",
    text: "Укажите ваш email",
  },
  {
    ifv: "email",
    text: "Укажите корректный email",
  },
];
export default {
  data() {
    return {
      error: {
        Email: email,
      },
    };
  },
};
