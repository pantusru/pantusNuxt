const Surname = [
  {
    ifv: "required",
    text: "Укажите вашу фамилию",
  },
];
const Name = [
  {
    ifv: "required",
    text: "Укажите ваше Имя",
  },
];
const Telephone = [
  {
    ifv: "required",
    text: "Укажите ваш номер телефона",
  },
  {
    ifv: "minLength",
    text: "Укажите корректный номер телефона",
  },
];
const Town = [
  {
    ifv: "required",
    text: "Укажите  город доставки",
  },
];
const companyName = [
  {
    ifv: "required",
    text: "Укажите  название компании",
  },
];
const dostavka = [
  {
    ifv: "required",
    text: "Укажите способ доставки",
  },
];
const sistemPay = [
  {
    ifv: "required",
    text: "Укажите способ оплаты",
  },
];
export default {
  data() {
    return {
      error: {
        surname: Surname,
        name: Name,
        telephone: Telephone,
        Town,
        companyName,
        dostavka,
        sistemPay,
      },
    };
  },
};
