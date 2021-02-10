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
  </div>
</template>
<script>
import mixitProps from "@/mixins/input/props/index";
import BaseErrorsValid from "@/components/base/base-errors-valid";
export default {
  components: { BaseErrorsValid },
  mixins: [mixitProps],
  props: {
    addClass: {
      default: "col-lg-4 mb-2",
    },
    slots: {
      default: false,
    },
  },
};
</script>
