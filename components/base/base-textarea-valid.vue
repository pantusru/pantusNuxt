<template>
  <div
    class="d-flex flex-row align-items-lg-center mb-2 flex-column flex-lg-row justify-content-between"
  >
    <div class="mr-4">
      <label :for="name"> {{ items }}</label>
    </div>

    <b-textarea
      :id="name"
      v-model.trim="$v.Form[name].$model"
      v-mask="Vmask"
      :autocomplete="'off'"
      :type="type"
      class="w-75 ml-auto"
      size="sm"
    />
    <base-errors-valid :name="name" :error="error" :$v="$v" />
    <slot />
  </div>
</template>
<script>
import BaseErrorsValid from "@/components/base/base-errors-valid";
import mixinsProps from "@/mixins/input/props/index";

export default {
  name: "BaseTextareaValid",
  components: { BaseErrorsValid },
  mixins: [mixinsProps],
};
</script>
