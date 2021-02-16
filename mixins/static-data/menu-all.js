export default {
  data() {
    return {
      sideBarItems: [
        { to: "/help/", name: "Помощь" },
        { to: "/help", hash: "#kak-sdelat-zakaz", name: "Заказ" },
        { to: "/delivery", name: "Доставка" },
        {
          to: "/delivery",
          hash: "#freedelivery",
          name: "Условия бесплатной доставки",
        },
        { to: "/pay/", name: "Оплата" },
        { to: "/help", hash: "#returns", name: "Возврат" },
        {
          to: "/documents/privacypolicy/",
          name: "Обработка персональных данных",
        },
        {
          to: "/documents/user-agreement/",
          name: "Пользовательское соглашение",
        },
        // { to: "/help/feedback/", name: "Единая служба качества" },
      ],
    };
  },
};
