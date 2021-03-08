<template>
  <div :class="classImg">
    <img class="img" :src="src" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ProductImg',
  props: {
    classImg: {
      type: String,
      default: 'product-img',
    },
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
}
</script>
