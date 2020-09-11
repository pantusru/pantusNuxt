<template>
    <b-form class="d-flex p-0 col-3 align-items-center">
        <b-icon-dash class="cursor-pointer" @click="dash"></b-icon-dash>
        <b-input class="col-6 ml-2 mr-2 text-center" v-model="kolvo"></b-input>
        <b-icon-plus class="cursor-pointer" @click="plus"></b-icon-plus>
    </b-form>
</template>
    
<script>
export default {
    data() {
        return {
            kolvo: 1
        }
    },
    watch:{
        kolvo(){
            this.$emit('kolvo',{
                kolvo: this.kolvo
            })
        }
    },
    methods:{
        emit(){
            this.$emit('kolvo',{
                kolvo: this.kolvo
            })
        },
        dash(){
            if(this.kolvo > 0){
                this.kolvo --;
                this.emit();
            }
        },
        plus(){
            this.kolvo ++;
            this.emit();
        },
    }
}
</script>

<style>

</style>