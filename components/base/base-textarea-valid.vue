<template>
  <div class="row no-gutters mb-2 flex-column flex-sm-row">
    <label class="mr-4" :for="name"> {{ items }}</label>

    <b-textarea
      :id="name"
      v-model.trim="$v.Form[name].$model"
      v-mask="Vmask"
      :autocomplete="'off'"
      :type="type"
      class="w-75 ml-sm-auto ml-0"
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
