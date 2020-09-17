export default {
    data() {
        return {
            dataset: null,
        }
    },
    methods:{
        async ModalImg(data , emit = false){
            if(emit == true){
                this.$emit('dataImg', data);
            }else{
                this.dataset = data;
            }
            this.$bvModal.show('img');
        }
    }
}