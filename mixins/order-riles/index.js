export default {
  computed: {
    RulesAll() {
      return this.$store.getters["Order/Payment/Index/GetRiles"];
    },
  },
  methods: {
    RilesOrder(
      data,
      id,
      name = "delivery_type_id",
      name2 = "paysystem_type_id"
    ) {
      const rulesCheck = this.RulesAll.filter(elem => elem[name] === id);
      for (const key in data) {
        const rules = rulesCheck.filter(rules => rules[name2] === data[key].id);
        if (rules.length !== 0) {
          this.$store.commit("Order/Payment/Index/SetActive", {
            data: data[key],
            value: true,
          });
        } else {
          this.$store.commit("Order/Payment/Index/SetActive", {
            data: data[key],
            value: false,
          });
        }
      }
    },
  },
};
