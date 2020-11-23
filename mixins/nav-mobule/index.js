export default {
  computed: {
    NavMobile() {
      return this.$store.getters["GetNavMobile"];
    }
  },
  methods: {
    GetMainNav(name) {
      console.log("name");
      this.$store.commit("SetNavMobile", name);
    }
  }
};
