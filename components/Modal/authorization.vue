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
      <VInput addClass="mb-2 col-7" name="email" items="Логин" :error="error.email"/>
      <VInput addClass="mb-2 col-7" type="password" items="Пароль:" name="password" :error="error.password"/>
    </b-form>
    <template v-slot:modal-footer>
      <b-button class="bg-danger border-0" @click="check">Войти</b-button>
      <b-button class="border-0 p-0 bg-white text-dark link-danger" @click="password">Забыли пароль</b-button>
      <b-row no-gutters class="flex-column">
        <vueRecaptcha :getError.sync="getError" :checkRecaptcha.sync="checkRecaptcha"/>
      </b-row>
    </template>
  </b-modal>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import MixinsError from "@/mixins/Form/authorization/error"
import check_recaptcha from "@/mixins/Form/check-recaptcha/index"
import MixinsValidations from "@/mixins/Form/authorization/validator"
import VInput from "@/components/register/index"
import vueRecaptcha from "@/components/Recaptcha/index"

export default {
  mixins: [MixinsError, MixinsValidations, check_recaptcha],
  provide() {
    return {
      $v: this.$v,
    }
  },
  components: {
    VInput,
    vueRecaptcha,
  },
  methods: {
    password() { // переход на страницу забыли пароль
      this.hidden();
      this.$router.push("/forgot_password");
    },
    hidden() { // принудительно закрыть модальное окно
      this.$nextTick(() => {
        this.$bvModal.hide('authorization');
      })
    },
    reset() { // При закрытие комального окна удалить все данные
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
        }
      }
    }
  }
}
</script>
