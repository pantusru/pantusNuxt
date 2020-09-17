export default {
    data() {
        return {
            dataset: null,
        }
    },
    methods:{
        ModalImg(data){
            console.log( this.$bvModal);
            this.dataset = data;
            this.$bvModal.show('img');	
        }
    }
}