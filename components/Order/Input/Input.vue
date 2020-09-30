<template>
    <div :class="addClass">
        <div class="d-flex justify-content-between">
            <label class="mr-3  pl-0" :for="name">{{ items }}</label>
            <b-form-input
                v-mask="Vmask"
                :type="type" 
                v-model.trim="value" 
                :id="name"  
                class="w-75" 
                size="sm">
            </b-form-input>
        </div>
        <div class="error-full text-center">
            <div class="error" v-for="data in error" :key="data.id">
                <span v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty">{{data.text}} </span>     
            </div>
        </div>
    </div>
</template>

<script>
import mixitProps from "@/mixins/Input/Props/index"
import mixit from "@/mixins/Input/VuexInput"
export default {
    created(){
        this.$store.commit(this.nameSet, {data:this.VuexSrc, name: this.name, value:this.value});
    },
    mixins:[mixitProps, mixit],
    inject:["$v", "VuexSrc", "User"], // Переопределено
    data(){ // Переопределено
        return{
            nameSet: "Order/Form/SetFull",
            value: this.User[this.name]
        }
    },
    props:{
        addClass:{
            default: "mb-2"
        },
    },
}
</script>

