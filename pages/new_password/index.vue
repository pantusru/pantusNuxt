<template>
  <b-container>
    <b-row>
      <NavProfile />
      <b-form class="w-75">
        <form_input_password_change
          :error="error.str_password"
          :type="'password'"
          :name="'str_password'"
          :items="'Введите старый пароль пароль'"
          :$v="$v"
        />
        <form_input_password_change
          :error="error.password"
          :type="'password'"
          :name="'password'"
          :items="'Введите новый пароль'"
          :$v="$v"
        />
        <form_input_password_change
          :error="error.password2"
          :type="'password'"
          :name="'password2'"
          :items="'Введите новый пароль еще раз'"
          :$v="$v"
        />
        <button-password-new :$v="$v" />
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
import mixinError from "@/mixins/form/new_password/error";
import mixinValidator from "@/mixins/form/new_password/validator";
import form_input_password_change from "@/components/change_password/form_input_password_change";
import ButtonPasswordNew from "@/components/new_password/button-password-new";
import NavProfile from "@/components/nav/profile/index";

export default {
  data() {
    return {
      value: ""
    };
  },
  name: "new_password",
  middleware: "CheckGuest",
  mixins: [mixinValidator, mixinError],
  components: {
    ButtonPasswordNew,
    form_input_password_change,
    NavProfile
  }
};
</script>
