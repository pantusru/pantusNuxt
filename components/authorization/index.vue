<template>
  <div :class="addClass">
    <label :for="name">{{ items }}</label>
    <b-form-input
      v-if="slots === false"
      :id="name"
      v-model.trim="$v.Form[name].$model"
      v-mask="Vmask"
      :type="type"
      size="sm"
    />
    <slot v-if="slots === true" />
    <base-errors-valid :error="error" :$v="$v" :name="name" />
    <div v-if="GetcheckAuthorization" class="error">
      Введены не верно логин или пароль
    </div>
  </div>
</template>

<script>
import mixitProps from "@/mixins/input/props/index";
export default {
  mixins: [mixitProps],
  props: {
    addClass: {
      default: "col-lg-4 mb-2",
    },
    slots: {
      default: false,
    },
  },
  computed: {
    GetcheckAuthorization() {
      return this.$store.getters.GetcheckAuthorization;
    },
  },
};
</script>
