<template>
  <b-container>
    <b-row>
      <b-col cols="3">
        <NavProfile />
      </b-col>
      <b-col>
        <b-form>
          <h5 class="mb-4">Личные данные</h5>
          <ElementForm
            name="login"
            :items="'Логин (e-mail):'"
            :error="error.login"
          />
          <ElementForm name="name" :items="'Имя:'" :error="error.name" />
          <ElementForm
            name="surname"
            :items="'Фамилия:'"
            :error="error.surname"
          />
          <ElementForm
            name="patronymic"
            :items="'Отчество:'"
            :error="error.patronymic"
          />
          <ElementForm
            name="telephone"
            Vmask="+7(###) ###-##-##"
            :items="'Телефон:'"
            :error="error.telephone"
          />
          <h5>Пароли</h5>
          <ElementForm
            name="password"
            :items="'Пароль:'"
            :error="error.password"
            :type="'password'"
          />
          <ElementForm
            name="password2"
            :items="'Повтори пароль:'"
            :error="error.password2"
            :type="'password'"
          />
          <Submit></Submit>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
// УКАЗАТЬ mixit
import mixinvalidator from "@/mixins/Form/profile/validator";
import mixinError from "@/mixins/Form/profile/error";
import ElementForm from "@/components/Profile/input";
import NavProfile from "@/components/Nav/Profile/index";
import Submit from "@/components/Profile/button";
export default {
  provide() {
    return {
      $v: this.$v,
    };
  },
  mixins: [mixinvalidator, mixinError],
  components: {
    ElementForm,
    NavProfile,
    Submit,
  },
};
</script>

