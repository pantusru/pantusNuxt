<template>
  <b-container>
    <b-row>
      <NavProfile />
      <b-form class="w-75">
      <form_input_password_change :error="error.str_password"
                                  :type="'password'" :name="'str_password'"
                                  :items="'Введите старый пароль пароль'"/>
      <form_input_password_change :error="error.password"
                                  :type="'password'" :name="'password'"
                                  :items="'Введите новый пароль'"/>
      <form_input_password_change :error="error.password2"
                                  :type="'password'" :name="'password2'"
                                  :items="'Введите новый пароль еще раз'"/>
      <button-password-new/>
    </b-form>
    </b-row>
  </b-container>
</template>

<script>
import mixinError from "@/mixins/Form/new_password/error"
import mixinValidator from "@/mixins/Form/new_password/validator"
import form_input_password_change from "@/components/change_password/form_input_password_change";
import ButtonPasswordNew from "@/components/new_password/button-password-new";
import  NavProfile from  "@/components/Nav/Profile/index"
export default {
  data() {
    return {
      value: "",
    }
  },
  name: "new_password",
  middleware: "CheckGuest",
  mixins: [mixinValidator, mixinError],
  provide() {
    return {
      $v: this.$v,
    }
  },
  components: {
    ButtonPasswordNew,
    form_input_password_change,
    NavProfile,
  },
}
</script>
