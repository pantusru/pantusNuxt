<template>
  <h3 class="error">
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: "base-title-info",
  props: {
    text: {
      type: String,
      request: true
    }
  }
};
</script>

<style></style>
