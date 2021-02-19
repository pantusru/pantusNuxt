export default {
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
  methods: {
    async updateCart(CartProduct = this.CartProduct) {
      const arr = [];
      for (const product in CartProduct) {
        for (const offer in CartProduct[product].productOffer) {
          arr.push({
            id: CartProduct[product].productOffer[offer].id,
            quantity: CartProduct[product].productOffer[offer].Count,
          });
        }
      }
      const data = await this.$store.dispatch(
        "Cart/axios/_CartProductPutAll",
        arr
      );
      if (data.error === undefined) {
        this.$store.commit("Cart/CartAll/SetCartProduct", data);
      }
      this.$store.commit("Cart/CartAll/SetCartActual");
    },
  },
};
