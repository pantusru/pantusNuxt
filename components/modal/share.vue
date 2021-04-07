<template>
  <b-modal id="share" footer-class="justify-content-start">
    <template #modal-title>
      <h2>Поделиться</h2>
    </template>
    <h4>{{ title }}</h4>
    <b-input :value="value" ref="input"></b-input>
    <template #modal-footer>
      <b-button @click="shareLink" class="bg-danger border-0 px-5">
        Копировать ссылку
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "share",
  props: {
    title: {
      type: String,
      default: "Ссылка на товар",
    },
  },
  computed: {
    value() {
      return process.env.hostName + this.$route.fullPath;
    },
  },
  methods: {
    shareLink() {
      // СПОРНОЕ РЕШЕНИЕ
      this.$refs.input.select();
      this.$clipboard(this.value);
      this.$refs.input.select();
    },
  },
};
</script>
