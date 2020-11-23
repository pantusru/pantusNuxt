<template>
  <b-container>
    <b-form>
      <form_input_password_change
        :error="error.password"
        :type="'password'"
        :name="'password'"
        :items="'Введите пароль'"
        :$v="$v"
      />
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
import form_input_password_change from "@/components/change_password/form_input_password_change";

export default {
  name: "change_password",
  middleware: "change_password",
  mixins: [mixinValidator, mixinError],
  components: {
    form_input_password_change,
    form_button_password_set
  }
};
</script>
