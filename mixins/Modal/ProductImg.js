export default {
    methods:{
        ModalImg(id){
            this.$store.commit("Modal/SetModalImg", id);
            this.$bvModal.show('img');
        }
    }
}