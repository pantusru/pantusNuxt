<template>
    <div>
    <b-form class="d-flex p-0 col-3 align-items-center">
        <b-icon-dash class="cursor-pointer" @click="dash"></b-icon-dash>
        <b-input type="number" @input="GetError" @blur="CheckInput" :class="AddClassInput" class="ml-2 mr-2 text-center" v-model="kolvo"></b-input>
        <b-icon-plus class="cursor-pointer" @click="plus"></b-icon-plus>       
    </b-form>
    <div class="error mt-2" v-if="error == true">Не коррентное количество товара</div>
    </div>
</template>
    
<script>
export default {
    props:{
        AddClassInput: {},
        kolvoProps:{

        },
        multiplicity:{
            default: 1,
        },
        array: null,
    },
    data() {
        return {
            kolvo: this.kolvoProps,
            error: false,
        }
    },
    methods:{
        //  Передача Emit
        emitGo(){
            this.$emit('kolvo',{
                kolvo: this.kolvo,
                array: this.array
            })
        },
         //  Уменьшать кол-во товар
        dash(){
            if(this.kolvo >  this.multiplicity){
                this.kolvo =  this.kolvo - this.multiplicity;
                this.emitGo();
            }
        },
         //  Увеличить кол-во товар
        plus(){
            this.kolvo = Number(this.kolvo) + Number(this.multiplicity);
            this.emitGo();
        },
        // Проверка количество товара
        GetError(){
            if(this.error == true){
                this.error = false;
            }
            if(this.kolvo < this.multiplicity || this.kolvo == ""){
                this.error = true;
            }
            if(this.kolvo % this.multiplicity > 0){
                this.error = true;
            } 
        },
        // ОТРАВКА при потери фокуса
        CheckInput(){
            if(this.kolvo < this.multiplicity || this.kolvo == ""){
                this.kolvo  = this.multiplicity;
            }
            if(this.kolvo % this.multiplicity > 0){
                this.kolvo = this.kolvo - (this.kolvo % this.multiplicity);
            }
            this.error  = false;
            this.emitGo();
        },
    },
}
</script>