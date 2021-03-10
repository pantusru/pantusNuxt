<template>
  <component :is="component"> {{ symma.toFixed(2) }} ₽</component>
</template>

<script>
export default {
  name: 'ProductSymma',
  props: {
    component: {
      type: String,
      default: 'div',
    },
    symma: {
      type: Number,
    },
  },
}
</script>

<!--<style scoped></style>-->
