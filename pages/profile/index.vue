<template>
  <b-container>
    <b-row>
        <NavProfile />
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
            :items="'Повторите пароль:'"
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
import mixinvalidator from "@/mixins/form/profile/validator";
import mixinError from "@/mixins/form/profile/error";
import ElementForm from "@/components/profile/profile-input-get";
import NavProfile from "@/components/nav/profile/index";
import Submit from "@/components/profile/profile-button-update";
export default {
  middleware:'CheckGuest',
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

