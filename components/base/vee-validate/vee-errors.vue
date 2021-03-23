<template>
  <div>
    <div v-for="(error, index) in errors" :key="index">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'VeeErrors',
  props: {
    errors: {
      type: Array,
    },
  },
}
</script>
