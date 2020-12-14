<template>
  <div>
    <div>
      <label>{{ text }}</label>
      <input
        v-model="VuexForm[nameInput].value"
        :type="typeInput"
        :placeholder="placeholder"
        @input="OnSwitch(nameInput)"
      />
    </div>
    <div class="block-error_full">
      <template v-for="data in VuexForm[nameInput].error">
        <div v-if="data.active === true" :key="data.id">
          {{ data.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import validate from "@/mixins/validate-form/index";
export default {
  name: "InputValid",
  mixins: [validate],
  props: {
    placeholder: {
      type: String,
    },
    typeInput: {
      type: String,
      default: "text",
    },
    VuexForm: {
      type: Object,
    },
    text: {
      type: String,
      request: true,
    },
    nameInput: {
      type: String,
    },
  },
};
</script>
