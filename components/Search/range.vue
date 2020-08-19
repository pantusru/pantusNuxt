<template>
    <b-form-group>
        <h4>Цена</h4>
        <div class="range-slider">
            <label class="fz-5 mb-4">от {{valueMin}} до {{valueMax}}</label>
            <b-form-input @change="CheckValue" :value="valueMin"  v-model="valueMin" type="range" min="0" max="60000" step="1"></b-form-input>
            <b-form-input @change="CheckValue" :value="valueMax"  v-model="valueMax" type="range" min="0" max="60000" step="1"></b-form-input>
        </div>
    </b-form-group>
</template>

<script>
export default {
    methods:{
        CheckValue(){
            if(this.valueMin > this.valueMax){
                let rav = this.valueMin;
                this.valueMin = this.valueMax;
                this.valueMax = rav;
            } 
        }   
    },
    computed: {
        valueMin:{
            get(){
                return this.$store.getters["formSearch/GetMinValue"]
            },
            set(value){
                this.$store.commit('formSearch/SetMinValue', value)
            }
        },
        valueMax:{
            get(){
                return this.$store.getters["formSearch/GetMaxValue"]
            },
            set(value){
                this.$store.commit('formSearch/SetMaxValue', value)
            }
        },
    }
}
</script>

<style>
.range-slider{
    position: relative;
}
.range-slider input[type=range]{
    position: absolute;
    left: 0;
    bottom: 0;
}
input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
}
</style>