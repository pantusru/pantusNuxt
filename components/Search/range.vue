<template>
    <b-form-group>
        <h4>Цена</h4>
        <div class="range-slider">
            <label class="fz-5 mb-4">от {{valueFull.valueMin}} до {{valueFull.valueMax}}</label>
            <b-form-input @change="CheckValue" :value="valueFull.valueMin"  v-model="valueFull.valueMin" type="range" min="0" max="60000" step="1"></b-form-input>
            <b-form-input @change="CheckValue" :value="valueFull.valueMax"  v-model="valueFull.valueMax" type="range" min="0" max="60000" step="1"></b-form-input>
        </div>
    </b-form-group>
</template>

<script>
export default {
    data() {
        return {
            valueFull:{
                valueMax: 60000,
                valueMin: 0,
            },
        }
    },
    methods:{
        CheckValue(){
            if(this.valueFull.valueMin > this.valueFull.valueMax){
                let rav = this.valueFull.valueMin;
                this.valueFull.valueMin = this.valueFull.valueMax;
                this.valueFull.valueMax = rav;
            } 
        }   
    }
}
</script>

<style>

</style>