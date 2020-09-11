<template>
    <b-form class="d-flex p-0 col-3 align-items-center">
        <b-icon-dash class="cursor-pointer" @click="dash"></b-icon-dash>
        <b-input class="col-6 ml-2 mr-2 text-center" v-model="kovlo"></b-input>
        <b-icon-plus class="cursor-pointer" @click="plus"></b-icon-plus>
    </b-form>
</template>

<script>
export default {
    data() {
        return {
            kovlo: 1
        }
    },
    methods:{
        emit(){
            this.$emit('kolvo',{
                kovlo: this.kovlo
            })
        },
        dash(){
            if(this.kovlo > 0){
                this.kovlo --;
                this.emit();
            }
        },
        plus(){
            this.kovlo ++;
            this.emit();
        },
    }
}
</script>

<style>

</style>