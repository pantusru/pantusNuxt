<template>
  <b-container>
    <div class="container-static">
      <h1>Контакты Пантус - Астрахань</h1>
      <ContactMenu/>
      <div class="row" style="">
        <div class="col-md-6 col-12">
          <h3>
            Телефоны: <a href="tel:88005558721">8 (800) 555 87 21</a>,
            <a href="tel:89270736777">8 (927) 073 67 77</a>
          </h3>
          Бесплатный звонок по всей России
          <h3>Оптовые продажи запчастей</h3>
          <ul>
            <li>
              Email -
              <a href="mailto:sales@pantus.ru" style="background-color: #ffffff"
                >sales@pantus.ru</a
              >
            </li>
            <li>
              Отдел продаж запчастей <b>легковых автомобилей</b> -
              <a style="text-decoration: none" href="tel:88005558721pp500"
                >8 800 555 8721 доб. 500</a
              >
            </li>
            <li>
              Отдел продаж запчастей <b>грузовых автомобилей</b> -
              <a style="text-decoration: none" href="tel:88005558721pp500"
                >8 800 555 8721 доб. 600</a
              >
            </li>
          </ul>
          <h3>Служба технической поддержки сайта</h3>
          <ul>
            <li>
              Email -&nbsp;<a href="mailto:support@pantus.ru"
                >support@pantus.ru</a
              >
            </li>
            <li>
              <a style="text-decoration: none" href="tel:88005558721pp192"
                >8 800 555 8721 доб. 192</a
              >
            </li>
          </ul>
          <h3>График работы:</h3>
          <table border="0" cellpadding="1" cellspacing="1">
            <tbody>
              <tr>
                <td>
                  <span style="color: #c53b3e"><b>Понедельник</b></span>
                </td>
                <td>
                  <b>7:00</b> - <b>16:00</b> по московскому времени<br />
                  <b>8:00</b> - <b>17:00</b> по местному времени
                </td>
              </tr>
              <tr>
                <td>
                  <span style="color: #c53b3e"><b>Вторник</b></span>
                </td>
                <td>
                  <b>7:00</b> - <b>16:00</b> по московскому времени<br />
                  <b>8:00</b> - <b>17:00</b> по местному времени
                </td>
              </tr>
              <tr>
                <td>
                  <span style="color: #c53b3e"><b>Среда</b></span>
                </td>
                <td>
                  <b>7:00</b> - <b>16:00</b> по московскому времени<br />
                  <b>8:00</b> - <b>17:00</b> по местному времени
                </td>
              </tr>
              <tr>
                <td>
                  <span style="color: #c53b3e"><b>Четверг</b></span>
                </td>
                <td>
                  <b>7:00</b> - <b>16:00</b> по московскому времени<br />
                  <b>8:00</b> - <b>17:00</b> по местному времени
                </td>
              </tr>
              <tr>
                <td>
                  <span style="color: #c53b3e"><b>Пятница</b></span>
                </td>
                <td>
                  <b>7:00</b> - <b>16:00</b> по московскому времени<br />
                  <b>8:00</b> - <b>17:00</b> по местному времени
                </td>
              </tr>
              <tr>
                <td>
                  <span style="color: #c53b3e"><b>Суббота</b></span>
                </td>
                <td>Принимаем заказы с сайта</td>
              </tr>
              <tr>
                <td>
                  <span style="color: #c53b3e"><b>Воскресенье</b></span>
                </td>
                <td>Принимаем заказы с сайта</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6 col-12" style="padding-left: 0px; margin-top: 20px">
          <h3>Адрес:&nbsp;</h3>
          <p>
            <b>Астраханская область, г. Астрахань, ул. Крупской, 3</b><br>
          </p>
          <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/37/astrahan/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Астрахань</a><a href="https://yandex.ru/maps/37/astrahan/house/ulitsa_krupskoy_3/YEEYdgNlTkcPQFpsfX9yeHVrZQ==/?ll=48.045728%2C46.339981&utm_medium=mapframe&utm_source=maps&z=17.3" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Крупской, 3 — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUIjYt6hA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
          <img :src="urlPantus + '/media-library/branch_office/astrakhan/front_office.jpg'" style="width: 100%">
        </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Moscow",
  data() {
    return {
      urlPantus: process.env.pantus,
    }
  },
  head() {
    return {
      title: `Автозапчасти в Астрахани - Доставка запчастей оптом - Контакты ПАНТУС`,
      meta: [
        {
          name: "description",
          content: `Доставляем запчасти оптом по всему миру. Беслпатно доставляем запчасти собственным транспортом в 110 родов. Отправляем заказы почтой, курьерскими службами или через сеть постаматов по всему миру.`,
        },
        {
          name: "keywords",
          content: `доставка запчасти оптом бесплатная почтой курьером постаматы автозапчасти срочная`,
        },
      ],
    };
  },
};
</script>
<style>
@import "assets/css/static-page-main.css";
</style>

