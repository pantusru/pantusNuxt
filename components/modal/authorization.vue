<template>
  <b-modal @hidden="reset" id="authorization" centered>
    <template v-slot:modal-header>
      <div class="d-flex aling-items-center justify-content-between w-100">
        <h3>Вход</h3>
        <b-button class="font-weight-bolder" variant="outline-danger" @click="hidden">
          X
        </b-button>
      </div>
    </template>
    <b-form>
      <VInput
        addClass="mb-2 col-7"
        name="email" items="Логин"
        :error="error.email"
        :$v="$v"
      />
      <VInput
        addClass="mb-2 col-7"
        type="password"
        items="Пароль:"
        name="password"
        :error="error.password"
        :$v="$v"
      />
    </b-form>
    <template v-slot:modal-footer>
      <div>
        <base-button class="mr-3" @click="check" text="Воити"></base-button>
        <b-button class="border-0 p-0 bg-white text-dark link-danger" @click="password">Забыли пароль</b-button>
      </div>
      <div class="w100">
        <b-button class="border-0 p-0 bg-white text-dark link-danger" @click="registration">Регистрация</b-button>
      </div>
      <b-row no-gutters class="flex-column">
        <vueRecaptcha :getError.sync="getError" :checkRecaptcha.sync="checkRecaptcha"/>
      </b-row>
    </template>
  </b-modal>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import MixinsError from "@/mixins/form/authorization/error"
import check_recaptcha from "@/mixins/form/check-recaptcha/index"
import MixinsValidations from "@/mixins/form/authorization/validator"
import VInput from "@/components/register/index"
import vueRecaptcha from "@/components/recaptcha/index"
import BaseButton from "@/components/base/button/base-button";

export default {
  mixins: [MixinsError, MixinsValidations, check_recaptcha],
  components: {
    BaseButton,
    VInput,
    vueRecaptcha,
  },
  methods: {
    registration(){
      this.hidden();
      this.$router.push("/register");
    },
    password() { // переход на страницу забыли пароль
      this.hidden();
      this.$router.push("/forgot_password");
    },
    hidden() { // принудительно закрыть модальное окно
      this.$nextTick(() => {
        this.$bvModal.hide('authorization');
      })
    },
    reset() { // При закрытие модального окна удалить все данные
      this.$v.Form.email.$model = "";
      this.$v.Form.password.$model = "";
      this.$v.$reset();
      this.getError = false;
      this.checkRecaptcha = false;
    },
    check(bvModalEvt) { // Проверка что данные введены
      bvModalEvt.preventDefault()
      this.$v.Form.$touch();
      this.checkValidateRecaptcha();
      if (this.$v.Form.$error === true || this.checkRecaptcha === false) { // Проверка что данные не валидны
        return;
      } else {
        if (true) { // Проверка валидности данных с сервера
          this.hidden();
          console.log("ВЫ авторизованы");
          this.$cookies.set("Authorization", this.$v.Form.$model.email, {
            maxAge: 60 * 60 * 24 * 7 * 365,
          });
          this.$store.commit("User/AuthorizationTrue");
          this.push("/");
        }
      }
    }
  }
}
</script>
