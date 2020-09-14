<template>
    <b-form class="d-flex p-0 col-3 align-items-center">
        <b-icon-dash class="cursor-pointer" @click="dash"></b-icon-dash>
        <b-input  :class="AddClassInput" class="ml-2 mr-2 text-center" v-model="kolvo"></b-input>
        <b-icon-plus class="cursor-pointer" @click="plus"></b-icon-plus>
    </b-form>
</template>
    
<script>
export default {
    props:{
        AddClassInput: {},
        kolvoProps:{
            default: 1,
        },
        array: null,
    },
    data() {
        return {
            kolvo: this.kolvoProps
        }
    },
    watch:{
        kolvo(){
            this.$emit('kolvo',{
                kolvo: this.kolvo,
                array: this.array
            })
        }
    },
    methods:{
        dash(){
            if(this.kolvo > 1){
                this.kolvo --;
            }
        },
        plus(){
            this.kolvo ++;
        },
    }
}
</script>

<style>

</style>