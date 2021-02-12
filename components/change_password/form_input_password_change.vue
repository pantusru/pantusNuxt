<template>
  <base-input-valid
    :name="name"
    :items="items"
    :error="error"
    :type="type"
    :vmask="Vmask"
    :$v="$v"
  >
    <div v-if="name === 'str_password' && CheckFormNewPassword" class="error">
      Пароль не совпадает с БД
    </div>
  </base-input-valid>
</template>
<script>
import mixitProps from "@/mixins/input/props/index";
import BaseErrorsValid from "@/components/base/base-errors-valid";
import BaseInputValid from "@/components/base/base-input-valid";
export default {
  name: "FormInputPasswordChange",
  components: { BaseInputValid, BaseErrorsValid },
  mixins: [mixitProps],
  computed: {
    CheckFormNewPassword() {
      return this.$store.getters.GetFormNewPassword;
    },
  },
};
</script>
