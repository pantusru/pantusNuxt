export default {
  computed: {
    TypeUser() {
      return this.$store.getters["User/TypeUser"] === "wholesale";
    },
  },
};
