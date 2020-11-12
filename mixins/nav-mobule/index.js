export default {
  computed: {
    NavMobile() {
      return this.$store.getters["GetNavMobile"];
    },
  },
  methods:{
    GetMainNav(name, url){
      this.$store.commit("SetNavMobile", name);
    }
  }
}
