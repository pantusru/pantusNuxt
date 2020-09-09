<template>
    <div class="col-4 mb-2">
        <label :for="name">{{ items }}:</label>
        <b-form-input v-if="slots== false"
            @input="check"
            :type="type" 
            v-model.trim="$v.Form[name].$model" 
            :id="name" 
            size="sm">
        </b-form-input>
        <slot v-if="slots == true">
            
        </slot>
        <div class="error-full" v-for="data in error" :key="data.id">
            <div class="error" v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"> {{data.text}} </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name:{},
        error:{},
        items:{},
        type:{
            default: "text",
        },
        slots: {
            default: false,
        }
    },
    inject:["$v"],
    methods:{
        check(){
            console.log(this.$v.Form);
        }
    }
}
</script>

<style>

</style>