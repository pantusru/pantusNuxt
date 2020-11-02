export const actions = {
    // Получить все категории товаров с структурой потомок родитель!
    async _Payment() {
        return [
            {id: 35 , name: "Безналичный платеж"},
            {id: 37 , name: "Оплата наличными при получении"},
        ]
    },
  async _Dostavka(){
      return[
        {id:"31", name: 'Самовывоз - Балаково', cost: 0, description:"Бесплатно", adress: "г. Балаково, ул. Транспортная, д. 11", TownId: "6400000400000",Town: "Балаково"},
        {id:"36", name: 'Самовывоз Тольятти', adress: "г. Тольятти, ул. Новозаводская, 2б, рынок СТАВР (Пн, Вт)", description:"Бесплатно", cost: 0, TownId: "6300000700000" ,Town: "Тольятти"},
        {id: "55", name: "Shiptor (агрегатор служб доставки)",adress:"dpd, pickpoint, boxberry и прочее", description:"Рассчитать стоимость", nameWidget: "shiptor_widget_show"},
        {id: "15", name: "СДЭК" , description:"Рассчитать стоимость", nameWidget: ""},
        {id: "59", name: "Почта России" , description:"Не указан Город"},
        {id: "61", name: "Другие транспортные компании" , description:"От 350 руб.", cost: 350},

      ]
  }
}

