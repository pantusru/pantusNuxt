<template>
  <div>
    <b-container>
      <span @click="scroll('test')">
        <nuxt-link to="test#test">Ссылка</nuxt-link>
      </span>
      <div class="mb-10" />
      <div name="test">Ссылка якорь</div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "TestView",
  components: {
    // test,
  },
  methods: {
    scroll(el) {
      this.$nextTick(() => {
        if (el) {
          const anchor = document.querySelector(`[name = ${el}]`);
          if (anchor) {
            window.scrollTo({
              top: anchor.getBoundingClientRect().top + window.pageYOffset,
            });
          }
        }
      });
    },
  },
};
</script>

<style lang="sass">
.mb-10
  margin-bottom: 10000px
</style>
