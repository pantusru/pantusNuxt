<template>
  <b-container>
    <b-form>
      <h1 class="mb-4">Восстановить пароль</h1>
      <form_input_password_change
        :error="error.password"
        :type="'password'"
        :name="'password'"
        :items="'Введите пароль'"
        :$v="$v"
        :slots="true"
      >
        <div v-if="CheckFormNewPassword" class="error">
          Пароль не совпадает с БД
        </div>
      </form_input_password_change>
      <form_input_password_change
        :error="error.password2"
        :type="'password'"
        :name="'password2'"
        :items="'Введите пароль еще раз'"
        :$v="$v"
      />
      <form_button_password_set :$v="$v" />
    </b-form>
  </b-container>
</template>

<script>
import form_button_password_set from "@/components/change_password/form_button_password_set";
import mixinError from "@/mixins/form/change_password/error";
import mixinValidator from "@/mixins/form/change_password/validator";
// import form_input_password_change from "@/components/change_password/form_input_password_change";
import form_input_password_change from "@/components/input/input-validate";
export default {
  name: "ChangePassword",
  components: {
    form_input_password_change,
    form_button_password_set,
  },
  mixins: [mixinValidator, mixinError],
  middleware: "change_password",
  head() {
    return {
      title: "Pantus восстановить пароль",
    };
  },
  computed: {
    CheckFormNewPassword() {
      return this.$store.getters.GetFormNewPassword;
    },
  },
};
</script>
