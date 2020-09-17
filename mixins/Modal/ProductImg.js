export default {
    data() {
        return {
            dataset: null,
        }
    },
    methods:{
        ModalImg(data){
            this.dataset = data;
            this.$bvModal.show('img');	
        }
    }
}