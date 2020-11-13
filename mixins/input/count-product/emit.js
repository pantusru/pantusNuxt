export default {
  methods: {
    Setkolvo(data, index) {
      if (data.array.checkCount === false) {
        let count = this.GetCartUpdateCount + 1;
        this.$store.commit("Cart/CartAll/SetCartUpdateCount", count);
      }
      this.$store.commit("Cart/CartAll/SetKolvoProductArr", {
        data: data.array,
        value: data.kolvo,
      });
      this.$store.commit("Cart/CartAll/SetCartCheckCount", {
        index: index,
        value: true,
      });
    }
  },
  computed:{
    GetCartUpdateCount(){
      return this.$store.getters["Cart/CartAll/GetCartUpdateCount"]
    }
  }
}
