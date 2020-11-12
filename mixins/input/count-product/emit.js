export default {
    methods: {
        Setkolvo(data,index) {
          console.log(index);
            this.$store.commit("Cart/CartAll/SetKolvoProductArr", {
                data: data.array,
                value: data.kolvo,
            });
        },
    }
}
