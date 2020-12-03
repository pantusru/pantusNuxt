export default {
  computed: {
    NavMobile() {
      return this.$store.getters.GetNavMobile;
    },
  },
  methods: {
    GetMainNav(name) {
      this.$store.commit("SetNavMobile", name);
    },
  },
};
