export default {
    watch:{
        value(){
            console.log(this.value);
            this.$v.Form[this.name].$touch();
            this.$store.commit(this.nameSet, {data:this.VuexSrc, name: this.name, value:this.value});
        }
    }, 
    data(){
        return{
            value: "",
        }
    },
    inject:["$v", "VuexSrc"],
}