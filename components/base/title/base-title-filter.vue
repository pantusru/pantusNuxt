<template>
  <h4 class=" fz-5 font-weight-bold my-1" v-on="$listeners">{{ text }}</h4>
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
