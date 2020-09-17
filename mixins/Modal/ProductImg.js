export default {
    data() {
        return {
            dataset: null,
        }
    },
    methods:{
        ModalImg(data , emit = false){
            if(emit == true){
                this.$emit('data', data);
            }else{
                this.dataset = data;
            }
            console.log(this.dataset);	
            this.$bvModal.show('img');
        }
    }
}