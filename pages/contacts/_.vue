<template>
  <b-container>
    <div v-if="getCheck" class="container-static">
      <h1>Контакты Пантус - {{ getH1 }}</h1>
      <ContactMenu />
      <div class="col-md-6 col-12">
        <h3>Телефон: <a href="tel:88005558721">8 (800) 555 87 21</a></h3>
        Бесплатный звонок по всей России
        <h3>Розничные продажи запчастей</h3>
        <ul>
          <li>
            Email - <a href="mailto:retail@pantus.ru">retail@pantus.ru</a>
          </li>
          <li>
            <a style="text-decoration: none" href="tel:88005558721pp321"
              >8 800 555 8721 доб. 321</a
            >
          </li>
        </ul>
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
            Email - <a href="mailto:support@pantus.ru">support@pantus.ru</a>
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
              <td><b>7:00</b> - <b>16:00</b> по московскому времени</td>
            </tr>
            <tr>
              <td>
                <span style="color: #c53b3e"><b>Вторник</b></span>
              </td>
              <td><b>7:00</b> - <b>16:00</b> по московскому времени</td>
            </tr>
            <tr>
              <td>
                <span style="color: #c53b3e"><b>Среда</b></span>
              </td>
              <td><b>7:00</b> - <b>16:00</b> по московскому времени</td>
            </tr>
            <tr>
              <td>
                <span style="color: #c53b3e"><b>Четверг</b></span>
              </td>
              <td><b>7:00</b> - <b>16:00</b> по московскому времени</td>
            </tr>
            <tr>
              <td>
                <span style="color: #c53b3e"><b>Пятница</b></span>
              </td>
              <td><b>7:00</b> - <b>16:00</b> по московскому времени</td>
            </tr>
            <tr>
              <td>
                <span style="color: #c53b3e"><b>Суббота</b></span>
              </td>
              <td><b>7:00</b> - <b>16:00</b> по московскому времени</td>
            </tr>
            <tr>
              <td>
                <span style="color: #c53b3e"><b>Воскресенье</b></span>
              </td>
              <td><b>7:00</b> - <b>16:00</b> по московскому времени</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h2 v-else>Страница не найдена 404</h2>
  </b-container>
</template>

<script>
export default {
  name: "ContactsAll",
  fetch({ params, store, getters, commit, redirect }) {
    let check = false;
    const data = params.pathMatch.split("/")[0];
    const contacts = store.getters["contacts/getContactsAll"];
    contacts.filter(contact => {
      const cityData = contact.cities.filter(city => city.code === data);
      if (cityData.length !== 0) {
        check = true;
        store.commit("contacts/setDataContactsData", { h1: cityData[0].name });
      }
    });
    if (!check) {
      redirect("/404");
    }
  },
  computed: {
    getCheck() {
      return this.$store.getters["contacts/getDataContacts"].check;
    },
    getH1() {
      return this.$store.getters["contacts/getDataContacts"].h1;
    },
  },
};
</script>
<style>
@import "assets/css/static-page-main.css";
</style>
