<template>
  <nuxt-link
    :to="'/news/' + dataset.code"
    class="d-flex justify-content-between text-decoration-none shadow px-3 py-4 mb-3"
  >
    <div class="text-danger">{{ dataset.name }}</div>
    <div class="text-secondary">{{ dataset.count }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    dataset: {},
  },
};
</script>
