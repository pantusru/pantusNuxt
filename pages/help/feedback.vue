<template>
  <b-container>
    <div class="container-static row">
      <sidebar />
      <div class="col-md-10">
        <h1 class="long">Единая служба качества</h1>
        <h3>Уважаемые клиенты!</h3>
        <p>
          В этом разделе Вы можете задать любые интересующие вопросы по качеству
          работы нашей компании, оставить отзыв или предложение.
        </p>
        <p>Вы можете оставить свой запрос любым удобным для Вас способом:</p>
        <ul>
          <li>
            Звонок на горячую линию:
            <a style="text-decoration: none" href="tel:88005558721"
            >8 (800) 555-8721</a
            >
          </li>
          <li>
            Звонок на мобильный номер оператора Call-центра:
            <a style="text-decoration: none" href="tel:+79271269808"
            >+7 (927) 126-9808</a
            >
          </li>
          <li>
            Отправить письмо на электронную почту:
            <a style="text-decoration: none" href="mailto:otziv@pantus.ru"
            >otziv@pantus.ru</a
            >
          </li>
        </ul>

      </div>
    </div>
  </b-container>
</template>

<script>
import sidebar from "@/components/static/elements/sidebar/index";
export default {
  name: "Feedback",
  components: {
    sidebar,
  },
};
</script>


<style>
@import "assets/css/static-page-main.css";
</style>
