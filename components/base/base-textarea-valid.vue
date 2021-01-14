<template>
  <b-row
    class="align-items-lg-center mb-2 flex-column flex-lg-row justify-content-between"
  >
    <b-col cols="8" lg="2" class="mr-4"
      ><label :for="name"> {{ items }}</label></b-col
    >
    <b-col cols="12" lg="9" class="">
      <b-textarea
        :id="name"
        v-model.trim="$v.Form[name].$model"
        v-mask="Vmask"
        :autocomplete="'off'"
        :type="type"
        class="w-100"
        size="sm"
      />
      <base-errors-valid :name="name" :error="error" :$v="$v" />
      <slot />
    </b-col>
  </b-row>
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
