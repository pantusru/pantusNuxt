<template>
  <div>
    <div v-html="test" />
    <b-container>
      <div>{{ test.aad.length }}</div>
      <span @click="scroll('test')">
        <nuxt-link to="help#kak-sdelat-zakaz">Ссылка</nuxt-link>
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
  async asyncData({ store, dispatch }) {
    await store.dispatch("test/actionstest");
  },
  computed: {
    test() {
      return this.$store.getters["test/gettest"];
    },
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
