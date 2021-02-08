<template>
  <b-container>
    <div class="container-static">
      <div itemscope="" itemtype="http://schema.org/Organization">
        <h1>Контакты ООО "<span itemprop="legalName">Пантус</span>"</h1>
        <ContactMenu />
        <div
          itemprop="address"
          itemscope=""
          itemtype="http://schema.org/PostalAddress"
        >
          <div class="row" style="">
            <div class="col-md-6 col-12" style="">
              <h3>
                Телефон:
                <a href="tel:88005558721"
                  ><span itemprop="telephone">8 (800) 555 87 21</span></a
                >
              </h3>
              <p>Бесплатный звонок по всей России</p>
              <h3>График работы</h3>
              <h4>7 дней в неделю</h4>
              <p>
                7:00 - 16:00 по московскому времени<br />
                8:00 - 17:00 по местному времени
              </p>
              <h3>Отдел развития</h3>
              <ul>
                <li>
                  E-mail:
                  <a
                    style="text-decoration: none"
                    href="mailto:development@pantus.ru"
                    >development@pantus.ru</a
                  >
                </li>
                <li>
                  Наталья Хижа: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp136"
                    >136</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (927) 053-2604"
                    >+7 (927) 053-2604</a
                  >, E-mail:
                  <a
                    style="text-decoration: none"
                    href="mailto:nhizha@pantus.ru"
                    >nhizha@pantus.ru</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-6" style="">
              <h3>Адрес</h3>
              <h4>Головной офис</h4>
              <p>
                <span itemprop="addressLocality"
                  >Саратовская область, г. Балаково,</span
                >
                <span itemprop="streetAddress">ул. Транспортная, 6</span><br />
                <a style="text-decoration: none" href="#map"
                  >Показать на карте</a
                >
              </p>
              <h4>Склад</h4>
              <p>
                <span itemprop="addressLocality"
                  >Саратовская область, г. Балаково,</span
                >
                <span itemprop="streetAddress">ул. Транспортная, 11</span><br />
              </p>
              <h4>Розничные продажи</h4>
              <h6>Точки продаж и выдачи заказов</h6>
              <p>
                <span itemprop="addressLocality"
                  >Саратовская область, г. Балаково,</span
                >
                <span itemprop="streetAddress">ул. Саратовское Шоссе, 26/1</span
                ><br />
                <span itemprop="addressLocality"
                  >Саратовская область, г. Балаково,</span
                >
                <span itemprop="streetAddress"
                  >ул. Транспортная, 20 лет ВЛКСМ, 34</span
                ><br />
              </p>
              <h4>Почтовый адрес:</h4>
              <p>
                <span itemprop="postalCode">413859</span>, Саратовская область,
                г. Балаково – 24, а/я 269
              </p>
            </div>
          </div>
          <div class="row" style="margin-bottom: 30px">
            <p />
            <div class="col-md-6" style="">
              <h3>Служба технической поддержки сайта</h3>
              <ul>
                <li>
                  <a
                    style="text-decoration: none"
                    href="mailto:support@pantus.ru"
                    >support@pantus.ru</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:88005558721pp192"
                    >8 800 555 8721 доб. 192</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-6" style="">
              <h3>Обслуживание розничных продаж</h3>
              <ul>
                <li>
                  <a
                    style="text-decoration: none"
                    href="mailto:retail@pantus.ru"
                    >retail@pantus.ru</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:88005558721pp321"
                    >8 800 555 8721 доб. 321</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <h2>Оптовые продажи</h2>
          <div class="row" style="margin-bottom: 30px">
            <div class="col-md-12">
              <h3>Руководитель отдела продаж</h3>
              <ul>
                <li>
                  Дарья Лебедева: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp 132">
                    132 </a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (927) 059-1405">
                    +7 (927) 059-1405
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-6" style="">
              <h3>Отдел легковых автомобилей</h3>
              <ul>
                <li>
                  Телефон:
                  <a style="text-decoration: none" href="tel:88005558721pp500"
                    >8 800 555 8721 доб. 500</a
                  >
                </li>
                <li>
                  E-mail:
                  <a style="text-decoration: none" href="mailto:cars@pantus.ru"
                    >cars@pantus.ru</a
                  >
                </li>
              </ul>
              <h4>Продажи:</h4>
              <ul>
                <li>
                  Александр Цаплин: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp157"
                    >157</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (927) 126-9791"
                    >+7 (927) 126-9791</a
                  >
                </li>
                <li>
                  Виталий Богданов: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp117"
                    >117</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 141-8821"
                    >+7 (937) 141-8821</a
                  >
                </li>
                <li>
                  Дмитрий Казанцев: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp116"
                    >116</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 974-2977"
                    >+7 (937) 974-2977</a
                  >
                </li>
                <li>
                  Заур Галимов: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp115"
                    >115</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 220-4947"
                    >+7 (937) 220-4947</a
                  >
                </li>
                <li>
                  Наталья Бузовская: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp113"
                    >113</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 974-6849"
                    >+7 (937) 974-6849</a
                  >
                </li>
                <li>
                  Сергей Дунюшин: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp112"
                    >112</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 255-4203"
                    >+7 (937) 255-4203</a
                  >
                </li>
              </ul>
              <h4>Закупки:</h4>
              <ul>
                <li>
                  Группа "Запчасти" - Екатерина Маркова: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp151"
                    >151</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 024-7826"
                    >+7 (937) 024-7826</a
                  >
                </li>
                <li>
                  Группа "РТИ" - Анна Мирзоева: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp119"
                    >119</a
                  >
                </li>
                <li>
                  Группа "РТИ" - Елена Тихонова: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp111"
                    >111</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (927) 116-1496"
                    >+7 (927) 116-1496</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-6" style="">
              <h3>Отдел грузовых автомобилей</h3>
              <ul>
                <li>
                  Телефон:
                  <a style="text-decoration: none" href="tel:88005558721pp600"
                    >8 800 555 8721 доб. 600</a
                  >
                </li>
                <li>
                  E-mail:
                  <a
                    style="text-decoration: none"
                    href="mailto:trucks@pantus.ru"
                    >trucks@pantus.ru</a
                  >
                </li>
              </ul>
              <h4>Продажи:</h4>
              <ul>
                <li>
                  Анна Фролова: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp134"
                    >134</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 974-2984"
                    >+7 (937) 974-2984</a
                  >
                </li>
                <li>
                  Елена Аракчеева: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp125"
                    >125</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 806-7977"
                    >+7 (937) 806-7977</a
                  >
                </li>
                <li>
                  Елена Солодовникова: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp133"
                    >133</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 028-8523"
                    >+7 (937) 028-8523</a
                  >
                </li>
                <li>
                  Оксана Хрущева: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp123"
                    >123</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 258-0204"
                    >+7 (937) 258-0204</a
                  >
                </li>
                <li>
                  Ольга Васильева: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp122"
                    >122</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (927) 141-1807"
                    >+7 (927) 141-1807</a
                  >
                </li>
              </ul>
              <h4>Закупки:</h4>
              <ul>
                <li>
                  Группы "ГАЗ", "УАЗ" - Елена Монахова: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp193"
                    >193</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 814-7990"
                    >+7 (937) 814-7990</a
                  >
                </li>
                <li>
                  Группы "КАМАЗ", "МАЗ" - Марина Решетник: доб.
                  <a style="text-decoration: none" href="tel:88005558721pp127"
                    >127</a
                  >,
                  <a style="text-decoration: none" href="tel:+7 (937) 255-4204"
                    >+7 (937) 255-4204</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <h2>Дополнительные контакты</h2>
          <div class="row" style="margin-bottom: 30px">
            <div class="col-md-6" style="">
              <h3>Бухгалтерия</h3>
              <ul>
                <li>
                  E-mail:
                  <a
                    style="text-decoration: none"
                    href="mailto:buhpantus@list.ru"
                    >buhpantus@list.ru</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:88005558721pp141"
                    >8 800 555 8721 доб. 141</a
                  >,
                  <a style="text-decoration: none" href="tel:88005558721pp142"
                    >142</a
                  >,
                  <a style="text-decoration: none" href="tel:88005558721pp143"
                    >143</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:+7 (927) 278-4775"
                    >+7 (927) 278-4775</a
                  >
                </li>
              </ul>
              <h3>Отдел маркетинга</h3>
              <ul>
                <li>Руководитель отдела Елена Ермолаева</li>
                <li>
                  E-mail:
                  <a
                    style="text-decoration: none"
                    href="mailto:pantus_pr@pantus.ru"
                    >pantus_pr@pantus.ru</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:88005558721pp104"
                    >8 800 555 8721 доб. 104</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:+7 (927) 147-7051"
                    >+7 (927) 147-7051</a
                  >
                </li>
              </ul>
              <h3>Отдел по работе с персоналом</h3>
              <ul>
                <li>Менеджер по персоналу Аэлита Андреенко</li>
                <li>
                  E-mail отдела:
                  <a style="text-decoration: none" href="mailto:hr@pantus.ru"
                    >hr@pantus.ru</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:88005558721pp105"
                    >8 800 555 8721 доб. 105</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:+79378025368"
                    >+7 (937) 802-5368</a
                  >
                </li>
              </ul>
              <a
                style="text-decoration: none"
                href="/upload/files/АНКЕТА для сайта.docx"
                ><b>Анкета для соискателя</b></a
              ><br />
              <a style="text-decoration: none" href="/about/career"
                ><b>Работа в компании</b></a
              >
            </div>
            <div class="col-md-6" style="">
              <h3>Транспортный отдел</h3>
              <ul>
                <li>
                  E-mail:
                  <a
                    style="text-decoration: none"
                    href="mailto:logist@pantus.ru"
                    >logist@pantus.ru</a
                  >
                </li>
                <li>
                  <a style="text-decoration: none" href="tel:88005558721pp170"
                    >8 800 555 8721 доб. 170</a
                  >
                </li>
              </ul>
              <h3>Закупка запчастей</h3>
              <p>
                Коммерческие предложение на запчасти, пожалуйста,<br />
                направляйте на
                <a style="text-decoration: none" href="mailto:zakup@pantus.ru"
                  >zakup@pantus.ru</a
                ><br />
                <a style="text-decoration: none" href="/about/suppliers/"
                  >Подробная информация о закупках</a
                >
              </p>
              <h3>Общие вопросы</h3>
              <p>
                Если вы не нашли нужных контактов в списке,<br />
                направьте ваш вопрос на:
                <a style="text-decoration: none" href="mailto:pantus@list.ru"
                  ><span itemprop="email">pantus@list.ru</span></a
                >
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100" style="position: relative; overflow: hidden">
      <a
        href="https://yandex.ru/maps/11143/balakovo/?utm_medium=mapframe&utm_source=maps"
        style="color: #eee; font-size: 12px; position: absolute; top: 0px"
        >Балаково</a
      ><a
        href="https://yandex.ru/maps/11143/balakovo/house/transportnaya_ulitsa_6/YE4YfgZpT0wDQFtrfXV4d3tkYg==/?ll=47.819694%2C51.996763&utm_medium=mapframe&utm_source=maps&z=17"
        style="color: #eee; font-size: 12px; position: absolute; top: 14px"
        >Транспортная улица, 6 — Яндекс.Карты</a
      ><iframe
        src="https://yandex.ru/map-widget/v1/-/CCUIjYDk1D"
        width="100%"
        height="400"
        frameborder="1"
        allowfullscreen="true"
        style="position: relative"
      />
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Index",
  head() {
    return {
      title: `Контакты Пантус - продажа запчастей, РТИ оптом и в розницу`,
      meta: [
        {
          name: "description",
          content: `Контакты ООО "Пантус" Балаково. Телефоны и Email отделов. График работы. Карта проезда, почтовый и фактический адреса`,
        },
        {
          name: "keywords",
          content: `ооо пантус, контакты пантус, пантус балаково, пантус телефон`,
        },
      ],
    };
  },
};
</script>

<style>
@import "assets/css/static-page-main.css";
</style>
