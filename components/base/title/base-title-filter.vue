<template>
  <h4 class="mb-0 fz-5 font-weight-bold" v-on="$listeners">{{ text }}</h4>
</template>

<script>
export default {
  name: "base-title-filter",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
