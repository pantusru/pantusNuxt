<template>
  <b-container>
    <b-row>
      <NavProfile />
      <b-col>
        <b-form autocomplete="off">
          <h5 class="mb-3">Личные данные</h5>
          <!--          <ElementForm-->
          <!--            name="login"-->
          <!--            :items="'Логин (e-mail):'"-->
          <!--            :error="error.login"-->
          <!--            :$v="$v"-->
          <!--          />-->
          <ElementForm
            :maxlength="64"
            name="name"
            :items="'Имя:'"
            :error="error.name"
            :$v="$v"
          />
          <ElementForm
            :maxlength="64"
            name="surname"
            :items="'Фамилия:'"
            :error="error.surname"
            :$v="$v"
          />
          <ElementForm
            :maxlength="64"
            name="patronymic"
            :items="'Отчество:'"
            :error="error.patronymic"
            :$v="$v"
          />
          <ElementForm
            name="telephone"
            vmask="+7(###) ###-##-##"
            :items="'Телефон:'"
            :error="error.telephone"
            :$v="$v"
          />
          <!--          <h5>Пароли</h5>-->
          <!--          <ElementForm-->
          <!--            name="password"-->
          <!--            :items="'Пароль:'"-->
          <!--            :error="error.password"-->
          <!--            :type="'password'"-->
          <!--            :$v="$v"-->
          <!--          />-->
          <!--          <ElementForm-->
          <!--            name="password2"-->
          <!--            :items="'Повторите пароль:'"-->
          <!--            :error="error.password2"-->
          <!--            :type="'password'"-->
          <!--            :$v="$v"-->
          <!--          />-->
          <Submit :$v="$v" />
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
  components: {
    ElementForm,
    NavProfile,
    Submit,
  },
  // provide() {
  //   return {
  //     $v: this.$v,
  //   };
  // },
  mixins: [mixinvalidator, mixinError],
  middleware: "CheckGuest",
};
</script>
