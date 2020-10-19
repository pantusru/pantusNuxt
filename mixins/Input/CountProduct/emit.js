export default {
    methods: {
        Setkolvo(data) {
            this.$store.commit("Cart/CartAll/SetKolvoProductArr", {
                data: data.array,
                value: data.kolvo,
            });
        },
    }
}