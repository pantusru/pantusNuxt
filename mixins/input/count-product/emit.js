export default {
  methods: {
    SetCount(data, index) {
      if (data.array.checkCount === false) {
        // Данный товар не является обновленным
        this.$store.commit(
          "Cart/CartAll/SetCartUpdateCount",
          this.GetCartUpdateCount + 1
        );
      }
      this.$store.commit("Cart/CartAll/SetCountProductArr", {
        data: data.array,
        value: data.Count
      });
      this.$store.commit("Cart/CartAll/SetCartCheckCount", {
        index: index,
        value: true
      });
    }
  },
  computed: {
    GetCartUpdateCount() {
      return this.$store.getters["Cart/CartAll/GetCartUpdateCount"];
    }
  }
};
