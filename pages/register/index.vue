<template>
  <b-form class="mb-3">
    <b-container>
      <h3 class="mb-3">Зарегистрироваться как:</h3>
      <radioForm :buyer.sync="buyer" />
      <b-form-group>
        <VInput
          items="Фамилия:"
          name="surname"
          :error="error.surname"
          :$v="$v"
        />
        <VInput items="Имя:" name="name" :error="error.name" :$v="$v" />
        <VInput
          items="Email:"
          name="email"
          :error="error.email"
          :$v="$v"
          @input="ofValidate"
        />
        <VInput
          type="password"
          items="Пароль:"
          name="password"
          :error="error.password"
          :$v="$v"
        />
        <VInput
          type="password"
          items=" Повторите Пароль:"
          name="password2"
          :error="error.password2"
          :$v="$v"
        />
        <VInput
          vmask="+7(###) ###-##-##"
          items="Мобильный телефон"
          name="telephone"
          :error="error.telephone"
          :$v="$v"
        />
      </b-form-group>
      <b-form-group v-if="buyer === 'wholesale'">
        <!--        <VInput-->
        <!--          :slots="true"-->
        <!--          items="Страна:"-->
        <!--          name="country"-->
        <!--          :error="error.country"-->
        <!--          :$v="$v"-->
        <!--        >-->
        <!--          <MSelect :$v="$v" name="country" />-->
        <!--        </VInput>-->
        <VInput
          :slots="true"
          :get-input="false"
          items="Физический адрес"
          name="address"
          :error="error.address"
          :$v="$v"
        >
          <b-form-textarea
            id="address"
            v-model="$v.Form.address.$model"
            no-resize
            type="text"
            size="lg"
          />
        </VInput>
        <VInput
          items="Название организации"
          name="organization"
          :error="error.organization"
          :$v="$v"
        />
        <VInput
          vmask="############"
          items="Инн"
          name="inn"
          :error="error.inn"
          :$v="$v"
        />
      </b-form-group>
      <h6 v-if="ErrorApi !== undefined" class="error">{{ ErrorApi }}</h6>
      <VInput
        :get-input="false"
        :$v="$v"
        :slots="true"
        name="checbox"
        :error="error.checbox"
      >
        <b-form-checkbox v-model="$v.Form.checbox.$model">
          <p>
            Я принимаю условия
            <nuxt-link to="">Соглашения сторон</nuxt-link>
            и соглашаюсь на обработку персональных данных, размещаемых на
            <nuxt-link to="">pantus.ru</nuxt-link>
          </p>
        </b-form-checkbox>
      </VInput>
      <Buttons :$v="$v" :buyer="buyer" />
    </b-container>
  </b-form>
</template>

<script>
import MixinsError from "@/mixins/form/register/error";
import MixinsValidations from "@/mixins/form/register/validator";
// import VInput from "@/components/register/index";
import VInput from "@/components/input/input-validate";
import radioForm from "@/components/register/register-radio-get";
import Buttons from "@/components/register/register-button-set";
import MSelect from "@/components/register/select";

export default {
  components: {
    VInput,
    radioForm,
    Buttons,
    MSelect,
  },
  mixins: [MixinsError, MixinsValidations],
  middleware: "CheckUser",
  data() {
    return {
      buyer: "retail",
    };
  },
  computed: {
    ErrorApi() {
      return this.$store.getters.GetErrorRegister;
    },
  },
  watch: {
    $v() {
      // ХЗ БЕЗ ЭТОГО ВЫДАЕТ ОШИБКУ ЧТО МОДЕЛЬ НЕ НАЙДЕНА =(
    },
  },
  methods: {
    ofValidate() {
      this.$store.commit("SetFormApi", {
        data: "errorRegister",
        value: undefined,
      });
    },
  },
};
</script>
