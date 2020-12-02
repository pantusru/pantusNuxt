export default {
  methods: {
    ModalImg(data) {
      this.$store.commit("Modal/SetModalImg", data);
      this.$bvModal.show("img");
    },
  },
};
