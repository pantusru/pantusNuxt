<template>
  <b-modal id="authorization" centered @hidden="reset">
    <template #modal-header>
      <div class="d-flex aling-items-center justify-content-between w-100">
        <h3>Вход</h3>
        <b-button
          class="font-weight-bolder"
          variant="outline-danger"
          @click="hidden"
        >
          X
        </b-button>
      </div>
    </template>
    <b-form>
      <VInput
        :slots="true"
        add-class="mb-2 col-7"
        name="email"
        items="Логин"
        :error="error.email"
        :$v="$v"
      >
        <div v-if="GetcheckAuthorization" class="error">
          Введены не верно логин или пароль
        </div>
      </VInput>
      <VInput
        :slots="true"
        add-class="mb-2 col-7"
        type="password"
        items="Пароль:"
        name="password"
        :error="error.password"
        :$v="$v"
      >
        <div v-if="GetcheckAuthorization" class="error">
          Введены не верно логин или пароль
        </div>
      </VInput>
    </b-form>
    <template #modal-footer>
      <div>
        <base-button class="mr-3" text="Воити" @click="check" />
        <b-button
          class="border-0 p-0 bg-white text-dark link-danger"
          @click="password"
          >Забыли пароль</b-button
        >
      </div>
      <div class="w100">
        <b-button
          class="border-0 p-0 bg-white text-dark link-danger"
          @click="registration"
          >Регистрация</b-button
        >
      </div>
      <b-row no-gutters class="flex-column">
        <!-- <vueRecaptcha
          :get-error.sync="getError"
          :check-recaptcha.sync="checkRecaptcha"
        /> -->
      </b-row>
    </template>
  </b-modal>
</template>

<script>
import MixinsError from "@/mixins/form/authorization/error";
// import check_recaptcha from "@/mixins/form/check-recaptcha/index";
import MixinsValidations from "@/mixins/form/authorization/validator";
// import VInput from "@/components/authorization/index";
import VInput from "@/components/input/input-validate";
import vueRecaptcha from "@/components/recaptcha/index";
import BaseButton from "@/components/base/button/base-button";

export default {
  components: {
    BaseButton,
    VInput,
    vueRecaptcha,
  },
  mixins: [MixinsError, MixinsValidations],
  computed: {
    GetcheckAuthorization() {
      return this.$store.getters.GetcheckAuthorization;
    },
  },
  methods: {
    registration() {
      this.hidden();
      this.$router.push("/register");
    },
    password() {
      // переход на страницу забыли пароль
      this.hidden();
      this.$router.push("/forgot_password");
    },
    hidden() {
      // принудительно закрыть модальное окно
      this.$nextTick(() => {
        this.$bvModal.hide("authorization");
      });
    },
    reset() {
      // При закрытие модального окна удалить все данные
      this.$v.Form.email.$model = "";
      this.$v.Form.password.$model = "";
      this.$v.$reset();
      this.$store.commit("SetFormApi", {
        data: "checkAuthorization",
        value: false,
      });
    },
    async check(bvModalEvt) {
      // Проверка что данные введены
      bvModalEvt.preventDefault();
      this.$v.Form.$touch();
      // this.checkValidateRecaptcha();
      if (this.$v.Form.$error === true) {
        // Проверка что данные не валидны
      } else {
        const data = await this.$store.dispatch("User/axios/_Authorization", {
          login: this.$v.Form.email.$model,
          password: this.$v.Form.password.$model,
        });
        if (data.data.id !== null) {
          // Сервер не дал ошибку
          //   // Проверка валидности данных с сервера
          this.$cookies.set("Authorization", data.data.token, {
            maxAge: 60 * 60 * 24 * 7 * 365,
          });
          this.$store.commit("SetCookie", data.data.token);
          await this.$store.dispatch("User/_User_Authorization");
          this.$store.commit("SetFormApi", {
            data: "checkAuthorization",
            value: false,
          });
          await this.$store.dispatch("Cart/CartAll/_CartProduct", true);
          await this.$router.push("/");
          this.hidden();
        } else {
          // На сервере ошибка
          this.$v.Form.password.$model = "";
          this.$v.$reset();
          this.$store.commit("SetFormApi", {
            data: "checkAuthorization",
            value: true,
          });
        }
      }
    },
  },
};
</script>
