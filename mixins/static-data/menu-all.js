export default {
  data() {
    return {
      sideBarItems: [
        { to: "/help/", name: "Помощь" },
        { to: "/help/#kak-sdelat-zakaz", name: "Заказ" },
        { to: "/delivery/", name: "Доставка" },
        { to: "/delivery/#freedeliverу", name: "Условия бесплатной доставки" },
        { to: "/pay/", name: "Оплата" },
        { to: "/help/#returns", name: "Возврат" },
        {
          to: "/documents/privacypolicy/",
          name: "Обработка персональных данных",
        },
        {
          to: "/documents/user-agreement/",
          name: "Пользовательское соглашение",
        },
        { to: "/help/feedback/", name: "Единая служба качества" },
      ],
    };
  },
};
