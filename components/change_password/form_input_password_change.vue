<template>
  <b-row class="align-items-lg-center mb-2 flex-column flex-lg-row">
    <b-col cols="8" lg=2 class="mr-4"
    ><label :for="name"> {{ items }}</label></b-col
    >
    <b-col cols="12" lg="5">
      <b-form-input
        v-mask="Vmask"
        :type="type"
        v-model.trim="$v.Form[name].$model"
        :id="name"
        class="w-75"
        size="sm"
      >
      </b-form-input>
      <base-errors-valid :name="name" :error="error" :$v="$v"/>
      <div class="error" v-if="name === 'str_password' && CheckFormNewPassword">Старый пароль введен не верно</div>
    </b-col>
  </b-row>
</template>
<script>
import mixitProps from "@/mixins/input/props/index";
import BaseErrorsValid from "@/components/base/base-errors-valid";
export default {
  name: "form_input_password_change",
  components: {BaseErrorsValid},
  inject: ["$v"],
  mixins: [mixitProps],
  computed:{
    CheckFormNewPassword(){
        return this.$store.getters["GetFormNewPassword"]
    }
  }
};
</script>

