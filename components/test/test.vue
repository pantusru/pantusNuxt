<template>
  <component :is="component_tag" :class="name_class">
    <slot />
  </component>
</template>

<script>
export default {
  name: "test",
  props: {
    component_tag: {
      type: String,
      default: "div",
    },
    name_class: {
      type: String,
      request: true,
    },
  },
};
</script>

<style></style>
