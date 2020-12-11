<template>
  <h1 class="mb-5">{{ text }}</h1>
</template>

<script>
export default {
  name: "BaseTitleCatalog",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
