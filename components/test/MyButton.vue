<template>
  <button :class="type">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    round: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "red",
    },
    text: {
      type: String,
      default: "Button",
    },
  },
};
</script>
