export default {
    inject:["DataImg"],
    methods:{
        ModalImg(data){
            this.DataImg.data = data;
            this.$bvModal.show('img');
        }
    }
}