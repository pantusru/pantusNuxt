export default {
    watch:{
        value(){
            this.$store.commit(this.nameSet, {data:this.VuexSrc, name: this.name, value:this.value});
        }
    }, 
    data(){
        return{
            value: "",
        }
    },
    inject:["VuexSrc"],
}