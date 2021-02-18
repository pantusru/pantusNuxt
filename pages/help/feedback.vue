<template>
  <b-container>
    <div class="container-static row">
      <sidebar :items-menu="sideBarItems" />
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
        <div class="mb-2">
          <h2>Оформите Ваш вопрос:</h2>
          <VInput
            items="Фамилия:"
            name="lastName"
            :error="error.lastName"
            :$v="$v"
          />
          <VInput items="Имя:" name="name" :error="error.name" :$v="$v" />
          <VInput items="Email:" name="Email" :error="error.Email" :$v="$v" />
          <VInput
            type="tel"
            items="Телефон:"
            name="tlf"
            :error="error.tlf"
            :$v="$v"
            vmask="+#(###) ###-##-##"
          />
          <div class="col-12 col-md-6">
            <label>Сообщение:</label>
            <b-textarea
              id="message"
              v-model.trim="$v.Form['message'].$model"
              :autocomplete="'off'"
              items="Сообщение"
              :error="error.message"
              size="sm"
            />
            <base-errors-valid name="message" :error="error.message" :$v="$v" />
          </div>
        </div>
        <div class="px-15px">
          <base-button @click="ClickBnt">Отправить</base-button>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import MixinsError from "@/mixins/form/feedback/error";
import MixinsValidations from "@/mixins/form/feedback/validator";
// import VInput from "@/components/register/index";
// import VInput from "@/components/input/input-validate";
import VInput from "@/components/input/input-validate";
import MixinMenuAll from "@/mixins/static-data/menu-all";
import sidebar from "@/components/static/elements/sidebar/index";
export default {
  name: "Feedback",
  components: {
    sidebar,
    VInput,
  },
  mixins: [MixinsError, MixinsValidations, MixinMenuAll],
  head() {
    return {
      title: `Единая служба качества`,
      meta: [
        {
          name: "description",
          content: `Единая служба качества интернет-магазина "Пантус"`,
        },
        {
          name: "keywords",
          content: `Запчасти, автозапчасти, купить запчасти, каталог запчастей, интернет магазин автозапчастей, продажа запчастей, запчасти ваз, газ, камаз, маз`,
        },
      ],
    };
  },
  // async created() {
  //   await this.$router.push("/404");
  // },
  methods: {
    ClickBnt() {
      this.$v.Form.$touch();
      if (this.$v.Form.$error === false) {
        // ЗАПРОС  НА СЕРВЕР
      }
    },
  },
};
</script>

<style>
@import "assets/css/static-page-main.css";
</style>
