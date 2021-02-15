<template>
  <button class="button-scroll-top" @click="scrollTop">
    <b-icon-arrow-up />
  </button>
</template>

<script>
export default {
  name: "ButtonScrollTop",
  methods: {
    scrollTop() {
      window.scroll(0, 0);
    },
  },
};
</script>

<style lang="sass">
.button-scroll-top
  border: 3px solid #576b77
  border-radius: 120px

  font-size: 20px

  position: fixed
  bottom: 15px
  left: 15px
  z-index: 1000
</style>
