<template>
  <base-input-valid
    :placeholder="placeholder"
    :maxlength="maxlength"
    :name="name"
    :items="items"
    :error="error"
    :type="type"
    :vmask="Vmask"
    :$v="$v"
  >
    <div v-if="name === 'password' && passwordCheck" class="error">
      Пароль не совпадает с БД
    </div>
  </base-input-valid>
</template>
<script>
import mixinsProps from "@/mixins/input/props/index";
import BaseInputValid from "@/components/base/base-input-valid";
export default {
  components: { BaseInputValid },
  mixins: [mixinsProps],
  data() {
    return {
      nameSet: "User/SetFull",
      value: "",
    };
  },
  computed: {
    dataset() {
      return this.$store.getters["User/FormData"][this.name];
    },
    passwordCheck() {
      return this.$store.getters.GetFormPassword;
    },
  },
  // inject: ["$v"],
  created() {
    if (this.dataset !== undefined) {
      this.$v.Form[this.name].$model = this.dataset;
    }
  },
};
</script>
