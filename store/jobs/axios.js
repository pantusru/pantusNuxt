export const actions = {
  async axiosJobs({ dispatch }) {
    const data = [
      {
        id: 1,
        dataCreate: "01.12.2020",
        title: "Продавец-консультант автозапчастей",
        text:
          "В связи с открытием магазина автозапчастей требуются продавцы-консультанты. Полная занятость, сменный график.Требуемый опыт работы: 1–3 года.",
      },
    ];
    return await dispatch("_init_MapJobs", data);
  },
  _init_MapJobs({}, data) {
    if (data.length !== 0) {
      const result = [];
      data.forEach(elem => {
        result.push({
          id: elem.id,
          dataCreate: elem.dataCreate,
          title: elem.title,
          text: elem.text,
        });
      });
      return result;
    } else {
      return [];
    }
  },
  async axiosJobsId({ dispatch }, id) {
    const data = {
      id: 1,
      dataCreate: "01.12.2020",
      title: "Продавец-консультант автозапчастей",
      content: `<div class="col-md-12" style="padding-left: 0px; padding-top: 10px;">
\t<h3>Требования:</h3>
\t<ul>
\t\t<li>Опыт аналогичной работы</li>
\t\t<li>Умение работать в графических программах</li>
\t</ul>
\t<h3>Обязанности:</h3>
\t<ul>
\t\t<li>
\t\tРабота с ассортиментом: ABC-XYZ-анализ, определение спроса на товар, ввод/вывод позиций из ассортимента, работа с новинками/ неликвидами </li>
\t\t<li>
\t\tРабота с базой: сегментирование, анализ продаж </li>
\t\t<li>
\t\tРазработка дилерских условий </li>
\t\t<li>
\t\tРабота с рекламациями; </li>
\t\t<li>
\t\tАнализ конкурентов </li>
\t\t<li>
\t\tПродвижение собственных брендов </li>
\t\t<li>
\t\tРабота по развитию бренда компании: оформление, мерчандайзинг, стандарты обслуживания </li>
\t\t<li>
\t\tПрограммы лояльности </li>
\t\t<li>
\t\tРабота с рекламными материалами </li>
\t\t<li>
\t\tПроведение маркетинговых исследований, анализ результатов, внесение предложений по оптимизации </li>
\t</ul>
\t<h3>Условия:</h3>
\t<ul>
\t\t<li>График 5/2</li>
\t\t<li>После 3 месяцев работы: абнемент в фитнес-зал, скидка 50% на услуги в мед. центр "Гиппократ +"</li>
\t</ul>
\t<h3>Оплата</h3>
\t<ul>
\t\t<li>30000рублей. </li>
\t</ul>
</div>
 <br>`,
      text:
        "В связи с открытием магазина автозапчастей требуются продавцы-консультанты. Полная занятость, сменный график.Требуемый опыт работы: 1–3 года.",
    };
    return await dispatch("_init_MapJobsId", data);
  },
  _init_MapJobsId({}, data) {
    if (data !== undefined) {
      return {
        id: data.id,
        dataCreate: data.dataCreate,
        title: data.title,
        text: data.text,
        content: data.content,
      };
    } else {
      return undefined;
    }
  },
};
