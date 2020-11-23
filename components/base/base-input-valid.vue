<template>
  <b-row class="align-items-lg-center mb-2 flex-column flex-lg-row">
    <b-col cols="8" lg="2" class="mr-4"
      ><label :for="name"> {{ items }}</label></b-col
    >
    <b-col cols="12" lg="7">
      <b-form-input
        :autocomplete="'off'"
        v-mask="Vmask"
        :type="type"
        v-model.trim="$v.Form[name].$model"
        :id="name"
        class="w-75"
        size="sm"
      >
      </b-form-input>
      <base-errors-valid :name="name" :error="error" :$v="$v" />
      <slot></slot>
    </b-col>
  </b-row>
</template>
<script>
import BaseErrorsValid from "@/components/base/base-errors-valid";
import mixinsProps from "@/mixins/input/props/index";

export default {
  mixins: [mixinsProps],
  name: "base-input-valid",
  components: { BaseErrorsValid }
};
</script>

<style></style>
